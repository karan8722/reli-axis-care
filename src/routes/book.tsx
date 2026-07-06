import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Upload, ArrowRight } from "lucide-react";
import { PageHeader } from "./services";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Service — CNC & VMC Machine Booking | ReliAxis" },
      { name: "description", content: "Book CNC/VMC machine service, breakdown support or AMC inquiry. Get an instant ticket number and priority response." },
    ],
  }),
  component: BookPage,
});

const machineTypes = ["CNC Turning Center", "VMC Machining Center", "HMC", "5-Axis", "Grinding", "Other"];
const brands = ["Fanuc", "Siemens", "Mitsubishi", "Haas", "Mazak", "DMG Mori", "Doosan", "BFW", "Ace Micromatic", "HMT", "Other"];
const controllers = ["Fanuc", "Siemens", "Mitsubishi", "Heidenhain", "Mazatrol", "Other"];
const serviceTypes = ["CNC Repair", "VMC Maintenance", "Breakdown Support", "Preventive Maintenance", "AMC Enquiry", "Installation & Commissioning", "Inspection", "Refurbishment"];

function BookPage() {
  const [ticket, setTicket] = useState<string | null>(null);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = "RX-" + (1000 + Math.floor(Math.random() * 9000));
    setTicket(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (ticket) {
    return (
      <>
        <PageHeader eyebrow="Booking Confirmed" title="Thank you for choosing ReliAxis Technologies" />
        <section className="py-20">
          <div className="container-x max-w-2xl">
            <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-elegant">
              <div className="mx-auto grid place-items-center h-16 w-16 rounded-full bg-success/15 text-success">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h2 className="mt-6 text-2xl font-semibold text-primary">Your ticket has been created</h2>
              <p className="mt-2 text-muted-foreground">Our service team will contact you shortly.</p>
              <div className="mt-8 rounded-xl gradient-hero p-6 text-primary-foreground">
                <div className="text-xs uppercase tracking-widest text-secondary">Ticket Number</div>
                <div className="mt-1 text-4xl font-bold font-display">{ticket}</div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <a href={`https://wa.me/919999999999?text=${encodeURIComponent("Hello ReliAxis, my ticket is " + ticket)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-[#25D366] text-white px-5 py-2.5 text-sm font-semibold">Share on WhatsApp</a>
                <Link to="/" className="inline-flex items-center gap-2 rounded-md border border-input px-5 py-2.5 text-sm font-semibold hover:bg-accent">Back to Home</Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader eyebrow="Book Service" title="Book a CNC / VMC Machine Service" description="Share your machine and issue details — we'll generate a service ticket and dispatch a qualified engineer." />
      <section className="py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_320px]">
          <form onSubmit={submit} className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card space-y-8">
            <Group title="Company Details">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Company Name" required />
                <Field label="Contact Person" required />
                <Field label="Designation" />
                <Field label="Mobile Number" type="tel" required />
                <Field label="Email" type="email" required />
                <Field label="City" required />
              </div>
              <div className="mt-4">
                <Field label="Company Address" />
              </div>
            </Group>

            <Group title="Machine Details">
              <div className="grid gap-4 sm:grid-cols-2">
                <Select label="Machine Type" options={machineTypes} required />
                <Select label="Machine Brand" options={brands} required />
                <Field label="Machine Model" />
                <Select label="Controller Type" options={controllers} />
              </div>
            </Group>

            <Group title="Service Details">
              <div className="grid gap-4 sm:grid-cols-2">
                <Select label="Service Required" options={serviceTypes} required />
                <div>
                  <Label>Priority <span className="text-secondary">*</span></Label>
                  <div className="mt-1.5 grid grid-cols-3 gap-2">
                    {["Normal", "Urgent", "Emergency"].map((p, idx) => (
                      <label key={p} className="cursor-pointer">
                        <input type="radio" name="priority" defaultChecked={idx === 0} className="peer sr-only" />
                        <div className="text-center rounded-md border border-input px-3 py-2.5 text-xs font-semibold text-foreground/80 peer-checked:bg-primary peer-checked:text-primary-foreground peer-checked:border-primary transition">
                          {p}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
                <Field label="Preferred Visit Date" type="date" />
              </div>
              <div className="mt-4">
                <Label>Issue Description <span className="text-secondary">*</span></Label>
                <textarea required rows={4} placeholder="Describe alarms, symptoms, and when the issue started..." className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <FileUpload label="Upload Machine / Alarm Images" accept="image/*" />
                <FileUpload label="Upload Video (optional)" accept="video/*" />
              </div>
            </Group>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button type="submit" className="inline-flex items-center gap-2 gradient-orange rounded-md px-8 py-3.5 text-sm font-semibold text-secondary-foreground shadow-elegant hover:opacity-95">
                Book Service <ArrowRight className="h-4 w-4" />
              </button>
              <span className="text-xs text-muted-foreground">You'll receive a ticket number instantly.</span>
            </div>
          </form>

          <aside className="space-y-4">
            <div className="rounded-2xl gradient-hero p-6 text-primary-foreground shadow-elegant">
              <div className="text-xs uppercase tracking-widest text-secondary">Emergency Line</div>
              <a href="tel:+919999999999" className="mt-2 block text-2xl font-bold">+91 99999 99999</a>
              <p className="mt-2 text-sm text-primary-foreground/75">Machine down? Call us directly for the fastest response.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h4 className="text-sm font-semibold text-primary">What happens next</h4>
              <ol className="mt-4 space-y-3 text-sm text-foreground/80">
                {["Ticket generated instantly", "Engineer assigned to your job", "On-site inspection & quotation", "Repair, testing & service report"].map((s, i) => (
                  <li key={s} className="flex gap-3">
                    <span className="grid place-items-center h-6 w-6 rounded-full bg-secondary text-secondary-foreground text-xs font-bold shrink-0">{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-xs font-semibold text-foreground/80">{children}</label>;
}

function Field({ label, type = "text", required = false }: { label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <Label>{label}{required && <span className="text-secondary"> *</span>}</Label>
      <input required={required} type={type} className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30" />
    </div>
  );
}

function Select({ label, options, required = false }: { label: string; options: string[]; required?: boolean }) {
  return (
    <div>
      <Label>{label}{required && <span className="text-secondary"> *</span>}</Label>
      <select required={required} defaultValue="" className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30">
        <option value="" disabled>Select {label.toLowerCase()}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

function FileUpload({ label, accept }: { label: string; accept: string }) {
  const [name, setName] = useState<string>("");
  return (
    <div>
      <Label>{label}</Label>
      <label className="mt-1.5 flex items-center gap-3 cursor-pointer rounded-md border border-dashed border-input bg-muted/40 px-3 py-3 text-sm hover:border-secondary/60 transition">
        <Upload className="h-4 w-4 text-muted-foreground" />
        <span className="truncate text-muted-foreground">{name || "Click to upload"}</span>
        <input type="file" accept={accept} multiple className="hidden" onChange={(e) => setName(Array.from(e.target.files ?? []).map(f => f.name).join(", "))} />
      </label>
    </div>
  );
}
