import Image from "next/image";
import { Award, Eye, Gem, Target } from "lucide-react";
import { Reveal } from "@/components/reveal";

const pillars = [
  {
    title: "Our Mission",
    text: "To simplify operations and empower organizations through innovative digital solutions.",
    icon: Target,
  },
  {
    title: "Our Vision",
    text: "To become a leading African technology company driving digital transformation.",
    icon: Eye,
  },
  {
    title: "Our Values",
    text: "Innovation, integrity, simplicity, impact and continuous improvement.",
    icon: Gem,
  },
  {
    title: "Our Commitment",
    text: "Deliver quality, create value and build long-term partnerships that empower growth.",
    icon: Award,
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section-anchor bg-white py-[34px]">
      <div className="container grid items-center gap-12 lg:grid-cols-[0.52fr_0.48fr]">
        <Reveal>
          <div className="max-w-[520px]">
            <p className="mb-2 text-[11px] font-black uppercase tracking-[0.12em] text-[#6D35FF]">
              About Hurkify
            </p>
            <h2 className="max-w-[485px] text-[31px] font-black leading-[1.08] tracking-[-0.03em] text-secondary">
              Building Technology Solutions That Drive{" "}
              <span className="text-[#6D35FF]">Real Impact</span>
            </h2>
            <p className="mt-4 max-w-[510px] text-[14px] font-medium leading-7 text-[#4F4960]">
              Hurkify Technology Limited is a Nigerian-based technology company focused on
              digital transformation, IT consulting, healthcare technology solutions, and
              business process improvement.
            </p>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-x-8 gap-y-7 md:grid-cols-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title}>
                  <div className="mb-4 grid size-10 place-items-center rounded-xl bg-[#F1E8FF] text-[#6D35FF]">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mb-2 text-[12px] font-black text-secondary">{pillar.title}</h3>
                  <p className="text-[10px] font-medium leading-5 text-[#5F586B]">{pillar.text}</p>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Image
            src="/images/mockup/about-founder.png"
            alt="Hurkify founder in modern corporate office"
            width={746}
            height={532}
            priority
            className="ml-auto w-full max-w-[560px] rounded-xl object-cover shadow-[0_18px_50px_rgba(26,11,46,.12)]"
          />
        </Reveal>
      </div>
    </section>
  );
}
