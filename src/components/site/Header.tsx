import { Link } from "@tanstack/react-router";
import { Menu, Phone, X, CalendarCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { clinic, mainNav } from "@/config/clinic";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/90 shadow-soft backdrop-blur-xl"
          : "border-transparent bg-background",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Skip to main content
      </a>

      <div className="container-page">
        <div
          className={cn(
            "flex items-center justify-between gap-2 transition-all duration-300 2xl:gap-4",
            scrolled ? "h-16" : "h-20",
          )}
        >
          <Link to="/" className="shrink-0" aria-label={`${clinic.name} home`}>
            <Logo />
          </Link>

          <nav aria-label="Main" className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    activeProps={{ className: "text-primary bg-secondary" }}
                    className="whitespace-nowrap rounded-full px-2 py-2 text-[0.8125rem] font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-primary 2xl:px-3 2xl:text-[0.875rem]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <a
              href={clinic.contact.phoneHref}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
            >
              <Phone className="size-4 shrink-0" aria-hidden="true" />
              <span className="hidden 2xl:inline">{clinic.contact.phoneDisplay}</span>
              <span className="2xl:hidden">Call</span>
            </a>
            <Link
              to="/book-appointment"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              <CalendarCheck className="size-4 shrink-0" aria-hidden="true" />
              <span className="hidden xl:inline">Book an Appointment</span>
              <span className="xl:hidden">Book Now</span>
            </Link>
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={clinic.contact.phoneHref}
              aria-label={`Call ${clinic.name} at ${clinic.contact.phoneDisplay}`}
              className="inline-flex size-11 items-center justify-center rounded-full border border-border text-primary lg:hidden"
            >
              <Phone className="size-5" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex size-11 items-center justify-center rounded-full border border-border text-primary"
            >
              {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className={cn(
            "fixed inset-x-0 bottom-0 z-40 animate-fade-in overflow-y-auto border-t border-border bg-background px-5 pb-28 pt-5 xl:hidden",
            scrolled ? "top-16" : "top-20",
          )}
        >
          <nav aria-label="Mobile">
            <ul className="space-y-1">
              {mainNav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: item.to === "/" }}
                    activeProps={{ className: "text-primary bg-secondary" }}
                    className="block rounded-xl px-4 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/emergency"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3.5 text-base font-semibold text-destructive transition-colors hover:bg-secondary"
                >
                  Emergency Dental Care
                </Link>
              </li>
            </ul>
          </nav>

          <div className="mt-6 space-y-3">
            <Link
              to="/book-appointment"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-4 text-base font-semibold text-primary-foreground"
            >
              <CalendarCheck className="size-5" aria-hidden="true" />
              Book an Appointment
            </Link>
            <a
              href={clinic.contact.phoneHref}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-border px-5 py-4 text-base font-semibold text-primary"
            >
              <Phone className="size-5" aria-hidden="true" />
              {clinic.contact.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
