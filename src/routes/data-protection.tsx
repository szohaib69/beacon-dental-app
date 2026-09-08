import { createFileRoute } from "@tanstack/react-router";
import { clinic } from "@/config/clinic";
import { DemoNote, PageHero } from "@/components/site/ui";
import { LegalBody, type Section } from "@/components/site/LegalBody";

const sections: Section[] = [
  {
    heading: "About this notice",
    paragraphs: [
      "This notice outlines how the practice handles personal and health information under UK data protection law (UK GDPR and the Data Protection Act 2018).",
      "The text below is a placeholder outline only. It must be replaced with a privacy notice prepared for the practice before launch.",
    ],
  },
  {
    heading: "Information we hold",
    paragraphs: [
      "Placeholder: describe the personal details, medical history, clinical records, images and payment information the practice keeps, and where they come from.",
    ],
  },
  {
    heading: "How your information is used",
    paragraphs: [
      "Placeholder: describe use for providing dental care, appointment reminders, billing, and any legal or regulatory obligations, together with the lawful basis relied on for each purpose.",
    ],
  },
  {
    heading: "Your rights",
    paragraphs: [
      "Placeholder: describe the right of access, rectification, erasure, restriction, objection and data portability, and how to make a request.",
    ],
  },
  {
    heading: "Sharing and retention",
    paragraphs: [
      "Placeholder: describe who information may be shared with (for example laboratories, referral specialists, NHS bodies) and how long dental records are retained.",
    ],
  },
  {
    heading: "Questions and complaints",
    paragraphs: [
      `Placeholder: describe how to raise a concern with the practice and how to complain to the Information Commissioner's Office. Practice contact: ${clinic.contact.email}, ${clinic.contact.phoneDisplay}.`,
    ],
  },
  {
    heading: "Important limitation about this website",
    paragraphs: [
      "This is a public marketing website. The forms on this site are not a secure channel for health information — please do not submit medical details through them. Call the practice instead.",
    ],
  },
];

export const Route = createFileRoute("/data-protection")({
  head: () => ({
    meta: [
      { title: `Data Protection & Privacy Notice | ${clinic.name}` },
      { name: "description", content: "Placeholder outline of how Ilkley Dental Care handles patient information under UK data protection law." },
      { property: "og:title", content: "Data Protection & Privacy Notice" },
      { property: "og:description", content: "How patient information is handled under UK GDPR — placeholder outline." },
      { property: "og:url", content: "/data-protection" },
    ],
    links: [{ rel: "canonical", href: "/data-protection" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Legal"
        title="Data Protection & Privacy Notice"
        description="How patient information is handled — placeholder outline pending a notice prepared for the practice."
      />
      <section className="section-y">
        <div className="container-page max-w-3xl">
          <DemoNote>
            This is a placeholder outline, not a completed privacy notice. The practice should have
            its own UK GDPR privacy notice prepared and published here.
          </DemoNote>
          <LegalBody sections={sections} />
        </div>
      </section>
    </>
  ),
});
