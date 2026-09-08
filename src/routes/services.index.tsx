import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { clinic } from "@/config/clinic";
import { services } from "@/data/services";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { CtaBand, PageHero } from "@/components/site/ui";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: `Dental Services in Ilkley, West Yorkshire | ${clinic.name}` },
      {
        name: "description",
        content:
          "General, cosmetic, restorative, implant, pediatric, orthodontic and emergency dentistry — complete dental care under one roof in Ilkley, West Yorkshire.",
      },
      { property: "og:title", content: "Complete Dental Care Under One Roof" },
      {
        property: "og:description",
        content: "Explore every dental service offered at our Ilkley, West Yorkshire practice.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Complete Dental Care Under One Roof"
        description="Preventive, cosmetic, restorative and urgent care handled by one team that already knows your history — no shuffling between offices."
      />

      <section className="section-y">
        <div className="container-page">
          <ul className="grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <li key={s.slug} className="surface-card flex flex-col p-7 transition-shadow hover:shadow-lift">
                <div className="flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                    <ServiceIcon name={s.icon} className="size-6" />
                  </span>
                  <div>
                    <h2 className="font-display text-xl font-bold text-primary">{s.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                  </div>
                </div>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="size-4 shrink-0 text-accent-foreground" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  Learn More about {s.title}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Not sure which service you need?" body="Book a comprehensive exam and we'll walk through your options together — no obligation." />
    </>
  );
}
