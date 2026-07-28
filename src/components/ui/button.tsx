import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-xs font-semibold uppercase tracking-widest transition-colors duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-[#222220] text-white hover:bg-[#3E4338] rounded-[4px]",
        gold:
          "bg-[#b68d40] text-white hover:bg-[#7b580d] rounded-[4px]",
        outline:
          "border border-[#222220]/20 text-[#222220] hover:bg-[#222220] hover:text-white rounded-[4px]",
        ghost:
          "text-[#222220] hover:text-[#b68d40] transition-colors",
        link:
          "text-[#222220] underline-offset-4 hover:underline",
      },
      size: {
        default: "px-6 py-3.5",
        sm: "px-4 py-2.5 text-[11px]",
        lg: "px-8 py-4 text-xs",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
