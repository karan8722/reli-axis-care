import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/reliaxis-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container-x py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <img src={logo.url} alt="ReliAxis" className="h-14 w-auto bg-white/95 rounded-md p-2" width={180} height={56} />
          <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
            Your Reliable Machine Partner. Professional CNC & VMC machine solutions across Pune, Chakan and PCMC.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-secondary">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/services" className="hover:text-secondary">CNC Machine Repair</Link></li>
            <li><Link to="/services" className="hover:text-secondary">VMC Maintenance</Link></li>
            <li><Link to="/services" className="hover:text-secondary">Breakdown Support</Link></li>
            <li><Link to="/services" className="hover:text-secondary">AMC Contracts</Link></li>
            <li><Link to="/services" className="hover:text-secondary">Installation & Commissioning</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-secondary">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/about" className="hover:text-secondary">About Us</Link></li>
            <li><Link to="/industries" className="hover:text-secondary">Industries Served</Link></li>
            <li><Link to="/future" className="hover:text-secondary">Future Solutions</Link></li>
            <li><Link to="/book" className="hover:text-secondary">Book Service</Link></li>
            <li><Link to="/contact" className="hover:text-secondary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-secondary">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-secondary" /> Pune, Chakan, PCMC — Maharashtra</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-secondary" /> +91 99999 99999</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-secondary" /> service@reliaxis.in</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col md:flex-row justify-between gap-2 text-xs text-primary-foreground/60">
          <span>© {new Date().getFullYear()} ReliAxis Technologies. All rights reserved.</span>
          <span>Your Reliable Machine Partner</span>
        </div>
      </div>
    </footer>
  );
}
