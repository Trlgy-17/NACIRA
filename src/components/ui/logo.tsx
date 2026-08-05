import React from "react";

interface NaciraLogoProps {
  className?: string;
  showText?: boolean;
  height?: number;
  textColor?: string;
  subtextColor?: string;
}

export function NaciraLogo({
  className = "",
  showText = true,
  height = 38,
  textColor = "text-[#222220]",
  subtextColor,
}: NaciraLogoProps) {
  // Determine subtext color based on theme context if not explicitly provided
  const isDarkTheme =
    textColor.includes("white") || textColor.includes("fcf9f2") || textColor.includes("b68d40");
  const effectiveSubtext = subtextColor || (isDarkTheme ? "text-[#b68d40]" : "text-[#77746d]");

  return (
    <div className={`inline-flex items-center space-x-3 ${className}`}>
      {/* Monogram Arch Mark Vector */}
      <svg
        width={Math.round(height * 0.85)}
        height={height}
        viewBox="0 0 100 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 ${textColor}`}
        aria-hidden="true"
      >
        <path
          d="M 16 90 V 46 C 16 26.1 32.1 10 52 10 C 71.9 10 88 26.1 88 46 V 62 C 88 67.5 83.5 72 78 72 C 72.5 72 68 67.5 68 62 V 46 C 68 37.2 60.8 30 52 30 C 43.2 30 36 37.2 36 46 V 90 C 36 95.5 31.5 100 26 100 C 20.5 100 16 95.5 16 90 Z"
          fill="currentColor"
        />
        <circle cx="78" cy="88" r="12" fill="currentColor" />
      </svg>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col justify-center leading-none">
          <span
            className={`font-sans font-bold tracking-[0.25em] text-sm ${textColor} uppercase`}
          >
            NACIRA
          </span>
          <span
            className={`font-sans font-semibold tracking-[0.35em] text-[10px] ${effectiveSubtext} uppercase mt-1`}
          >
            STUDIO
          </span>
        </div>
      )}
    </div>
  );
}
