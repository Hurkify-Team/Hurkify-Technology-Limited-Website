import Image from "next/image";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConsultationDialog } from "@/components/consultation-dialog";
import { Reveal } from "@/components/reveal";
import { trustBadges } from "@/lib/site-data";

export function HeroSection() {
  return (
    <section
      id="home"
      className="section-anchor relative isolate overflow-hidden bg-[#070311] pt-[62px] text-white"
    >
      <div className="absolute inset-0 -z-10 bg-hero-grid bg-[length:38px_38px] opacity-[0.08]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_74%_42%,rgba(109,53,255,.42),transparent_33%),radial-gradient(circle_at_26%_56%,rgba(109,53,255,.16),transparent_28%)]" />
      <div className="absolute bottom-0 left-0 right-0 -z-10 h-[92px] bg-gradient-to-t from-[#1B0638] to-transparent" />
      <div className="absolute right-[7%] top-[142px] hidden h-40 w-36 bg-[radial-gradient(circle,rgba(255,255,255,.25)_1px,transparent_1px)] bg-[length:13px_13px] opacity-50 lg:block" />

      <div className="container grid min-h-[298px] items-center gap-10 pb-5 pt-8 lg:grid-cols-[0.43fr_0.57fr]">
        <Reveal>
          <div className="max-w-[430px]">
            <h1 className="text-[44px] font-black leading-[1.04] tracking-[-0.04em] md:text-[54px]">
              Smart Solutions. <span className="block text-[#9B5CFF]">Real Impact.</span>
            </h1>
            <p className="mt-5 max-w-[395px] text-[14px] font-medium leading-7 text-white/82">
              We help organizations, healthcare institutions, and businesses modernize
              operations, drive efficiency, and achieve measurable growth through technology.
            </p>
            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <ConsultationDialog
                className="h-[46px] rounded-md px-7 text-xs"
                label="Book a Consultation"
              />
              <Button
                asChild
                variant="secondary"
                className="h-[46px] rounded-md border-white/35 px-7 text-xs"
              >
                <a href="#services">
                  Explore Services <ArrowRight className="size-4 rounded-full border border-white/20 p-0.5" />
                </a>
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative">
          <div className="absolute -left-20 top-12 hidden size-[230px] rounded-full border border-[#7C3AED]/40 lg:block" />
          <Image
            src="/images/mockup/hero-dashboard.png"
            alt="Hurkify dashboard mockup"
            width={816}
            height={546}
            priority
            className="relative z-10 ml-auto w-full max-w-[610px] object-contain drop-shadow-[0_38px_80px_rgba(0,0,0,.6)]"
          />
        </Reveal>
      </div>

      <div className="container pb-7">
        <p className="mb-4 text-[12px] font-semibold text-white/72">
          Trusted by organizations across Nigeria
        </p>
        <div className="grid grid-cols-2 items-center gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {trustBadges.map((badge) => (
            <div className="flex items-center gap-2 text-[12px] font-black text-white/88" key={badge}>
              <BadgeCheck className="size-4 text-white" />
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
