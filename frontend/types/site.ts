import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  tag?: string;
};

export type Project = {
  title: string;
  category: string;
  description: string;
  accent: string;
};
