import { createFileRoute } from "@tanstack/react-router";
import { Factory, Cog, CircuitBoard, HardHat, Wrench, ShieldCheck, Cpu } from "lucide-react";
import { PageHeader } from "./services";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — Automotive, Aerospace & Precision | ReliAxis" },
      { name: "description", content: "CNC & VMC service for automotive, aerospace, precision engineering, tool rooms, medical components and general engineering across Pune." },
    ],
  }),
  component: IndustriesPage,
});

const industries = [
  { icon: Factory, name: "Automotive", desc: "Tier-1 and Tier-2 suppliers producing engine, transmission and chassis components." },
  { icon: Cog, name: "Aerospace", desc: "Precision components for aviation with strict tolerances and traceability." },
  { icon: CircuitBoard, name: "Precision Engineering", desc: "High-accuracy parts for hydraulics, pneumatics and industrial assemblies." },
  { icon: HardHat, name: "Manufacturing", desc: "Production units running high-volume CNC/VMC machining lines." },
  { icon: Wrench, name: "Tool Rooms", desc: "Die & mould manufacturing shops demanding fine finishes and accuracy." },
  { icon: ShieldCheck, name: "Medical Components", desc: "Certified machining of implants, surgical instruments and medical devices." },
  { icon: Cpu, name: "General Engineering", desc: "Job-shops and MSMEs producing custom mechanical components." },
];

function IndustriesPage() {
  return (
    <>
      <PageHeader eyebrow="Industries" title="Trusted Across India's Precision Manufacturing" description="Our engineers understand the demands of your industry — accuracy, uptime, and audit-ready documentation." />
      <section className="py-16 md:py-24">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <div key={i.name} className="rounded-2xl border border-border bg-card p-8 hover:border-secondary/50 hover:shadow-card transition">
              <div className="grid place-items-center h-14 w-14 rounded-xl bg-primary/10 text-primary">
                <i.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-primary">{i.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{i.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
