import Image from "next/image";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { stats } from "@/lib/site-data";

export function StatsTestimonialsSection() {
  return (
    <section className="bg-[#FBF8FF] py-[34px]">
      <div className="container">
        <Reveal>
          <div className="mb-6">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#6D35FF]">
              Why Choose Us
            </p>
            <h2 className="text-3xl font-black tracking-tight text-secondary md:text-4xl">
              Delivering Excellence. Every Time.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-5">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Reveal delay={index * 0.04} key={stat.label}>
                <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-[0_18px_50px_rgba(26,11,46,.06)]">
                  <div className="grid size-10 place-items-center rounded-lg bg-[#F1E8FF] text-[#6D35FF]">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <p className="text-[25px] font-black leading-none text-secondary">{stat.value}</p>
                    <p className="mt-1 text-[11px] font-semibold text-[#6B6476]">{stat.label}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-7 grid items-center gap-7 rounded-2xl bg-white/70 p-6 shadow-[0_18px_50px_rgba(26,11,46,.05)] backdrop-blur md:grid-cols-[0.16fr_1fr_.42fr_.16fr]">
            <Quote className="size-14 text-[#6D35FF]" />
            <p className="text-[14px] leading-7 text-secondary">
              Hurkify has been instrumental in helping us digitize our hospital processes and
              stay compliant with HEFAMAA requirements. Their support team is professional,
              responsive and truly understands our needs.
            </p>
            <div className="flex items-center gap-4 border-l border-[#E8E1F1] pl-7">
              <Image
                src="/images/founder-cutout.png"
                alt="Client portrait"
                width={90}
                height={90}
                className="size-16 rounded-full bg-[#EFE6FF] object-cover object-top"
              />
              <div>
                <p className="font-black text-secondary">Dr. Tunde Adebayo</p>
                <p className="text-sm text-[#6B6476]">Medical Director, LifeCare Hospitals</p>
              </div>
            </div>
            <div className="flex gap-3 md:justify-end">
              <Button variant="outline" size="icon" aria-label="Previous testimonial">
                <ArrowLeft className="size-4" />
              </Button>
              <Button variant="outline" size="icon" aria-label="Next testimonial">
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
