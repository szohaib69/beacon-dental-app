import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, FileText } from "lucide-react";
import { clinic, disclaimers } from "@/config/clinic";
import { comfortPoints, patientJourney } from "@/data/content";
import { CtaBand, DemoNote, PageHero, SectionHeading } from "@/components/site/ui";

export const Route = createFileRoute("/patient-resources")({
  head: () => ({
    meta: [
      { title: `Patient Resources & Forms | ${clinic.name} in Ilkley, West Yorkshire` },
      {
        name: "description",
        content:
          "New patient information, what to expect at your first visit, printable forms, aftercare instructions and emergency guidance for our Ilkley, West Yorkshire dental patients.",
      },
      { property: "og:title", content: "Patient Resources" },
      { property: "og:description", content: "Forms, first-visit guidance and aftercare instructions." },
      { property: "og:url", content: "/patient-resources" },
    ],
    links: [{ rel: "canonical", href: "/patient-resources" }],
  }),
  component: PatientResources,
});

const forms = [
  { name: "New Patient Registration", note: "Contact details, health history and consent" },
  { name: "Medical History Update", note: "For returning patients since your last visit" },
  { name: "HIPAA Acknowledgement", note: "Confirms you received our privacy notice" },
  { name: "Financial Policy", note: "Payment, billing and cancellation terms" },
];

const aftercare = [
  { title: "After a filling", body: "Numbness can last a few hours — avoid chewing on that side until it wears off. Mild sensitivity to temperature for a few days is normal." },
  { title: "After an extraction", body: "Bite firmly on gauze for 30–45 minutes, avoid rinsing, spitting and straws for 24 hours, and stick to soft foods. Call the office if bleeding or pain increases." },
  { title: "After a crown", body: "Avoid sticky foods for 24 hours with a temporary crown. If your bite feels high after the final crown, call us for a quick adjustment." },
  { title: "After a deep cleaning", body: "Gums may feel tender for a few days. Warm salt-water rinses help, and keep brushing gently along the gumline." },
  { title: "After whitening", body: "Sensitivity for 24–48 hours is common. Avoid staining foods and drinks during the first two days." },
  { title: "After implant surgery", body: "Use cold compresses for the first day, follow your prescribed regimen, and keep the surgical area clean as instructed." },
];

function PatientResources() {
  return (
    <>
      <PageHero
        eyebrow="Patient Resources"
        title="Everything You Need Before Your Visit"
        description="Forms, first-visit guidance, aftercare instructions and answers — gathered in one place so your appointment runs smoothly."
      />

      <section id="new-patients" className="section-y scroll-mt-24">
        <div className="container-page">
          <SectionHeading eyebrow="New Patients" title="Welcome to the practice" align="left" />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="surface-card p-7">
              <h3 className="font-display text-lg font-bold text-primary">What to bring</h3>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                <li>• Photo ID, if you have it</li>
                <li>• Details of any medical conditions and medicines you take</li>
                <li>• A list of current medications and known allergies</li>
                <li>• Recent X-rays or records from a previous dentist, if available</li>
                <li>• Completed intake forms, if you filled them out at home</li>
              </ul>
            </div>
            <div className="surface-card p-7">
              <h3 className="font-display text-lg font-bold text-primary">Plan for about an hour</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                First visits typically run 45 to 60 minutes. Arriving ten minutes early gives you
                time to finish paperwork without rushing. Parking details are on our contact page.
              </p>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                Directions and parking
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="what-to-expect" className="section-y scroll-mt-24 bg-surface">
        <div className="container-page">
          <SectionHeading eyebrow="What to Expect" title="Your first appointment, step by step" />
          <ol className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {patientJourney.map((s) => (
              <li key={s.step} className="surface-card p-6">
                <span className="font-display text-3xl font-extrabold text-sky">{s.step}</span>
                <h3 className="mt-2 font-display text-base font-bold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </li>
            ))}
          </ol>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {comfortPoints.slice(0, 4).map((p) => (
              <li key={p.title} className="rounded-xl border border-border bg-background p-5">
                <h3 className="text-sm font-bold text-primary">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="forms" className="section-y scroll-mt-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Forms"
            title="Printable patient forms"
            description="Complete these before your visit to save time at check-in."
            align="left"
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {forms.map((f) => (
              <li key={f.name} className="surface-card flex items-center justify-between gap-4 p-5">
                <span className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                    <FileText className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-semibold text-primary">{f.name}</span>
                    <span className="block text-xs text-muted-foreground">{f.note}</span>
                  </span>
                </span>
                <button
                  type="button"
                  disabled
                  title="Form file placeholder — upload the practice's real PDF"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-4 text-sm font-semibold text-muted-foreground"
                >
                  <Download className="size-4" aria-hidden="true" />
                  PDF
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 max-w-3xl">
            <DemoNote>
              Form downloads are placeholders. Upload the practice's real PDFs and link them here
              before launch.
            </DemoNote>
          </div>
        </div>
      </section>

      <section id="aftercare" className="section-y scroll-mt-24 bg-surface">
        <div className="container-page">
          <SectionHeading eyebrow="Aftercare" title="Post-treatment instructions" />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aftercare.map((a) => (
              <li key={a.title} className="surface-card p-6">
                <h3 className="font-display text-base font-bold text-primary">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
              </li>
            ))}
          </ul>
          <div className="mx-auto mt-8 max-w-3xl">
            <DemoNote>{disclaimers.notAdvice}</DemoNote>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-5 md:grid-cols-3">
          <Link to="/insurance" className="surface-card p-6 transition-shadow hover:shadow-lift">
            <h2 className="font-display text-lg font-bold text-primary">Insurance information</h2>
            <p className="mt-2 text-sm text-muted-foreground">Coverage, verification and estimates.</p>
          </Link>
          <Link to="/faq" className="surface-card p-6 transition-shadow hover:shadow-lift">
            <h2 className="font-display text-lg font-bold text-primary">Dental FAQs</h2>
            <p className="mt-2 text-sm text-muted-foreground">Answers to the questions we hear most.</p>
          </Link>
          <Link to="/emergency" className="surface-card p-6 transition-shadow hover:shadow-lift">
            <h2 className="font-display text-lg font-bold text-primary">Emergency dental information</h2>
            <p className="mt-2 text-sm text-muted-foreground">What to do if something goes wrong.</p>
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
