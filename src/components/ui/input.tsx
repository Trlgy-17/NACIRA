import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, label, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="block font-sans text-xs font-semibold tracking-wider uppercase text-[#4e4538]"
          >
            {label}
          </label>
        )}
        <input
          type={type}
          id={inputId}
          className={cn(
            "w-full bg-transparent border-0 border-b border-[#222220]/25 focus:border-[#b68d40] focus:ring-0 px-0 py-2.5 text-base md:text-sm text-[#222220] transition-colors rounded-none placeholder:text-[#77746d]/60",
            error && "border-red-600 focus:border-red-600",
            className
          )}
          ref={ref}
          aria-invalid={error ? "true" : "false"}
          {...props}
        />
        {error && (
          <p className="text-xs text-red-600 font-sans">{error}</p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";
