import * as React from "react";
import { cn } from "@/lib/utils";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
  label?: string;
  options: { value: string; label: string }[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, label, id, options, ...props }, ref) => {
    const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            htmlFor={selectId}
            className="block font-sans text-xs font-semibold tracking-wider uppercase text-[#4e4538]"
          >
            {label}
          </label>
        )}
        <select
          id={selectId}
          className={cn(
            "w-full bg-transparent border-0 border-b border-[#222220]/25 focus:border-[#b68d40] focus:ring-0 px-0 py-2.5 text-base md:text-sm text-[#222220] transition-colors rounded-none [&>option]:bg-[#fcf9f2] [&>option]:text-[#222220]",
            error && "border-red-600 focus:border-red-600",
            className
          )}
          ref={ref}
          aria-invalid={error ? "true" : "false"}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="text-xs text-red-600 font-sans">{error}</p>
        )}
      </div>
    );
  }
);
Select.displayName = "Select";
