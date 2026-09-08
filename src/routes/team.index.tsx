import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import teamImg from "@/assets/team.jpg";
import { clinic } from "@/config/clinic";
import { doctors } from "@/data/team";
import { CtaBand, DemoNote, PageHero } from "@/components/site/ui";

export const Route = createFileRoute("/team/")({
  head: () => ({
    meta: [
      { title: `Meet Our Dentists in Ilkley, West Yorkshire | ${clinic.name}` },
      {
        name: "description",
        content:
          "Meet the dentists and hygienists caring for families across Ilkley, West Yorkshire — their focus areas, education and approach to patient care.",
      },
      { property: "og:title", content: "Meet Our Dental Team" },
      { property: "og:description", content: "The dentists and hygienists behind your care." },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamIndex,
});

function TeamIndex() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="The People Behind Your Care"
        description="A stable, tenured team that knows your history — so you are not re-explaining your dental story at every visit."
      />

      <section className="section-y">
        <div className="container-page">
          <div className="overflow-hidden rounded-[1.75rem] shadow-lift">
            <img
              src={teamImg}
              alt="Dental team of five standing together in a bright modern clinic"
              width={1408}
              height={1008}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mx-auto mt-8 max-w-2xl">
            <DemoNote>
              Team profiles below use placeholder names, credentials, education and memberships. No
              real practitioner is represented. Replace every field with verified information before
              publishing.
            </DemoNote>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {doctors.map((d) => (
              <li key={d.slug} className="surface-card flex flex-col overflow-hidden">
                <div className="flex aspect-[4/5] flex-col items-center justify-center gap-2 bg-secondary">
                  <span className="flex size-20 items-center justify-center rounded-full bg-background font-display text-xl font-bold text-primary">
                    {d.initials}
                  </span>
                  <span className="text-xs text-muted-foreground">Photo placeholder</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="font-display text-lg font-bold text-primary">
                    {d.name}, {d.credential}
                  </h2>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
                    {d.role}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{d.specialty}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{d.bio}</p>
                  <Link
                    to="/team/$slug"
                    params={{ slug: d.slug }}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                  >
                    View Profile
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Ready to meet your dentist?" />
    </>
  );
}
