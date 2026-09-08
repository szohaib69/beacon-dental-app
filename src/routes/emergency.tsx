import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertTriangle, CalendarCheck, Phone } from "lucide-react";
import { clinic, disclaimers } from "@/config/clinic";
import { emergencyTypes } from "@/data/content";
import { CtaBand, SectionHeading } from "@/components/site/ui";

export const Route = createFileRoute("/emergency")({
  head: () => ({
    meta: [
      { title: `Emergency Dentist in Ilkley, West Yorkshire | ${clinic.name}` },
      {
        name: "description",
        content:
          "Need a dentist today? Same-day emergency dental care in Ilkley, West Yorkshire for toothaches, broken teeth, knocked-out teeth, swelling and dental infections.",
      },
      { property: "og:title", content: "Need a Dentist Today?" },
      { property: "og:description", content: "Same-day emergency dental care for urgent problems." },
      { property: "og:url", content: "/emergency" },
    ],
    links: [{ rel: "canonical", href: "/emergency" }],
  }),
  component: Emergency,
});

function Emergency() {
  return (
    <>
      <section className="border-b border-border bg-destructive/5">
        <div className="container-page py-14 md:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow text-destructive">
              <AlertTriangle className="size-4" aria-hidden="true" />
              Emergency Dental Care
            </p>
            <h1 className="mt-4 text-[2.3rem] font-extrabold leading-[1.08] text-primary md:text-5xl">
              Need a Dentist Today?
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Dental pain rarely improves on its own. Call our office as early in the day as
              possible and we will do everything we can to see you the same day.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={clinic.contact.emergencyPhoneHref}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-destructive px-8 text-base font-bold text-destructive-foreground shadow-lift transition-transform hover:-translate-y-0.5"
              >
                <Phone className="size-5" aria-hidden="true" />
                Call Now {clinic.contact.emergencyPhoneDisplay}
              </a>
              <Link
                to="/book-appointment"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-border bg-background px-8 text-base font-semibold text-primary transition-colors hover:bg-secondary"
              >
                <CalendarCheck className="size-5" aria-hidden="true" />
                Request Emergency Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-destructive/25 bg-destructive/10">
        <div className="container-page py-6">
          <p className="flex items-start gap-3 text-sm font-medium leading-relaxed text-foreground">
            <AlertTriangle className="mt-0.5 size-5 shrink-0 text-destructive" aria-hidden="true" />
            <span>{disclaimers.emergency}</span>
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Common Emergencies"
            title="What we treat urgently"
            description="If any of these describe your situation, call the office rather than waiting for a routine appointment."
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {emergencyTypes.map((e) => (
              <li key={e.title} className="surface-card p-6">
                <h3 className="font-display text-base font-bold text-primary">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <div className="surface-card p-7">
            <h2 className="font-display text-xl font-bold text-primary">While you wait</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <li>• Rinse gently with warm salt water.</li>
              <li>• Use a cold compress on the outside of the cheek for swelling.</li>
              <li>• Take over-the-counter pain relief as directed on the label, if appropriate for you.</li>
              <li>• For a knocked-out tooth, hold it by the crown, rinse gently, and keep it in milk or saline.</li>
              <li>• Do not place aspirin directly against the gum — it can burn the tissue.</li>
            </ul>
          </div>
          <div className="surface-card p-7">
            <h2 className="font-display text-xl font-bold text-primary">When to go to the ER instead</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <li>• Difficulty breathing or swallowing</li>
              <li>• Swelling spreading toward the eye or down the neck</li>
              <li>• A serious facial injury or suspected jaw fracture</li>
              <li>• Bleeding that will not stop with sustained pressure</li>
              <li>• High fever with facial swelling</li>
            </ul>
            <p className="mt-5 text-sm font-semibold text-destructive">
              In these situations, call 911 or go to the nearest emergency room.
            </p>
          </div>
        </div>
      </section>

      <CtaBand title="In pain right now?" body="Call the office directly — a request form is slower than a phone call for urgent problems." />
    </>
  );
}
