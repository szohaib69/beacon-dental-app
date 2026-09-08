import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react";
import { clinic } from "@/config/clinic";
import { Logo } from "./Logo";

const socialIcons = { facebook: Facebook, instagram: Instagram, youtube: Youtube, linkedin: Linkedin };

const columns = [
  {
    title: "Clinic",
    links: [
      { label: "About", to: "/about" },
      { label: "Our Team", to: "/team" },
      { label: "Services", to: "/services" },
      { label: "Dental Resources", to: "/blog" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "General Dentistry", to: "/services/$slug", slug: "general-dentistry" },
      { label: "Cosmetic Dentistry", to: "/services/$slug", slug: "cosmetic-dentistry" },
      { label: "Dental Implants", to: "/services/$slug", slug: "dental-implants" },
      { label: "Emergency Dentistry", to: "/services/$slug", slug: "emergency-dentistry" },
      { label: "Pediatric Dentistry", to: "/services/$slug", slug: "pediatric-dentistry" },
    ],
  },
  {
    title: "Patient Resources",
    links: [
      { label: "New Patients", to: "/patient-resources" },
      { label: "Patient Forms", to: "/patient-resources" },
      { label: "Insurance", to: "/insurance" },
      { label: "Financing", to: "/financing" },
      { label: "FAQs", to: "/faq" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="container-page py-14 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Comprehensive family and cosmetic dentistry in Ilkley, West Yorkshire — delivered with
              compassion, comfort and modern technology.
            </p>
            <ul className="mt-5 flex gap-2">
              {clinic.social.map((s) => {
                const Icon = socialIcons[s.icon];
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${clinic.name} on ${s.label}`}
                      className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      <Icon className="size-4" aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-primary">{col.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {"slug" in l ? (
                      <Link
                        to="/services/$slug"
                        params={{ slug: l.slug }}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {l.label}
                      </Link>
                    ) : (
                      <Link
                        to={l.to}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-primary">Contact</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent-foreground" aria-hidden="true" />
                <span>
                  {clinic.address.line1}
                  <br />
                  {clinic.address.line2}
                </span>
              </li>
              <li className="flex gap-2.5">
                <Phone className="mt-0.5 size-4 shrink-0 text-accent-foreground" aria-hidden="true" />
                <a href={clinic.contact.phoneHref} className="transition-colors hover:text-primary">
                  {clinic.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Mail className="mt-0.5 size-4 shrink-0 text-accent-foreground" aria-hidden="true" />
                <a href={clinic.contact.emailHref} className="transition-colors hover:text-primary">
                  {clinic.contact.email}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Clock className="mt-0.5 size-4 shrink-0 text-accent-foreground" aria-hidden="true" />
                <span>
                  Mon–Thu 8:00 AM – 5:00 PM
                  <br />
                  Fri 8:00 AM – 2:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 rounded-xl border border-border bg-background p-4 text-xs leading-relaxed text-muted-foreground">
          <strong className="font-semibold text-foreground">Demo website notice:</strong> clinic name,
          address, phone number, hours, team members, statistics and testimonials on this site are
          placeholders for demonstration and must be replaced with verified information before
          launch. This website provides general information only and is not a substitute for
          professional dental diagnosis or treatment.
        </p>

        <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {clinic.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <li>
              <Link to="/privacy-policy" className="transition-colors hover:text-primary">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="transition-colors hover:text-primary">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link to="/accessibility" className="transition-colors hover:text-primary">
                Accessibility
              </Link>
            </li>
            <li>
              <Link to="/hipaa-notice" className="transition-colors hover:text-primary">
                HIPAA Privacy Notice
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
