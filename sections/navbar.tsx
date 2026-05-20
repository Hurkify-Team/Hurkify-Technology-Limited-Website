"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { navItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isLightHeader, setIsLightHeader] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("home");
      const heroBottom = hero?.getBoundingClientRect().bottom ?? 0;
      setIsLightHeader(heroBottom <= 72);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all",
        isLightHeader
          ? "border-b border-[#E8E1F1] bg-white/92 shadow-[0_12px_35px_rgba(26,11,46,.08)] backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <nav className="container flex h-[62px] items-center justify-between gap-6">
        <a href="#home" aria-label="Hurkify Technology Limited home">
          <Logo compact variant={isLightHeader ? "dark" : "light"} />
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <a
              className={cn(
                "flex items-center gap-1 text-[12px] font-black transition hover:text-[#6D35FF]",
                isLightHeader ? "text-secondary" : "text-white",
              )}
              href={item.href}
              key={item.href}
            >
              {item.label}
              {item.label === "Resources" ? <ChevronDown className="size-3" /> : null}
            </a>
          ))}
        </div>

        <Button asChild className="hidden h-9 rounded-md px-5 text-xs lg:inline-flex" size="sm">
          <a href="#consultation">
            Book Consultation <ArrowRight className="size-4" />
          </a>
        </Button>

        <button
          className={cn(
            "grid size-11 place-items-center rounded-lg border transition lg:hidden",
            isLightHeader
              ? "border-[#E8E1F1] bg-[#F8F4FC] text-secondary"
              : "border-white/15 bg-white/5 text-white",
          )}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "container grid overflow-hidden transition-all lg:hidden",
          open ? "max-h-[560px] pb-5" : "max-h-0",
        )}
      >
        <div
          className={cn(
            "rounded-2xl border p-3 shadow-premium backdrop-blur-xl",
            isLightHeader ? "border-[#E8E1F1] bg-white" : "border-white/10 bg-secondary/95",
          )}
        >
          {navItems.map((item) => (
            <a
              className={cn(
                "block rounded-xl px-4 py-3 text-sm font-bold",
                isLightHeader
                  ? "text-secondary hover:bg-[#F8F4FC] hover:text-[#6D35FF]"
                  : "text-white/82 hover:bg-white/10 hover:text-white",
              )}
              href={item.href}
              key={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button asChild className="mt-3 w-full">
            <a href="#consultation" onClick={() => setOpen(false)}>
              Book Consultation <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
