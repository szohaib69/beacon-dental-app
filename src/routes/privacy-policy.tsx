import { createFileRoute } from "@tanstack/react-router";
import { clinic } from "@/config/clinic";
import { DemoNote, PageHero } from "@/components/site/ui";
import { LegalBody, type Section } from "@/components/site/LegalBody";

const sections: Section[] = [
  {
    heading: "Information we collect",
    paragraphs: [
      "When you use this website we may collect the information you voluntarily provide through our appointment request or contact forms, such as your name, email address, phone number and the reason for your inquiry.",
      "We may also collect standard technical information such as browser type, device type and pages visited, in aggregate form.",
    ],
  },
  {
    heading: "How we use your information",
    paragraphs: [
      "Information submitted through this website is used to respond to your inquiry, schedule or confirm an appointment, and administer your care and account with the practice.",
    ],
  },
  {
    heading: "Website forms are not a secure medical channel",
    paragraphs: [
      "Please do not submit detailed medical or personal health information through the website forms. Contact the office by phone to discuss health details.",
    ],
  },
  {
    heading: "Sharing your information",
    paragraphs: [
      "We do not sell your personal information. Information may be shared with service providers who support the operation of the practice and website, subject to appropriate agreements.",
    ],
  },
  {
    heading: "Cookies and analytics",
    paragraphs: [
      "This website may use cookies or similar technologies to support basic functionality and to understand how the site is used. You can control cookies through your browser settings.",
    ],
  },
  {
    heading: "Your choices",
    paragraphs: [
      "You may request access to, correction of, or deletion of the personal information you have provided by contacting the office using the details on our contact page. Certain records may be retained where required by law.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      `Questions about this policy can be directed to the office at ${clinic.contact.email} or ${clinic.contact.phoneDisplay}.`,
    ],
  },
];

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: `Privacy Policy | ${clinic.name}` },
      { name: "description", content: `How ${clinic.name} handles information collected through this website.` },
      { property: "og:title", content: "Privacy Policy" },
      { property: "og:description", content: "How information collected through this website is handled." },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" description="How information collected through this website is used and protected." />
      <section className="section-y">
        <div className="container-page max-w-3xl">
          <DemoNote>
            Template placeholder text. This policy has not been reviewed by legal counsel and must be
            replaced with a policy prepared for the practice before launch.
          </DemoNote>
          <LegalBody sections={sections} />
        </div>
      </section>
    </>
  ),
});
