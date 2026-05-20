import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/site-data";

export function ProjectsSection() {
  const imageByTitle: Record<string, string> = {
    Edamaa3D: "/images/mockup/project-edamaa.png",
    OpenField: "/images/mockup/project-openfield.png",
    "Hurkify EMR": "/images/mockup/project-emr.png",
    HealthPortal: "/images/mockup/project-healthportal.png",
    "Hurkify Marketplace": "/images/mockup/project-marketplace.png",
  };

  return (
    <section id="projects" className="section-anchor overflow-hidden bg-[#080313] py-[32px] text-white">
      <div className="container">
        <Reveal>
          <div className="mb-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-purple-200">
                Our Projects
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">Solutions We&apos;ve Built</h2>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-black text-purple-200">
              View All Projects <ArrowRight className="size-4" />
            </a>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {projects.map((project, index) => (
            <Reveal delay={index * 0.04} key={project.title}>
              <article className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] shadow-[0_22px_70px_rgba(0,0,0,.24)]">
                <Image
                  src={imageByTitle[project.title]}
                  alt={`${project.title} project preview`}
                  width={294}
                  height={182}
                  className="h-[92px] w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-[13px] font-black text-white">{project.title}</h3>
                  <p className="mt-1 text-xs font-semibold text-purple-200">{project.category}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-5 flex justify-center gap-3 xl:justify-between">
          <Button variant="secondary" size="icon" aria-label="Previous project">
            <ArrowLeft className="size-4" />
          </Button>
          <Button variant="secondary" size="icon" aria-label="Next project">
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
