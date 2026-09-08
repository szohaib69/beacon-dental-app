import { createFileRoute } from "@tanstack/react-router";
import { clinic } from "@/config/clinic";
import { DemoNote, PageHero } from "@/components/site/ui";
import { LegalBody, type Section } from "@/components/site/LegalBody";

const sections: Section[] = [
  {
    heading: "About this notice",
    paragraphs: [
      "A Notice of Privacy Practices describes how a healthcare provider may use and disclose protected health information (PHI) and the rights patients have regarding that information.",
      "The text below is a placeholder outline only. It is not a compliant notice and must be replaced with one prepared for the practice.",
    ],
  },
  {
    heading: "How health information may be used",
    paragraphs: [
      "Placeholder: describe permitted uses for treatment, payment and healthcare operations, and any uses requiring written authorization.",
    ],
  },
  {
    heading: "Your rights regarding your health information",
    paragraphs: [
      "Placeholder: describe the right to inspect and copy records, request amendments, request an accounting of disclosures, request restrictions, request confidential communications, and obtain a paper copy of the notice.",
    ],
  },
  {
    heading: "Practice responsibilities",
    paragraphs: [
      "Placeholder: describe the practice's obligations to safeguard PHI, provide this notice, and abide by its terms.",
    ],
  },
  {
    heading: "Complaints",
    paragraphs: [
      `Placeholder: describe how to file a complaint with the practice and with the appropriate federal agency. Practice contact: ${clinic.contact.email}, ${clinic.contact.phoneDisplay}.`,
    ],
  },
  {
    heading: "Important limitation about this website",
    paragraphs: [
      "This website is a public marketing website. Publishing a privacy page does not by itself make a website HIPAA compliant, and the forms on this site are not a secure channel for protected health information. Do not submit medical details through them — call the office instead.",
    ],
  },
];

export const Route = createFileRoute("/hipaa-notice")({
  head: () => ({
    meta: [
      { title: `HIPAA Privacy Notice (Placeholder) | ${clinic.name}` },
      { name: "description", content: "Placeholder outline of a Notice of Privacy Practices for protected health information." },
      { property: "og:title", content: "HIPAA Privacy Notice" },
      { property: "og:description", content: "Notice of Privacy Practices placeholder outline." },
      { property: "og:url", content: "/hipaa-notice" },
    ],
    links: [{ rel: "canonical", href: "/hipaa-notice" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Legal"
        title="HIPAA Privacy Notice"
        description="Notice of Privacy Practices — placeholder outline pending a compliant document prepared for the practice."
      />
      <section className="section-y">
        <div className="container-page max-w-3xl">
          <DemoNote>
            This is not a compliant HIPAA Notice of Privacy Practices and no claim of HIPAA
            compliance is made by publishing it. A qualified professional must prepare the
            practice's actual notice, and technical, administrative and physical safeguards must be
            implemented separately.
          </DemoNote>
          <LegalBody sections={sections} />
        </div>
      </section>
    </>
  ),
});
