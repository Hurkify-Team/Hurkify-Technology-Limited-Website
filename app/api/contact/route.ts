import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { contactRecipient, contactSender, resend } from "@/lib/resend";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const data = parsed.data;

  if (supabase) {
    await supabase.from("contact_submissions").insert({
      name: data.name,
      organization: data.organization || null,
      email: data.email,
      phone: data.phone || null,
      service: data.service,
      message: data.message,
    });
  }

  if (!resend) {
    return NextResponse.json(
      {
        ok: false,
        message: "RESEND_API_KEY is not configured. Submission validated but email was not sent.",
      },
      { status: 503 },
    );
  }

  await resend.emails.send({
    from: contactSender,
    to: contactRecipient,
    replyTo: data.email,
    subject: `New Hurkify enquiry: ${data.service}`,
    text: [
      `Name: ${data.name}`,
      `Organization: ${data.organization || "Not provided"}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "Not provided"}`,
      `Service: ${data.service}`,
      "",
      data.message,
    ].join("\n"),
  });

  return NextResponse.json({ ok: true });
}
