import Image from "next/image";
import { CheckCircle2, UsersRound } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { healthcareFeatures, healthcareReasons } from "@/lib/site-data";

export function HealthcareSection() {
  return (
    <section id="healthcare-support" className="section-anchor bg-[#FBF8FF] py-[30px]">
      <div className="container grid items-center gap-9 lg:grid-cols-[0.34fr_0.35fr_0.31fr]">
        <Reveal>
          <Image
            src="/images/mockup/healthcare-support-exact.png"
            alt="Nigerian healthcare professional using a laptop for digital operations"
            width={536}
            height={358}
            className="h-[210px] w-full rounded-xl object-cover shadow-[0_16px_40px_rgba(26,11,46,.10)]"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mb-2 text-[11px] font-black uppercase tracking-[0.14em] text-[#6D35FF]">
            Our Specialty
          </p>
          <h2 className="max-w-[390px] text-[29px] font-black leading-[1.08] tracking-[-0.03em] text-secondary">
            Comprehensive <span className="text-[#6D35FF]">Healthcare</span> Compliance Support
          </h2>
          <p className="mt-3 max-w-[470px] text-[12px] font-medium leading-6 text-[#4F4960]">
            We simplify HEFAMAA registration and annual renewal for healthcare facilities
            across Nigeria with speed, accuracy and compliance.
          </p>
          <div className="mt-5 grid gap-3">
            {healthcareFeatures.map((feature) => (
              <div className="flex items-center gap-3 text-[12px] font-bold text-secondary" key={feature}>
                <CheckCircle2 className="size-4 text-[#6D35FF]" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="ml-auto w-full max-w-[325px] rounded-xl bg-white p-7 shadow-[0_18px_55px_rgba(26,11,46,.10)]">
            <h3 className="mb-5 text-[14px] font-black leading-5 text-secondary">
              Why Healthcare Providers Choose Hurkify
            </h3>
            <div className="grid gap-4">
              {healthcareReasons.map((reason) => (
                <div className="flex gap-4" key={reason}>
                  <div className="grid size-8 shrink-0 place-items-center rounded-lg bg-[#F1E8FF] text-[#6D35FF]">
                    <UsersRound className="size-4" />
                  </div>
                  <p className="text-[12px] font-semibold leading-5 text-[#514A61]">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
