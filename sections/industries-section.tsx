import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { industries } from "@/lib/site-data";

export function IndustriesSection() {
  return (
    <section id="industries" className="section-anchor bg-white py-[32px]">
      <div className="container">
        <Reveal>
          <div className="mb-7 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-[#6D35FF]">
                Industries We Serve
              </p>
              <h2 className="text-3xl font-black leading-tight tracking-tight text-secondary md:text-4xl">
                Empowering <span className="text-[#6D35FF]">Various Industries</span> With Technology
              </h2>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-black text-[#6D35FF]">
              View All Industries <ArrowRight className="size-4" />
            </a>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Reveal delay={index * 0.04} key={industry.title}>
                <article className="h-full rounded-xl border border-[#EEE8F7] bg-white p-5 shadow-[0_18px_50px_rgba(26,11,46,.05)] transition hover:-translate-y-1 hover:shadow-premium">
                  <div className="mb-4 grid size-9 place-items-center rounded-lg bg-[#F1E8FF] text-[#6D35FF]">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mb-2 text-[14px] font-black text-secondary">{industry.title}</h3>
                  <p className="text-[11px] leading-5 text-[#6B6476]">{industry.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
