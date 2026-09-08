import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { GraduationCap, BadgeCheck, Stethoscope } from "lucide-react";
import { clinic } from "@/config/clinic";
import { doctors, getDoctor } from "@/data/team";
import { BookButton, CallButton, CtaBand, DemoNote } from "@/components/site/ui";

export const Route = createFileRoute("/team/$slug")({
  loader: ({ params }) => {
    const doctor = getDoctor(params.slug);
    if (!doctor) throw notFound();
    return { doctor };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Profile not found" }, { name: "robots", content: "noindex" }] };
    }
    const d = loaderData.doctor;
    const title = `${d.name}, ${d.credential} — ${d.role} | ${clinic.name}`;
    return {
      meta: [
        { title },
        { name: "description", content: `${d.specialty} at ${clinic.name} in Ilkley, West Yorkshire. ${d.bio}` },
        { property: "og:title", content: title },
        { property: "og:description", content: d.specialty },
        { property: "og:type", content: "profile" },
        { property: "og:url", content: `/team/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/team/${params.slug}` }],
    };
  },
  component: DoctorProfile,
});

function DoctorProfile() {
  const { doctor } = Route.useLoaderData();
  const others = doctors.filter((d) => d.slug !== doctor.slug);

  return (
    <>
      <section className="hero-gradient border-b border-border">
        <div className="container-page py-12 md:py-16">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link to="/team" className="hover:text-primary">
                  Our Team
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-semibold text-primary">{doctor.name}</li>
            </ol>
          </nav>

          <div className="mt-8 grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-14">
            <div className="surface-card flex aspect-[4/5] flex-col items-center justify-center gap-3 bg-secondary">
              <span className="flex size-24 items-center justify-center rounded-full bg-background font-display text-2xl font-bold text-primary">
                {doctor.initials}
              </span>
              <span className="text-xs text-muted-foreground">Professional photo placeholder</span>
            </div>
            <div>
              <p className="eyebrow">{doctor.role}</p>
              <h1 className="mt-3 text-[2rem] font-bold leading-tight text-primary md:text-4xl">
                {doctor.name}, {doctor.credential}
              </h1>
              <p className="mt-3 text-lg text-accent-foreground">{doctor.specialty}</p>
              <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
                {doctor.longBio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <BookButton label={`Book with ${doctor.name}`} />
                <CallButton />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-6 md:grid-cols-3">
          <div className="surface-card p-6">
            <GraduationCap className="size-6 text-accent-foreground" aria-hidden="true" />
            <h2 className="mt-4 font-display text-base font-bold text-primary">Education</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
              {doctor.education.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </div>
          <div className="surface-card p-6">
            <BadgeCheck className="size-6 text-accent-foreground" aria-hidden="true" />
            <h2 className="mt-4 font-display text-base font-bold text-primary">Professional memberships</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
              {doctor.memberships.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
          <div className="surface-card p-6">
            <Stethoscope className="size-6 text-accent-foreground" aria-hidden="true" />
            <h2 className="mt-4 font-display text-base font-bold text-primary">Clinical focus</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
              {doctor.focus.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="container-page mt-8 max-w-3xl">
          <DemoNote>
            This profile contains placeholder information only. Name, degree, education and
            memberships must be replaced with the practitioner's verified credentials.
          </DemoNote>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page">
          <h2 className="font-display text-2xl font-bold text-primary">More of our team</h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((d) => (
              <li key={d.slug}>
                <Link
                  to="/team/$slug"
                  params={{ slug: d.slug }}
                  className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="flex size-12 items-center justify-center rounded-full bg-secondary font-display font-bold text-primary">
                    {d.initials}
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-primary">
                    {d.name}, {d.credential}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{d.specialty}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
