import { createFileRoute, Link } from "@tanstack/react-router";
import { clinic } from "@/config/clinic";
import { CtaBand, DemoNote, PageHero, SectionHeading } from "@/components/site/ui";

export const Route = createFileRoute("/financing")({
  head: () => ({
    meta: [
      { title: `Dental Financing & Payment Plans | ${clinic.name}` },
      {
        name: "description",
        content:
          "Payment options and monthly financing for dental treatment in [CITY], [STATE], including self-pay guidance and written estimates before treatment.",
      },
      { property: "og:title", content: "Dental Financing & Payment Plans" },
      { property: "og:description", content: "Flexible ways to pay for the dental care you need." },
      { property: "og:url", content: "/financing" },
    ],
    links: [{ rel: "canonical", href: "/financing" }],
  }),
  component: Financing,
});

const steps = [
  { title: "1. Review your treatment plan", body: "We walk through what is recommended, what is optional, and what can safely wait." },
  { title: "2. Get a written estimate", body: "Every plan comes with an itemized estimate, including expected insurance contribution where applicable." },
  { title: "3. Choose how to pay", body: "Pay in full, use insurance benefits, or apply for monthly financing through a third-party provider." },
  { title: "4. Schedule at your pace", body: "Larger plans can be phased across visits or benefit years to spread cost." },
];

function Financing() {
  return (
    <>
      <PageHero
        eyebrow="Financing"
        title="Payment Options That Fit Real Budgets"
        description="Clear pricing before treatment, and several ways to pay for it — so you can make the decision based on your health, not a surprise bill."
      />

      <section className="section-y">
        <div className="container-page">
          <SectionHeading eyebrow="How it works" title="From estimate to treatment" align="left" />
          <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <li key={s.title} className="surface-card p-6">
                <h3 className="font-display text-base font-bold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <div className="surface-card p-7">
              <h2 className="font-display text-xl font-bold text-primary">Monthly payment plans</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Third-party healthcare financing lets you spread the cost of treatment over monthly
                installments. Approval, interest terms and payment schedules are set by the finance
                provider. Our team can explain the process and help you apply during your visit.
              </p>
              <a
                href={clinic.contact.phoneHref}
                className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
              >
                Start a Financing Conversation
              </a>
            </div>
            <div className="surface-card p-7">
              <h2 className="font-display text-xl font-bold text-primary">Paying without insurance</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Self-pay patients get the same written estimates and the same sequencing options.
                Preventive care is usually the least expensive route long term, so we start there
                and build the plan around what your teeth actually need.
              </p>
              <Link
                to="/insurance"
                className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full border border-border px-6 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
              >
                Insurance information
              </Link>
            </div>
          </div>

          <div className="mt-8 max-w-3xl">
            <DemoNote>
              No specific financing companies, interest rates or plan terms are named on this demo
              site. Add only providers and terms the practice has confirmed.
            </DemoNote>
          </div>
        </div>
      </section>

      <CtaBand title="Let's talk about your options" body="Call the office and our billing team will walk you through what treatment would cost and how to pay for it." />
    </>
  );
}
