import { Link } from "@tanstack/react-router";
import { CalendarCheck, Phone } from "lucide-react";
import { clinic } from "@/config/clinic";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-lg lg:hidden">
      <div className="grid grid-cols-2 gap-2 p-3">
        <a
          href={clinic.contact.phoneHref}
          className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-border font-semibold text-primary"
        >
          <Phone className="size-4" aria-hidden="true" />
          Call
        </a>
        <Link
          to="/book-appointment"
          className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary font-semibold text-primary-foreground"
        >
          <CalendarCheck className="size-4" aria-hidden="true" />
          Book
        </Link>
      </div>
    </div>
  );
}
