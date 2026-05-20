import {
  Activity,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Cloud,
  Code2,
  GraduationCap,
  HeartPulse,
  Landmark,
  LineChart,
  ShieldCheck,
  Stethoscope,
  Users,
  Workflow,
} from "lucide-react";
import type { NavItem, Project, Service } from "@/types/site";

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Projects", href: "#projects" },
  { label: "Resources", href: "#healthcare-support" },
  { label: "Contact", href: "#contact" },
];

export const trustBadges = [
  "HEFAMAA",
  "LUTH",
  "Parkway Hospitals",
  "Reddington",
  "LifeCare Digital",
  "Veritas Diagnostics",
];

export const services: Service[] = [
  {
    title: "IT Consulting & Digital Transformation",
    description:
      "We help organizations optimize processes, adopt the right technologies, and drive digital transformation.",
    icon: Workflow,
  },
  {
    title: "Software Development",
    description:
      "Custom web, mobile, and enterprise software solutions built for performance, scalability, and growth.",
    icon: Code2,
  },
  {
    title: "Healthcare Compliance & Digital Support",
    description:
      "HEFAMAA registration, renewal, documentation support, and digital workflow services.",
    icon: ShieldCheck,
    tag: "Our Specialty",
  },
  {
    title: "EMR & Health-Tech Solutions",
    description:
      "Electronic Medical Record systems, hospital management solutions, patient portals, and automation.",
    icon: HeartPulse,
  },
  {
    title: "Website & Digital Presence",
    description:
      "Modern websites, landing pages, branding systems, and SEO solutions that elevate your online presence.",
    icon: LineChart,
  },
  {
    title: "Cloud & Technical Support",
    description:
      "Cloud deployment, hosting, system maintenance, and 24/7 technical support to keep you running.",
    icon: Cloud,
  },
];

export const healthcareFeatures = [
  "HEFAMAA Registration Support",
  "Annual Renewal Assistance",
  "Documentation & Workflow Support",
  "Compliance & Advisory Services",
];

export const healthcareReasons = [
  "Expert knowledge of healthcare regulations",
  "Fast, reliable and secure process",
  "End-to-end support and advisory",
  "Digital tools that save time and reduce errors",
];

export const industries = [
  {
    title: "Healthcare",
    description:
      "Digital healthcare solutions, EMR systems, and compliance support for hospitals, clinics, labs and pharmacies.",
    icon: Stethoscope,
  },
  {
    title: "SMEs & Startups",
    description:
      "Affordable technology solutions that help small businesses grow, automate and compete effectively.",
    icon: Code2,
  },
  {
    title: "Education",
    description:
      "EdTech platforms, school management systems and digital learning solutions for institutions.",
    icon: GraduationCap,
  },
  {
    title: "Government & Agencies",
    description:
      "Digital solutions that improve service delivery, transparency and operational efficiency.",
    icon: Landmark,
  },
  {
    title: "Non-Profit Organizations",
    description:
      "Smart digital tools that help NGOs streamline operations, manage data and maximize impact.",
    icon: Users,
  },
];

export const projects: Project[] = [
  {
    title: "Edamaa3D",
    category: "EdTech Platform",
    description: "Immersive learning interface for modern education programs.",
    accent: "from-[#5D34F2] to-[#FF6F61]",
  },
  {
    title: "OpenField",
    category: "Agriculture Platform",
    description: "Marketplace and operations system for field and supply-chain teams.",
    accent: "from-[#1C7C54] to-[#B7E05D]",
  },
  {
    title: "Hurkify EMR",
    category: "Hospital Management System",
    description: "Patient records, appointments, dashboards and facility workflows.",
    accent: "from-[#3D1F52] to-[#9D6BFF]",
  },
  {
    title: "HealthPortal",
    category: "Patient Portal Solution",
    description: "Patient engagement portal for care access and documentation.",
    accent: "from-[#1A0B2E] to-[#D946EF]",
  },
  {
    title: "Hurkify Marketplace",
    category: "E-commerce Platform",
    description: "Commerce architecture for digital businesses and service providers.",
    accent: "from-[#F97316] to-[#7C3AED]",
  },
];

export const stats = [
  { label: "Projects Completed", value: "50+", icon: BriefcaseBusiness },
  { label: "Happy Clients", value: "30+", icon: Users },
  { label: "Industries Served", value: "5+", icon: Building2 },
  { label: "Client Satisfaction", value: "98%", icon: BadgeCheck },
  { label: "Support Available", value: "24/7", icon: Activity },
];
