import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { clinic, disclaimers } from "@/config/clinic";
import { getPost, posts } from "@/data/blog";
import { CtaBand, DemoNote } from "@/components/site/ui";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article not found" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.post;
    return {
      meta: [
        { title: `${p.title} | ${clinic.name}` },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: p.title,
            description: p.excerpt,
            datePublished: p.date,
            articleSection: p.category,
            publisher: { "@type": "Organization", name: clinic.name },
          }),
        },
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="hero-gradient border-b border-border">
          <div className="container-page max-w-3xl py-12 md:py-16">
            <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link to="/" className="hover:text-primary">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link to="/blog" className="hover:text-primary">
                    Dental Resources
                  </Link>
                </li>
              </ol>
            </nav>
            <p className="eyebrow mt-6">{post.category}</p>
            <h1 className="mt-3 text-[2rem] font-bold leading-tight text-primary md:text-[2.7rem]">
              {post.title}
            </h1>
            <p className="mt-4 text-muted-foreground">
              {post.date} · {post.readTime}
            </p>
          </div>
        </header>

        <div className="container-page max-w-3xl py-12 md:py-16">
          <p className="text-lg leading-relaxed text-foreground">{post.excerpt}</p>

          <div className="mt-8 space-y-8">
            {post.body.map((block, i) => (
              <section key={i}>
                {block.heading && (
                  <h2 className="font-display text-xl font-bold text-primary md:text-2xl">{block.heading}</h2>
                )}
                <div className="mt-3 space-y-4 leading-relaxed text-muted-foreground">
                  {block.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
                {block.list && (
                  <ul className="mt-4 space-y-2 rounded-2xl border border-border bg-surface p-5 text-sm leading-relaxed text-muted-foreground">
                    {block.list.map((li) => (
                      <li key={li}>• {li}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="mt-10">
            <DemoNote>{disclaimers.notAdvice}</DemoNote>
          </div>
        </div>
      </article>

      <section className="section-y bg-surface">
        <div className="container-page">
          <h2 className="font-display text-2xl font-bold text-primary">Keep reading</h2>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {more.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="eyebrow">{p.category}</span>
                  <h3 className="mt-3 font-display text-base font-bold text-primary">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
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
