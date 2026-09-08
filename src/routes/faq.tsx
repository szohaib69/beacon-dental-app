import { createFileRoute } from "@tanstack/react-router";
import { clinic } from "@/config/clinic";
import { faqs } from "@/data/content";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { CtaBand, PageHero } from "@/components/site/ui";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: `Dental FAQs | ${clinic.name} in [CITY], [STATE]` },
      {
        name: "description",
        content:
          "Answers to common dental questions — visit frequency, insurance, costs, first appointments, emergencies, whitening, implants and more.",
      },
      { property: "og:title", content: "Dental FAQs" },
      { property: "og:description", content: "Answers to the questions our patients ask most." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Faq,
});

function Faq() {
  return (
    <>
      <PageHero
        eyebrow="Patient Resources"
        title="Frequently Asked Questions"
        description="Practical answers about appointments, insurance, costs and treatment. Can't find yours? Call the office — we're happy to talk it through."
      />
      <section className="section-y">
        <div className="container-page max-w-3xl">
          <FaqAccordion items={faqs} />
        </div>
      </section>
      <CtaBand title="Still have a question?" body="Call our team or send an appointment request and we'll follow up with you directly." />
    </>
  );
}
