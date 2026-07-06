import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import { PageHeader } from "./services";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact ReliAxis — CNC/VMC Service in Pune, Chakan, PCMC" },
      { name: "description", content: "Contact ReliAxis Technologies for CNC & VMC machine repair, AMC and breakdown support in Pune, Chakan and PCMC." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHeader eyebrow="Contact" title="Talk to Our Engineers" description="We'll get back to you within one working day. For breakdowns, please call our emergency line." />
      <section className="py-16 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-3">
          <div className="space-y-5 lg:col-span-1">
            <InfoRow icon={Phone} title="Call us" body="+91 99999 99999" href="tel:+919999999999" />
            <InfoRow icon={MessageCircle} title="WhatsApp" body="Chat with our team" href="https://wa.me/919999999999" />
            <InfoRow icon={Mail} title="Email" body="service@reliaxis.in" href="mailto:service@reliaxis.in" />
            <InfoRow icon={MapPin} title="Service Area" body="Pune • Chakan • PCMC — Maharashtra" />
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-2 rounded-2xl border border-border bg-card p-8 shadow-card"
          >
            {sent ? (
              <div className="text-center py-10">
                <h3 className="text-2xl font-semibold text-primary">Thanks for reaching out!</h3>
                <p className="mt-3 text-muted-foreground">Our team will contact you shortly.</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-primary">Send us a message</h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Field label="Name" required />
                  <Field label="Company" />
                  <Field label="Email" type="email" required />
                  <Field label="Phone" type="tel" required />
                </div>
                <div className="mt-4">
                  <label className="text-xs font-semibold text-foreground/80">Message</label>
                  <textarea required rows={5} className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30" />
                </div>
                <button className="mt-6 inline-flex items-center gap-2 gradient-orange rounded-md px-6 py-3 text-sm font-semibold text-secondary-foreground">
                  Send Message
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

function InfoRow({ icon: Icon, title, body, href }: { icon: any; title: string; body: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 hover:border-secondary/50 transition">
      <div className="grid place-items-center h-11 w-11 rounded-lg bg-primary/10 text-primary shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</div>
        <div className="mt-1 text-sm font-medium text-foreground">{body}</div>
      </div>
    </div>
  );
  return href ? <a href={href} className="block">{inner}</a> : inner;
}

function Field({ label, type = "text", required = false }: { label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs font-semibold text-foreground/80">{label}{required && <span className="text-secondary"> *</span>}</label>
      <input required={required} type={type} className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30" />
    </div>
  );
}
