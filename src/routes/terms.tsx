import { createFileRoute } from "@tanstack/react-router";
import { clinic, disclaimers } from "@/config/clinic";
import { DemoNote, PageHero } from "@/components/site/ui";
import { LegalBody, type Section } from "@/components/site/LegalBody";

const sections: Section[] = [
  {
    heading: "Acceptance of these terms",
    paragraphs: [
      "By accessing or using this website you agree to these Terms of Use. If you do not agree, please do not use the site.",
    ],
  },
  {
    heading: "Informational purpose only",
    paragraphs: [
      disclaimers.notAdvice,
      "Never disregard professional advice or delay seeking it because of something you read on this website.",
    ],
  },
  {
    heading: "Appointment requests",
    paragraphs: [
      "Submitting the appointment request form does not create a confirmed booking. An appointment exists only once a member of the practice has confirmed it with you directly.",
    ],
  },
  {
    heading: "Intellectual property",
    paragraphs: [
      "Content on this website, including text, layout and graphics, is owned by the practice or its licensors and may not be reproduced without permission.",
    ],
  },
  {
    heading: "Third-party links",
    paragraphs: [
      "This website may link to third-party sites. We are not responsible for the content, accuracy or privacy practices of those sites.",
    ],
  },
  {
    heading: "Limitation of liability",
    paragraphs: [
      "To the extent permitted by law, the practice is not liable for any damages arising from the use of, or inability to use, this website.",
    ],
  },
  {
    heading: "Changes",
    paragraphs: [
      "These terms may be updated from time to time. Continued use of the website after changes are posted constitutes acceptance of the revised terms.",
    ],
  },
];

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: `Terms of Use | ${clinic.name}` },
      { name: "description", content: `Terms governing use of the ${clinic.name} website.` },
      { property: "og:title", content: "Terms of Use" },
      { property: "og:description", content: "Terms governing use of this website." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" description="The terms that govern your use of this website." />
      <section className="section-y">
        <div className="container-page max-w-3xl">
          <DemoNote>
            Template placeholder text that has not been reviewed by legal counsel. Replace with terms
            prepared for the practice before launch.
          </DemoNote>
          <LegalBody sections={sections} />
        </div>
      </section>
    </>
  ),
});
