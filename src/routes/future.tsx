import { createFileRoute } from "@tanstack/react-router";
import { Package, Recycle, Store, Users, Smartphone, Boxes, CreditCard, FileText, Receipt, BarChart3 } from "lucide-react";
import { PageHeader } from "./services";

export const Route = createFileRoute("/future")({
  head: () => ({
    meta: [
      { title: "Future Solutions — Spare Parts, Marketplace & More | ReliAxis" },
      { name: "description", content: "Upcoming ReliAxis modules: spare parts store, refurbished CNC/VMC sales, engineer network, and integrated customer portal." },
    ],
  }),
  component: FuturePage,
});

const items = [
  { icon: Package, title: "Spare Parts Store", desc: "Genuine and quality-assured CNC/VMC spare parts with fast dispatch." },
  { icon: Recycle, title: "Refurbished Machines", desc: "Certified refurbished CNC & VMC machines with warranty." },
  { icon: Store, title: "Buy & Sell Marketplace", desc: "Verified marketplace to buy and sell used industrial machines." },
  { icon: Users, title: "Pan-India Engineer Network", desc: "Trained engineers across India for on-demand service." },
  { icon: Smartphone, title: "Engineer Mobile App", desc: "Field app for job cards, checklists and instant reports." },
  { icon: Boxes, title: "Inventory Management", desc: "Track parts, consumables and machine spares in one place." },
  { icon: CreditCard, title: "Payment Gateway", desc: "Secure online payments for services and AMC contracts." },
  { icon: FileText, title: "Quotation System", desc: "Instant quotations for repairs, spares and AMC packages." },
  { icon: Receipt, title: "Invoice System", desc: "GST-ready invoicing integrated with service delivery." },
  { icon: BarChart3, title: "Analytics Dashboard", desc: "Machine health analytics and downtime insights." },
];

function FuturePage() {
  return (
    <>
      <PageHeader eyebrow="Future Solutions" title="Building the Complete CNC/VMC Ecosystem" description="Modules coming soon to make machine ownership easier — from spare parts to a nationwide engineer network." />
      <section className="py-16 md:py-24">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl border border-border bg-card p-6 hover:border-secondary/40 hover:shadow-card transition">
              <div className="flex items-center justify-between">
                <div className="grid place-items-center h-12 w-12 rounded-lg gradient-orange text-secondary-foreground">
                  <i.icon className="h-5.5 w-5.5" />
                </div>
                <span className="rounded-full border border-secondary/30 bg-secondary/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-secondary">Coming Soon</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-primary">{i.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{i.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
