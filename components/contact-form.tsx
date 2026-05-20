"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";

const services = [
  "IT Consulting & Digital Transformation",
  "Software Development",
  "Healthcare Compliance Support",
  "HEFAMAA Registration Support",
  "HEFAMAA Yearly Renewal Assistance",
  "EMR & Health-Tech Solutions",
  "Website Development",
  "Cloud & Technical Support",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: services[0],
    },
  });

  async function onSubmit(values: ContactInput) {
    setStatus("idle");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      setStatus("error");
      return;
    }

    setStatus("success");
    reset({ service: services[0], name: "", email: "", phone: "", message: "" });
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <input {...register("name")} className="input" placeholder="Your full name" />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input {...register("email")} className="input" placeholder="you@example.com" type="email" />
        </Field>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Phone" error={errors.phone?.message}>
          <input {...register("phone")} className="input" placeholder="+234..." />
        </Field>
        <Field label="Service Interest" error={errors.service?.message}>
          <select {...register("service")} className="input">
            {services.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Message" error={errors.message?.message}>
        <textarea
          {...register("message")}
          className="input min-h-36 resize-y"
          placeholder="Tell us what you want to improve or build."
        />
      </Field>

      <Button className="w-full md:w-fit" disabled={isSubmitting} type="submit">
        {isSubmitting ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
        Send Enquiry
      </Button>

      {status === "success" ? (
        <p className="text-sm font-semibold text-emerald-600">Message sent. Hurkify will follow up shortly.</p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm font-semibold text-red-600">
          The form is valid, but email delivery is not configured yet. Please use WhatsApp or email directly.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm font-bold text-secondary">
      {label}
      {children}
      {error ? <span className="text-xs text-red-600">{error}</span> : null}
    </label>
  );
}
