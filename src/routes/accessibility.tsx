import { createFileRoute } from "@tanstack/react-router";
import { clinic } from "@/config/clinic";
import { DemoNote, PageHero } from "@/components/site/ui";
import { LegalBody, type Section } from "@/components/site/LegalBody";

const sections: Section[] = [
  {
    heading: "Our commitment",
    paragraphs: [
      "We want every patient to be able to use this website, regardless of ability or assistive technology. This site has been built with accessibility in mind and we continue to improve it.",
    ],
  },
  {
    heading: "What we have implemented",
    paragraphs: [
      "Semantic HTML structure with a single main heading per page, keyboard-operable navigation and forms, visible focus indicators, labelled form fields, descriptive alternative text for meaningful images, colour combinations chosen for contrast, and support for the operating system's reduced-motion preference.",
    ],
  },
  {
    heading: "Standards we work toward",
    paragraphs: [
      "We aim to follow the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA as a practical target. Accessibility is ongoing work rather than a fixed state, and some areas may still fall short.",
    ],
  },
  {
    heading: "Physical accessibility at the office",
    paragraphs: [
      "Placeholder: describe step-free entry, accessible parking, restroom accessibility and any accommodations the practice provides. Replace with the practice's verified details.",
    ],
  },
  {
    heading: "Tell us about a barrier",
    paragraphs: [
      `If you encounter a barrier on this website or need information in another format, contact the office at ${clinic.contact.email} or ${clinic.contact.phoneDisplay} and we will work to provide the information you need.`,
    ],
  },
];

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: `Accessibility Statement | ${clinic.name}` },
      { name: "description", content: `How ${clinic.name} approaches website and office accessibility, and how to report a barrier.` },
      { property: "og:title", content: "Accessibility Statement" },
      { property: "og:description", content: "Our approach to website and office accessibility." },
      { property: "og:url", content: "/accessibility" },
    ],
    links: [{ rel: "canonical", href: "/accessibility" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Accessibility Statement" description="Our approach to making this website and our office usable for everyone." />
      <section className="section-y">
        <div className="container-page max-w-3xl">
          <DemoNote>
            Physical accessibility details on this page are placeholders. Replace them with the
            practice's verified information.
          </DemoNote>
          <LegalBody sections={sections} />
        </div>
      </section>
    </>
  ),
});
