import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  organization: z.string().optional().or(z.literal("")),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(7, "Please enter a valid phone number.").optional().or(z.literal("")),
  service: z.string().min(2, "Please select a service."),
  message: z.string().min(12, "Please provide a little more detail."),
});

export type ContactInput = z.infer<typeof contactSchema>;
