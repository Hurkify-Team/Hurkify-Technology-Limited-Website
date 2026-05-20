import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <p
        className={cn(
          "mb-3 text-xs font-black uppercase tracking-[0.18em]",
          dark ? "text-purple-200" : "text-[#6D35FF]",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "text-[26px] font-black leading-[1.1] tracking-tight md:text-[31px]",
          dark ? "text-white" : "text-secondary",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-5 text-base leading-7", dark ? "text-white/70" : "text-[#6B6476]")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
