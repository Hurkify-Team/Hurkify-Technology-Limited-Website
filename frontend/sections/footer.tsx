import { ArrowUp, AtSign, Globe2, LinkIcon, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#080313] pb-6 pt-8 text-white">
      <div className="absolute inset-0 bg-hero-grid bg-[length:44px_44px] opacity-[0.05]" />
      <div className="container relative">
        <div className="grid gap-10 border-b border-white/10 pb-7 lg:grid-cols-[1.2fr_.8fr_.9fr_.9fr_1.15fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-[12px] leading-6 text-white/62">
              We are a Nigerian technology company passionate about delivering smart solutions
              that drive real impact.
            </p>
            <div className="mt-4 flex gap-3 text-white/60">
              <Globe2 className="size-4" />
              <AtSign className="size-4" />
              <LinkIcon className="size-4" />
            </div>
          </div>

          <FooterList title="Quick Links" items={["Home", "About Us", "Services", "Industries", "Projects", "Contact"]} />
          <FooterList
            title="Our Services"
            items={["IT Consulting", "Software Development", "Healthcare Compliance", "EMR Solutions", "Cloud & Support"]}
          />
          <FooterList
            title="Industries"
            items={["Healthcare", "SMEs & Startups", "Education", "Government & Agencies", "Non-Profit Organizations"]}
          />

          <div>
            <h3 className="mb-4 text-sm font-black">Contact Info</h3>
            <div className="space-y-4 text-sm text-white/65">
              <p className="flex gap-3"><MapPin className="mt-1 size-4 shrink-0" />3rd Floor, 28A Remi Olowude Road, Lagos, Nigeria.</p>
              <p className="flex gap-3">
                <Phone className="mt-1 size-4 shrink-0" />
                +234 904 508 3581 or +234 704 319 0748
              </p>
              <p className="flex gap-3"><Mail className="mt-1 size-4 shrink-0" />info@hurkify.com</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 pt-5 text-[11px] text-white/50 md:flex-row">
          <p>© {year} Hurkify Technology Limited. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#home">Privacy Policy</a>
            <a href="#home">Terms of Service</a>
          </div>
        </div>
      </div>

      <Button asChild className="fixed bottom-6 right-6 z-40 size-10" size="icon">
        <a href="#home" aria-label="Back to top">
          <ArrowUp className="size-4" />
        </a>
      </Button>
    </footer>
  );
}

function FooterList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="mb-4 text-[12px] font-black">{title}</h3>
      <ul className="space-y-2 text-[12px] text-white/60">
        {items.map((item) => (
          <li key={item}>
            <a href="#home" className="hover:text-white">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
