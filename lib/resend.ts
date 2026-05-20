import { Resend } from "resend";

export const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export const contactRecipient = process.env.CONTACT_EMAIL ?? "info@hurkify.com";
export const contactSender = process.env.RESEND_FROM_EMAIL ?? "Hurkify Website <onboarding@resend.dev>";
