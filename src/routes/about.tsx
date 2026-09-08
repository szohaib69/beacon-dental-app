import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import consultImg from "@/assets/consult.jpg";
import teamImg from "@/assets/team.jpg";
import { clinic } from "@/config/clinic";
import { comfortPoints, patientJourney, whyChooseUs } from "@/data/content";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { CtaBand, PageHero, SectionHeading } from "@/components/site/ui";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About Our Practice | ${clinic.name} in [CITY], [STATE]` },
      {
        name: "description",
        content:
          "Modern dentistry with personal care. Learn about our clinic story, philosophy, technology and patient experience in [CITY], [STATE].",
      },
      { property: "og:title", content: `About ${clinic.name}` },
      { property: "og:description", content: "Modern dentistry. Personal care. Learn our story and philosophy." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About the Clinic"
        title="Modern Dentistry. Personal Care."
        description="A general and cosmetic dental practice built around clear communication, unhurried appointments and long-term relationships with the families we serve."
      />

      <section className="section-y">
        <div className="container-page grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-[1.75rem] shadow-lift">
            <img
              src={consultImg}
              alt="Dentist and patient reviewing treatment options together in a modern operatory"
              width={1408}
              height={1008}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-primary">Our story</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Placeholder clinic story: describe when the practice opened, what motivated it, and
                how it has grown alongside the [CITY] community. Replace this section with the
                practice's real history before launch.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-primary">Our mission</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                To make excellent dental care feel accessible and understandable — so patients make
                decisions with confidence instead of pressure.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-primary">Our philosophy</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Prevention first, conservative treatment where it is appropriate, and honest
                conversation about what a tooth actually needs. We would rather help you avoid
                treatment than sell it.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-primary">Our team approach</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Dentists, hygienists and front-office staff work from the same plan and the same
                record, so you never have to repeat your story from one visit to the next.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading eyebrow="Patient Experience" title="Your Comfort Comes First" />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {comfortPoints.map((p) => (
              <li key={p.title} className="surface-card p-6">
                <h3 className="font-display text-base font-bold text-primary">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </li>
            ))}
          </ul>

          <ol className="mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {patientJourney.map((s) => (
              <li key={s.step} className="rounded-2xl border border-border bg-background p-5">
                <span className="font-display text-2xl font-extrabold text-sky">{s.step}</span>
                <h3 className="mt-1 font-display text-base font-bold text-primary">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeading eyebrow="The Difference" title="Why Patients Choose Us" />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <li key={item.title} className="surface-card p-6">
                <span className="flex size-11 items-center justify-center rounded-xl bg-mint text-mint-foreground">
                  <ServiceIcon name={item.icon} className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-[1.75rem] shadow-lift">
            <img
              src={teamImg}
              alt="The dental team standing together in the clinic"
              width={1408}
              height={1008}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <SectionHeading eyebrow="Our People" title="One team, start to finish" align="left" />
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Meet the dentists and hygienists who will be caring for you. Team profiles below use
              placeholder names and credentials until the practice's real details are added.
            </p>
            <Link
              to="/team"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
            >
              Meet Our Team
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
