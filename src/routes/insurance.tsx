import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileCheck2, HandCoins, Network, Receipt } from "lucide-react";
import { clinic, disclaimers } from "@/config/clinic";
import { CtaBand, DemoNote, PageHero, SectionHeading } from "@/components/site/ui";

export const Route = createFileRoute("/insurance")({
  head: () => ({
    meta: [
      { title: `Dental Insurance & Financing | ${clinic.name} in Ilkley, West Yorkshire` },
      {
        name: "description",
        content:
          "How dental insurance, verification, estimates and payment options work at our Ilkley, West Yorkshire practice — including options for patients without insurance.",
      },
      { property: "og:title", content: "Insurance & Financing" },
      { property: "og:description", content: "Making quality dental care more accessible." },
      { property: "og:url", content: "/insurance" },
    ],
    links: [{ rel: "canonical", href: "/insurance" }],
  }),
  component: Insurance,
});

const insuranceItems = [
  {
    icon: FileCheck2,
    title: "Dental insurance",
    body: "We work with a range of dental plans. Because participation varies by plan, network and employer group, we confirm your specific coverage before treatment rather than making assumptions.",
  },
  {
    icon: Network,
    title: "In-network vs. out-of-network",
    body: "In-network means the practice has a contracted fee schedule with your plan. Out-of-network care is often still covered, usually at a lower reimbursement rate. We explain the practical difference for your plan before you commit.",
  },
  {
    icon: Receipt,
    title: "Insurance verification",
    body: "Send us your plan details ahead of your visit and our team will verify benefits, remaining annual maximum and any waiting periods.",
  },
  {
    icon: HandCoins,
    title: "Estimated patient responsibility",
    body: "You receive a written estimate of your expected out-of-pocket cost before treatment begins. Estimates are based on plan information available at the time and can change with your insurer's final determination.",
  },
];

function Insurance() {
  return (
    <>
      <PageHero
        eyebrow="Insurance & Financing"
        title="Making Quality Dental Care More Accessible"
        description="Cost should never be the reason a problem goes untreated. Here's how coverage, estimates and payment work at our office."
      />

      <section className="section-y">
        <div className="container-page">
          <SectionHeading eyebrow="Insurance" title="How coverage works here" align="left" />
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {insuranceItems.map((item) => (
              <li key={item.title} className="surface-card p-6">
                <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 max-w-3xl">
            <DemoNote>{disclaimers.insurance}</DemoNote>
          </div>
          <div className="mt-4 max-w-3xl">
            <DemoNote>
              No specific insurance carriers are listed on this demo site. Add only the plans the
              practice has confirmed it participates in.
            </DemoNote>
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading eyebrow="Financing" title="Flexible ways to pay" align="left" />
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            <li className="surface-card p-6">
              <h3 className="font-display text-base font-bold text-primary">Flexible payment options</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Major cards, debit and health spending accounts. Larger plans can often be phased so
                the most urgent work happens first.
              </p>
            </li>
            <li className="surface-card p-6">
              <h3 className="font-display text-base font-bold text-primary">Monthly payment options</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Third-party healthcare financing can spread treatment cost across monthly
                installments. Terms and approval come from the finance provider, not our office.
              </p>
            </li>
            <li className="surface-card p-6">
              <h3 className="font-display text-base font-bold text-primary">Apply for financing</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Our team can walk you through the application and what documentation you'll need.
              </p>
              <Link
                to="/financing"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                Financing details
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <div className="surface-card p-8 md:p-12">
            <h2 className="font-display text-2xl font-bold text-primary md:text-3xl">
              Don't have insurance?
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              You still have options. Self-pay patients receive clear pricing up front, and we can
              often sequence treatment so the most important work happens first and the rest follows
              at a manageable pace. Some practices also offer in-house membership plans — contact
              our office to ask what is available here.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={clinic.contact.phoneHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
              >
                Talk to Our Billing Team
              </a>
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-border px-6 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
              >
                Send a question
              </Link>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Billing contact placeholder: {clinic.contact.billingEmail}
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
