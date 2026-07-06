import { createFileRoute, Link } from "@tanstack/react-router";
import { Wrench, Settings, Zap, Gauge, ShieldCheck, ClipboardCheck, Factory, Cpu, CheckCircle2, ArrowRight } from "lucide-react";
import { SectionHeading } from "./index";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — CNC & VMC Machine Repair, Maintenance & AMC | ReliAxis" },
      { name: "description", content: "CNC repair, VMC maintenance, breakdown support, preventive maintenance, AMC, inspection, installation and refurbishment across Pune." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Wrench, title: "CNC Machine Repair", desc: "Turning-center diagnostics and repair — spindle, servo, drives, controller and mechanical systems.", benefits: ["Fault diagnosis", "Spindle & servo repair", "Controller troubleshooting"] },
  { icon: Settings, title: "VMC Machine Maintenance", desc: "Complete VMC service — ATC, ball-screw, LM guideway, coolant and lubrication.", benefits: ["Geometrical accuracy", "ATC servicing", "Lubrication systems"] },
  { icon: Zap, title: "Breakdown Support", desc: "Emergency response to restore production quickly with minimal downtime.", benefits: ["Rapid dispatch", "On-site diagnosis", "Priority handling"] },
  { icon: Gauge, title: "Preventive Maintenance", desc: "Scheduled inspections and health reports to catch problems before they happen.", benefits: ["Scheduled visits", "Predictive checks", "Detailed reports"] },
  { icon: ShieldCheck, title: "AMC Contracts", desc: "Comprehensive & non-comprehensive Annual Maintenance Contracts tailored to your fleet.", benefits: ["Fixed budgeting", "Priority support", "SLA-backed"] },
  { icon: ClipboardCheck, title: "Machine Inspection", desc: "Pre-purchase and periodic inspection with condition and accuracy reports.", benefits: ["Geometry check", "Health report", "Buyer confidence"] },
  { icon: Factory, title: "Installation & Commissioning", desc: "Complete installation, leveling, alignment and commissioning by trained engineers.", benefits: ["Site readiness", "Alignment & leveling", "Trial run"] },
  { icon: Cpu, title: "Machine Refurbishment", desc: "Restore old CNC/VMC machines to near-new performance with electronic & mechanical overhaul.", benefits: ["Cost-effective", "Extended life", "Modernized controls"] },
];

function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow="Services" title="Complete CNC & VMC Machine Solutions" description="One reliable partner for every machine on your shop floor — from a single visit to a full-year AMC." />
      <section className="py-16 md:py-20">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <div key={s.title} className="group rounded-2xl border border-border bg-card p-8 shadow-card hover:shadow-elegant hover:border-secondary/40 transition">
                <div className="flex items-start gap-5">
                  <div className="grid place-items-center h-14 w-14 rounded-xl gradient-orange text-secondary-foreground shrink-0 shadow-glow">
                    <s.icon className="h-6.5 w-6.5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-3">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-1.5 text-xs text-foreground/80"><CheckCircle2 className="h-3.5 w-3.5 text-secondary" />{b}</li>
                      ))}
                    </ul>
                    <div className="mt-6 flex items-center gap-3">
                      <Link to="/book" className="inline-flex items-center gap-1.5 gradient-orange rounded-md px-4 py-2 text-xs font-semibold text-secondary-foreground">
                        Book Service <ArrowRight className="h-3 w-3" />
                      </Link>
                      <Link to="/contact" className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-xs font-semibold text-primary hover:bg-accent">Learn More</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function PageHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <section className="relative overflow-hidden gradient-hero text-primary-foreground">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_right,var(--color-secondary),transparent_55%)]" />
      <div className="relative container-x py-20 md:py-28">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">{eyebrow}</span>
        <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl">{title}</h1>
        {description && <p className="mt-5 text-base md:text-lg text-primary-foreground/80 max-w-2xl">{description}</p>}
      </div>
    </section>
  );
}
