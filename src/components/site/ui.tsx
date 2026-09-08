import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Star, Phone, CalendarCheck, Info } from "lucide-react";
import { clinic } from "@/config/clinic";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  as?: "h1" | "h2";
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <p className="eyebrow">
          <span className="h-px w-6 bg-accent" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <Tag className="mt-3 text-3xl font-bold text-primary md:text-[2.6rem] md:leading-[1.1]">{title}</Tag>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>
      )}
    </Reveal>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="hero-gradient border-b border-border">
      <div className="container-page py-14 md:py-20">
        <div className="max-w-3xl rise-in">
          {eyebrow && (
            <p className="eyebrow">
              <span className="h-px w-6 bg-accent" aria-hidden="true" />
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 text-[2.1rem] font-bold leading-[1.12] text-primary md:text-5xl">{title}</h1>
          {description && (
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}

const buttonBase =
  "inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 text-sm font-semibold sm:w-auto md:text-base";

export function BookButton({ className, label = "Book an Appointment" }: { className?: string; label?: string }) {
  return (
    <Link
      to="/book-appointment"
      className={cn(
        buttonBase,
        "bg-primary text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift",
        className,
      )}
    >
      <CalendarCheck className="size-4 shrink-0" aria-hidden="true" />
      {label}
    </Link>
  );
}

export function CallButton({ className, label }: { className?: string; label?: string }) {
  return (
    <a
      href={clinic.contact.phoneHref}
      className={cn(
        buttonBase,
        "border border-border bg-background text-primary transition-colors hover:bg-secondary",
        className,
      )}
    >
      <Phone className="size-4 shrink-0" aria-hidden="true" />
      {label ?? `Call ${clinic.contact.phoneDisplay}`}
    </a>
  );
}

export function DemoNote({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-start gap-2.5 rounded-xl border border-border bg-surface p-4 text-xs leading-relaxed text-muted-foreground">
      <Info className="mt-0.5 size-4 shrink-0 text-accent-foreground" aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}

export function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="size-4 fill-accent text-accent" aria-hidden="true" />
      ))}
    </div>
  );
}

export function CtaBand({
  title = "Ready to take care of your smile?",
  body = "Request an appointment online in under a minute, or call the office and speak with our team.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="section-y">
      <div className="container-page">
        <div className="navy-gradient overflow-hidden rounded-3xl px-6 py-12 text-center shadow-lift md:px-16 md:py-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold text-primary-foreground md:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/75">{body}</p>
          <div className="mx-auto mt-8 flex w-full max-w-md flex-col items-center justify-center gap-3 sm:max-w-none sm:flex-row">
            <Link
              to="/book-appointment"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-background px-7 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5 sm:w-auto md:text-base"
            >
              <CalendarCheck className="size-4 shrink-0" aria-hidden="true" />
              Book an Appointment
            </Link>
            <a
              href={clinic.contact.phoneHref}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-primary-foreground/25 px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10 sm:w-auto md:text-base"
            >
              <Phone className="size-4 shrink-0" aria-hidden="true" />
              {clinic.contact.phoneDisplay}
            </a>
          </div>
          <p className="mt-6 text-xs text-primary-foreground/55">
            Placeholder phone number — replace with the practice's real line.
          </p>
        </div>
      </div>
    </section>
  );
}
