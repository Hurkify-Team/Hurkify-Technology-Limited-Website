import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { services } from "@/lib/site-data";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="section-anchor relative overflow-hidden bg-[#090414] py-[22px] text-white md:py-[28px]"
    >
      <div className="absolute inset-0 bg-hero-grid bg-[length:42px_42px] opacity-[0.045]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(109,53,255,.16),transparent_34%)]" />

      <div className="container relative">
        <Reveal>
          <p className="mb-2 text-[11px] font-black uppercase tracking-[0.15em] text-[#A77BFF]">
            Our Services
          </p>
          <h2 className="text-[27px] font-black leading-tight tracking-[-0.03em] text-white md:text-[31px]">
            Smart <span className="text-[#B995FF]">Solutions</span> For Modern Businesses
          </h2>
        </Reveal>

        <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal delay={index * 0.035} key={service.title}>
                <article className="group flex h-[166px] flex-col rounded-[7px] border border-white/[0.11] bg-white/[0.045] px-[18px] py-[17px] shadow-[inset_0_1px_0_rgba(255,255,255,.05),0_18px_42px_rgba(0,0,0,.18)] transition duration-300 hover:-translate-y-1 hover:border-[#8B5CF6]/60 hover:bg-white/[0.065]">
                  <div className="mb-3 flex items-start justify-between gap-2">
                    <div className="grid size-[34px] place-items-center rounded-[7px] bg-[#7C3AED]/20 text-[#A77BFF]">
                      <Icon className="size-[18px]" strokeWidth={2.2} />
                    </div>
                    {service.tag ? (
                      <span className="rounded-full border border-white/10 bg-[#7C3AED]/20 px-2 py-1 text-[8px] font-black leading-none text-[#D8C6FF]">
                        {service.tag}
                      </span>
                    ) : null}
                  </div>

                  <h3 className="mb-2 max-w-[145px] text-[13px] font-black leading-[1.18] text-white">
                    {service.title}
                  </h3>
                  <p className="line-clamp-3 text-[10px] font-medium leading-[1.65] text-white/62">
                    {service.description}
                  </p>

                  <a
                    href="#contact"
                    className="mt-auto inline-flex items-center gap-2 pt-3 text-[11px] font-black text-[#B995FF] transition group-hover:text-accent"
                  >
                    Learn More <ArrowRight className="size-3.5" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
