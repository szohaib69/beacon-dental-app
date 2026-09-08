import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { clinic } from "@/config/clinic";
import { getService, services } from "@/data/services";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { BookButton, CallButton, CtaBand, SectionHeading } from "@/components/site/ui";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found" }, { name: "robots", content: "noindex" }] };
    }
    const s = loaderData.service;
    const title = `${s.title} in [CITY], [STATE] | ${clinic.name}`;
    return {
      meta: [
        { title },
        { name: "description", content: `${s.short} Serving patients across [CITY], [STATE].` },
        { property: "og:title", content: title },
        { property: "og:description", content: s.short },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/services/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
      scripts: s.faq.length
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: s.faq.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              }),
            },
          ]
        : [],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

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
                <Link to="/services" className="hover:text-primary">
                  Services
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-semibold text-primary">{service.title}</li>
            </ol>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <span className="flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <ServiceIcon name={service.icon} className="size-7" />
              </span>
              <h1 className="mt-5 text-[2.1rem] font-bold leading-tight text-primary md:text-5xl">
                {service.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {service.intro}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <BookButton />
                <CallButton />
              </div>
            </div>

            <aside className="surface-card h-fit p-6">
              <h2 className="font-display text-base font-bold text-primary">What this includes</h2>
              <ul className="mt-4 space-y-2.5">
                {service.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent-foreground" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeading eyebrow="How we approach it" title={`Our approach to ${service.title.toLowerCase()}`} />
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {service.highlights.map((h) => (
              <li key={h.title} className="surface-card p-6">
                <h3 className="font-display text-base font-bold text-primary">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {service.faq.length > 0 && (
        <section className="section-y bg-surface">
          <div className="container-page max-w-3xl">
            <SectionHeading eyebrow="Questions" title={`${service.title} FAQs`} />
            <div className="mt-10">
              <FaqAccordion items={service.faq} />
            </div>
          </div>
        </section>
      )}

      <section className="section-y">
        <div className="container-page">
          <SectionHeading eyebrow="Related care" title="Other services you may need" />
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: r.slug }}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
                >
                  <h3 className="font-display text-base font-bold text-primary">{r.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{r.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Learn More
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title={`Ready to talk about ${service.title.toLowerCase()}?`} />
    </>
  );
}
