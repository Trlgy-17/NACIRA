"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { MessageSquare } from "lucide-react";

// Single-step Zod Schema
export const consultationSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  location: z.string().min(2, "Lokasi proyek wajib diisi"),
  description: z.string().min(5, "Deskripsikan kebutuhan interior (min. 5 karakter)"),
});

export type ConsultationFormValues = z.infer<typeof consultationSchema>;

export function ConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      location: "",
      description: "",
    },
  });

  const onSubmit = async (data: ConsultationFormValues) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    setServerError(null);

    const waUrl = buildWhatsAppUrl({
      name: data.name,
      location: data.location,
      description: data.description,
    });

    try {
      // Send to server endpoint for logging/tracking
      await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (err: unknown) {
      console.warn("[API_LOG_WARNING]", err);
    } finally {
      setIsSubmitting(false);
      // Redirect to WhatsApp immediately
      window.open(waUrl, "_blank");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {serverError && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs font-sans rounded">
          {serverError}
        </div>
      )}

      {/* 1. Nama */}
      <Input
        label="1. Nama Lengkap *"
        placeholder="mis. Budi Santoso"
        error={errors.name?.message}
        {...register("name")}
      />

      {/* 2. Lokasi Project */}
      <Input
        label="2. Lokasi Project *"
        placeholder="mis. Senopati, Jakarta Selatan"
        error={errors.location?.message}
        {...register("location")}
      />

      {/* 3. Kebutuhan (Textarea) */}
      <Textarea
        label="3. Kebutuhan Interior *"
        placeholder="mis. Renovasi interior rumah 2 lantai, custom kitchen set, dan master bedroom..."
        error={errors.description?.message}
        {...register("description")}
      />

      <div className="pt-2">
        <Button
          type="submit"
          variant="gold"
          size="lg"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center space-x-2 text-sm font-semibold uppercase tracking-wider"
        >
          <MessageSquare className="w-5 h-5" />
          <span>{isSubmitting ? "Menghubungkan..." : "Kirim via WhatsApp"}</span>
        </Button>
      </div>
    </form>
  );
}
