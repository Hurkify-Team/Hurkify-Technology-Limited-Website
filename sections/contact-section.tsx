import { Mail, MessageCircle, Phone } from "lucide-react";
import type { ElementType } from "react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";

export function ContactSection() {
  return (
    <section id="contact" className="section-anchor bg-[#080313] pt-[34px] text-white">
      <div className="container">
        <div className="grid items-center gap-8 border-b border-white/10 pb-8 lg:grid-cols-[0.35fr_0.65fr]">
          <Reveal>
            <div>
              <p className="mb-3 text-[11px] font-black uppercase tracking-[0.18em] text-purple-200">
                Let&apos;s Work Together
              </p>
              <h2 className="text-[25px] font-black leading-tight tracking-tight">
                Ready To Transform Your Business?
              </h2>
              <p className="mt-3 max-w-[360px] text-[12px] leading-6 text-white/62">
                Let&apos;s discuss how we can help your organization achieve its goals with smart
                technology solutions.
              </p>
              <Button asChild className="mt-5 h-9 rounded-md px-5 text-xs">
                <a href="#consultation">
                  Book a Consultation
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-4 md:grid-cols-3">
              <ContactTile icon={Phone} title="Call Us" value="+234 906 825 1344" href="tel:+2349045083581" />
              <ContactTile icon={Mail} title="Email Us" value="info@hurkify.com" href="mailto:info@hurkify.com" />
              <ContactTile
                icon={MessageCircle}
                title="Chat on WhatsApp"
                value="Customer Support"
                href="https://wa.me/2349045083581?text=Hello%20Hurkify%20Support%2C%20I%20need%20assistance%20with%20your%20technology%20services."
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div id="consultation" className="section-anchor grid gap-8 py-10 lg:grid-cols-[0.38fr_0.62fr]">
            <div>
              <p className="mb-3 text-[11px] font-black uppercase tracking-[0.18em] text-purple-200">
                Consultation Request
              </p>
              <h3 className="text-[28px] font-black leading-tight tracking-tight md:text-[34px]">
                Tell us what you want to build, fix, or modernize.
              </h3>
              <p className="mt-4 max-w-[420px] text-sm leading-7 text-white/66">
                Share your details once, then choose whether to send the request to our email or
                continue the conversation through WhatsApp support.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white p-5 shadow-[0_30px_90px_rgba(0,0,0,.32)] md:p-7">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactTile({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: ElementType;
  title: string;
  value: string;
  href: string;
}) {
  return (
    <a
      className="rounded-lg border border-white/10 bg-white/[0.045] p-5 transition hover:-translate-y-1 hover:border-accent/40"
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      <Icon className="mb-3 size-5 text-accent" />
      <p className="text-[12px] font-semibold text-white/56">{title}</p>
      <p className="mt-1 text-[14px] font-black text-white">{value}</p>
    </a>
  );
}
