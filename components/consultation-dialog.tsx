"use client";

import { useEffect, useId, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ConsultationDialogProps = {
  className?: string;
  label?: string;
  showArrow?: boolean;
  size?: ButtonProps["size"];
  variant?: ButtonProps["variant"];
  onOpen?: () => void;
};

export function ConsultationDialog({
  className,
  label = "Book Consultation",
  showArrow = true,
  size,
  variant,
  onOpen,
}: ConsultationDialogProps) {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function openDialog() {
    onOpen?.();
    setOpen(true);
  }

  return (
    <>
      <Button className={className} size={size} type="button" variant={variant} onClick={openDialog}>
        {label}
        {showArrow ? <ArrowRight className="size-4" /> : null}
      </Button>

      {open ? (
        <div
          aria-modal="true"
          aria-labelledby={titleId}
          className="fixed inset-0 z-[100] grid place-items-center bg-[#080313]/78 px-4 py-6 backdrop-blur-sm"
          role="dialog"
        >
          <button
            aria-label="Close consultation form"
            className="absolute inset-0 cursor-default"
            type="button"
            onClick={() => setOpen(false)}
          />
          <div className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/12 bg-white p-5 shadow-[0_34px_110px_rgba(0,0,0,.45)] md:p-7">
            <button
              aria-label="Close consultation form"
              className="absolute right-4 top-4 grid size-10 place-items-center rounded-full border border-[#E8E1F1] bg-[#F8F4FC] text-secondary transition hover:bg-white"
              type="button"
              onClick={() => setOpen(false)}
            >
              <X className="size-5" />
            </button>

            <div className={cn("mb-6 pr-12", "text-secondary")}>
              <p className="mb-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#7C3AED]">
                Consultation Request
              </p>
              <h2 id={titleId} className="text-[26px] font-black leading-tight tracking-tight md:text-[34px]">
                Tell us what you want to build, fix, or modernize.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5E5870]">
                Fill the details below and choose whether to send the request to our email or
                continue through WhatsApp customer support.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      ) : null}
    </>
  );
}
