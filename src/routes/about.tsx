import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Award, ArrowRight } from "lucide-react";
import { PageHeader } from "./services";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ReliAxis Technologies — Your Reliable Machine Partner" },
      { name: "description", content: "ReliAxis Technologies is a professional industrial engineering company specializing in CNC & VMC machine solutions across Pune." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About Us" title="A Reliable Partner for Every Machine, Every Shift" description="ReliAxis Technologies is a professional industrial engineering company specializing in CNC & VMC machine solutions." />

      <section className="py-16 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6 text-foreground/85 leading-relaxed">
            <p className="text-lg">
              We are engineers first. ReliAxis Technologies was built on one simple belief — that industrial machines deserve service partners who understand them deeply, respond quickly, and communicate clearly.
            </p>
            <p>
              Our team works across CNC turning centers and VMC machining centers from all major brands, delivering breakdown support, preventive maintenance and full AMC contracts to manufacturing units across Pune, Chakan and PCMC.
            </p>
            <p>
              Every service visit is backed by a structured process — diagnosis, transparent quotation, expert repair, testing and a professional report. No shortcuts. No surprises.
            </p>
            <div className="grid gap-4 sm:grid-cols-3 pt-6">
              {[
                { k: "500+", v: "Service visits" },
                { k: "50+", v: "Trusted customers" },
                { k: "24×7", v: "Breakdown support" },
              ].map((s) => (
                <div key={s.k} className="rounded-xl border border-border bg-card p-6">
                  <div className="text-3xl font-bold text-primary font-display">{s.k}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card icon={Target} title="Our Mission" body="To become India's most trusted CNC & VMC machine solutions company by delivering reliable, transparent and expert service." />
            <Card icon={Eye} title="Our Vision" body="A pan-India engineer network that keeps every precision machine running at peak performance." />
            <Card icon={Award} title="Our Values" body="Reliability. Technical honesty. Customer trust. Continuous learning." />
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/60">
        <div className="container-x text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Let's keep your production running.</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Book a service or talk to our engineers about an AMC plan tailored to your machines.</p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link to="/book" className="inline-flex items-center gap-2 gradient-orange rounded-md px-6 py-3 text-sm font-semibold text-secondary-foreground">Book Service <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-input px-6 py-3 text-sm font-semibold text-primary hover:bg-accent">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Card({ icon: Icon, title, body }: { icon: any; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="grid place-items-center h-11 w-11 rounded-lg gradient-orange text-secondary-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-primary">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}
