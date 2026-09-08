import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { clinic } from "@/config/clinic";
import { blogCategories, posts } from "@/data/blog";
import { CtaBand, PageHero } from "@/components/site/ui";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: `Dental Health Articles & Patient Education | ${clinic.name}` },
      {
        name: "description",
        content:
          "Practical dental education from our [CITY], [STATE] team — oral health, preventive care, cosmetic dentistry, implants, children's dentistry and emergencies.",
      },
      { property: "og:title", content: "Dental Resources & Patient Education" },
      { property: "og:description", content: "Practical dental articles written for patients." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="Dental Resources"
        title="Straightforward Dental Education"
        description="Clear, practical articles about caring for your teeth — written for patients, not for search engines."
      />

      <section className="section-y">
        <div className="container-page">
          <ul className="flex flex-wrap gap-2" aria-label="Article categories">
            {blogCategories.map((c) => (
              <li
                key={c}
                className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-muted-foreground"
              >
                {c}
              </li>
            ))}
          </ul>

          {featured && (
            <Link
              to="/blog/$slug"
              params={{ slug: featured.slug }}
              className="group mt-10 block rounded-3xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift md:p-10"
            >
              <span className="eyebrow">{featured.category}</span>
              <h2 className="mt-3 font-display text-2xl font-bold text-primary md:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{featured.excerpt}</p>
              <span className="mt-5 flex items-center gap-3 text-sm text-muted-foreground">
                {featured.date} · {featured.readTime}
                <ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          )}

          <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="eyebrow">{p.category}</span>
                  <h2 className="mt-3 font-display text-lg font-bold text-primary">{p.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                  <span className="mt-5 text-xs text-muted-foreground">
                    {p.date} · {p.readTime}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Questions about your own teeth?" body="Articles are general information. Book an exam for advice specific to you." />
    </>
  );
}
