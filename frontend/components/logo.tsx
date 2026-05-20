import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "light" | "dark";
  compact?: boolean;
};

export function Logo({ variant = "light", compact = false }: LogoProps) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={variant === "light" ? "/images/hurkify-icon.png" : "/images/hurkify-icon-purple.png"}
        alt=""
        width={320}
        height={266}
        priority
        className="h-8 w-auto object-contain"
      />
      <span
        className={cn(
          "max-w-[190px] text-sm font-black leading-tight tracking-tight sm:max-w-none",
          compact && "hidden sm:inline",
          variant === "light" ? "text-white" : "text-secondary",
        )}
      >
        Hurkify Technology Limited
      </span>
    </div>
  );
}
