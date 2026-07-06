import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-cnc.jpg";
import {
  Wrench, Settings, Zap, ShieldCheck, ClipboardCheck, Award,
  Cog, Gauge, HardHat, Users, Timer, Factory, Cpu, CircuitBoard,
  ArrowRight, Phone, MessageCircle, CheckCircle2
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
});

const trustPoints = [
  { icon: HardHat, label: "Experienced Engineers" },
  { icon: Cog, label: "Multi Brand Support" },
  { icon: Timer, label: "Fast Response" },
  { icon: ClipboardCheck, label: "Professional Reports" },
  { icon: ShieldCheck, label: "AMC Support" },
  { icon: Award, label: "Trusted Industrial Partner" },
];

const services = [
  { icon: Wrench, title: "CNC Machine Repair", desc: "Diagnostics and repair for CNC turning centers — spindle, servo, controller and mechanical issues." },
  { icon: Settings, title: "VMC Maintenance", desc: "Complete VMC upkeep — ATC, ball screw, LM guideway, coolant and lubrication systems." },
  { icon: Zap, title: "Breakdown Support", desc: "24×7 emergency response to minimize your downtime and restore production quickly." },
  { icon: Gauge, title: "Preventive Maintenance", desc: "Scheduled inspections, geometry checks and health reports to prevent unexpected failures." },
  { icon: ShieldCheck, title: "AMC Contracts", desc: "Flexible Annual Maintenance Contracts — comprehensive or non-comprehensive plans." },
  { icon: ClipboardCheck, title: "Machine Inspection", desc: "Pre-purchase and periodic inspection with geometrical accuracy and condition reports." },
  { icon: Factory, title: "Installation & Commissioning", desc: "Machine installation, leveling, alignment and commissioning by trained engineers." },
  { icon: Cpu, title: "Machine Refurbishment", desc: "Restore old CNC/VMC machines to near-new performance with mechanical & electronic overhaul." },
];

const industries = [
  { icon: Factory, name: "Automotive" },
  { icon: Cog, name: "Aerospace" },
  { icon: CircuitBoard, name: "Precision Engineering" },
  { icon: HardHat, name: "Manufacturing" },
  { icon: Wrench, name: "Tool Rooms" },
  { icon: ShieldCheck, name: "Medical Components" },
  { icon: Cpu, name: "General Engineering" },
];

const whyUs = [
  { icon: HardHat, title: "Experienced Engineers", desc: "Field-trained on Fanuc, Siemens, Mitsubishi & Haas controllers." },
  { icon: Timer, title: "Fast Response", desc: "Rapid dispatch across Pune, Chakan and PCMC industrial belts." },
  { icon: ShieldCheck, title: "Trusted Technical Support", desc: "Structured troubleshooting with root-cause analysis." },
  { icon: ClipboardCheck, title: "Transparent Pricing", desc: "Clear quotations, no hidden charges, honest recommendations." },
  { icon: Cog, title: "Multi-Brand Expertise", desc: "Service capability across major CNC and VMC brands." },
  { icon: Award, title: "Professional Reports", desc: "Detailed service reports for every visit — audit-ready." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="CNC machining center" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 gradient-hero opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent" />
        </div>
        <div className="relative container-x py-24 md:py-36">
          <div className="max-w-3xl text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
              24×7 Breakdown Support — Pune • Chakan • PCMC
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
              Keeping Your <span className="text-secondary">Production</span> Running
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 max-w-2xl leading-relaxed">
              Professional CNC & VMC machine maintenance, breakdown support, preventive maintenance, AMC contracts and industrial machine solutions.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/book" className="inline-flex items-center gap-2 gradient-orange rounded-md px-6 py-3.5 text-sm font-semibold text-secondary-foreground shadow-elegant hover:opacity-95 transition">
                Book Service <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+919999999999" className="inline-flex items-center gap-2 rounded-md bg-destructive px-6 py-3.5 text-sm font-semibold text-destructive-foreground hover:opacity-90 transition">
                <Phone className="h-4 w-4" /> Emergency Breakdown
              </a>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-white/10 border border-white/25 backdrop-blur px-6 py-3.5 text-sm font-semibold hover:bg-white/20 transition">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-border bg-muted/60">
        <div className="container-x py-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {trustPoints.map((t) => (
            <div key={t.label} className="flex items-center gap-2.5">
              <div className="grid place-items-center h-9 w-9 rounded-md bg-primary/10 text-primary shrink-0">
                <t.icon className="h-4.5 w-4.5" />
              </div>
              <span className="text-sm font-medium text-foreground/85">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="What We Do" title="Complete CNC & VMC Machine Solutions" description="From emergency breakdown support to structured AMC contracts — one reliable partner for every machine on your shop floor." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="group relative rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all">
                <div className="grid place-items-center h-12 w-12 rounded-lg gradient-orange text-secondary-foreground shadow-glow">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-5 flex items-center gap-3 text-xs font-semibold">
                  <Link to="/services" className="text-primary hover:text-secondary inline-flex items-center gap-1">Learn more <ArrowRight className="h-3 w-3" /></Link>
                  <span className="text-border">•</span>
                  <Link to="/book" className="text-secondary hover:text-primary">Book service</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary-light/40 blur-3xl" />
        <div className="container-x relative">
          <SectionHeading light eyebrow="Why ReliAxis" title="Built for Uptime. Trusted by Industry." description="We combine hands-on machine expertise with disciplined service processes so your production never stops." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w) => (
              <div key={w.title} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition">
                <div className="grid place-items-center h-11 w-11 rounded-md bg-secondary text-secondary-foreground">
                  <w.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/75 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Industries We Serve" title="Serving India's Precision Manufacturing" description="Trusted by machine shops, OEMs and tier-1 suppliers across critical industries." />
          <div className="mt-14 grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-7">
            {industries.map((i) => (
              <div key={i.name} className="flex flex-col items-center text-center gap-3 rounded-xl border border-border bg-card p-5 hover:border-secondary/60 hover:shadow-card transition">
                <div className="grid place-items-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                  <i.icon className="h-5.5 w-5.5" />
                </div>
                <span className="text-sm font-semibold text-foreground/90">{i.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 md:py-28 bg-muted/60">
        <div className="container-x">
          <SectionHeading eyebrow="Our Process" title="Simple. Structured. Reliable." description="A clear service workflow from booking to completion — with communication at every step." />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Book Service", d: "Raise a request in under 2 minutes with machine and issue details." },
              { n: "02", t: "Engineer Assigned", d: "Ticket generated and a qualified engineer is dispatched." },
              { n: "03", t: "Diagnose & Repair", d: "On-site inspection, transparent quotation, and expert repair." },
              { n: "04", t: "Report & Handover", d: "Testing, professional report and post-service support." },
            ].map((step) => (
              <div key={step.n} className="relative rounded-xl bg-card border border-border p-6">
                <span className="text-5xl font-bold text-secondary/25 font-display">{step.n}</span>
                <h4 className="mt-2 text-lg font-semibold text-primary">{step.t}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-2xl gradient-hero p-10 md:p-16 text-primary-foreground shadow-elegant">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,var(--color-secondary),transparent_60%)]" />
            <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">Machine down? We're one call away.</h2>
                <p className="mt-4 text-primary-foreground/80 max-w-xl">Get a certified engineer at your facility. Fast response across Pune, Chakan and PCMC.</p>
                <div className="mt-6 flex items-center gap-3 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-secondary" /> No hidden charges
                  <CheckCircle2 className="h-4 w-4 text-secondary" /> Multi-brand support
                </div>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Link to="/book" className="inline-flex items-center gap-2 gradient-orange rounded-md px-6 py-3.5 text-sm font-semibold text-secondary-foreground shadow-glow">
                  Book a Service <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="tel:+919999999999" className="inline-flex items-center gap-2 rounded-md bg-white/10 border border-white/25 px-6 py-3.5 text-sm font-semibold hover:bg-white/20">
                  <Phone className="h-4 w-4" /> Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow: string; title: string; description?: string; light?: boolean }) {
  return (
    <div className="max-w-3xl">
      <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${light ? "text-secondary" : "text-secondary"}`}>{eyebrow}</span>
      <h2 className={`mt-3 text-3xl md:text-4xl lg:text-5xl font-bold ${light ? "text-primary-foreground" : "text-primary"}`}>{title}</h2>
      {description && <p className={`mt-4 text-base md:text-lg ${light ? "text-primary-foreground/75" : "text-muted-foreground"} leading-relaxed`}>{description}</p>}
    </div>
  );
}
