import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, Check, CalendarCheck, Phone, MapPin, Clock } from "lucide-react";
import heroImg from "@/assets/hero-clinic.jpg";
import consultImg from "@/assets/consult.jpg";
import techImg from "@/assets/technology.jpg";
import { clinic, disclaimers } from "@/config/clinic";
import { services } from "@/data/services";
import { whyChooseUs, patientJourney, technology, beforeAfter, faqs } from "@/data/content";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { Testimonials } from "@/components/site/Testimonials";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { SectionHeading, CtaBand, DemoNote, Stars } from "@/components/site/ui";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `Dentist in Ilkley, West Yorkshire | ${clinic.name}` },
      {
        name: "description",
        content:
          "Confident smiles start here. Family, cosmetic, implant and emergency dentistry in Ilkley, West Yorkshire. Accepting new patients — request an appointment today.",
      },
      { property: "og:title", content: `Dentist in Ilkley, West Yorkshire | ${clinic.name}` },
      {
        property: "og:description",
        content:
          "Comprehensive dental care for you and your family, delivered with compassion, comfort and modern technology.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.slice(0, 6).map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  const heroRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-hero-item]", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.09,
      });
      gsap.from("[data-hero-visual]", {
        scale: 0.96,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.15,
      });
    }, heroRef);

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const el = imageRef.current;
        if (!el) return;
        const offset = Math.min(window.scrollY, 600) * 0.06;
        gsap.set(el, { y: offset });
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      ctx.revert();
    };
  }, []);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="hero-gradient relative overflow-hidden">
        <div className="container-page py-12 md:py-20 lg:pb-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
            <div>
              <p className="eyebrow" data-hero-item>
                <span className="h-px w-6 bg-accent" aria-hidden="true" />
                Family &amp; Cosmetic Dentistry in Ilkley, West Yorkshire
              </p>
              <h1
                data-hero-item
                className="mt-4 text-[2.5rem] font-extrabold leading-[1.05] text-primary sm:text-5xl lg:text-[3.75rem]"
              >
                Confident Smiles
                <br />
                Start Here
              </h1>
              <p
                data-hero-item
                className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
              >
                Comprehensive dental care for you and your family, delivered with compassion,
                comfort, and modern technology.
              </p>

              <div
                data-hero-item
                className="mt-8 flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center"
              >
                <Link
                  to="/book-appointment"
                  className="inline-flex min-h-13 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
                >
                  <CalendarCheck className="size-5 shrink-0" aria-hidden="true" />
                  Book an Appointment
                </Link>
                <a
                  href={clinic.contact.phoneHref}
                  className="inline-flex min-h-13 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-border bg-background px-7 py-3.5 text-base font-semibold text-primary transition-colors hover:bg-secondary"
                >
                  <Phone className="size-5 shrink-0" aria-hidden="true" />
                  Call Our Office
                </a>
              </div>

              <ul data-hero-item className="mt-9 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {clinic.trustPoints.map((point) => (
                  <li key={point} className="flex items-center gap-2.5 text-sm font-medium text-foreground">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-mint">
                      <Check className="size-3 text-mint-foreground" aria-hidden="true" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative" data-hero-visual>
              <div className="overflow-hidden rounded-[2rem] shadow-float">
                <img
                  ref={imageRef}
                  src={heroImg}
                  alt="Bright, modern dental clinic reception and treatment area with natural light"
                  width={1600}
                  height={1104}
                  fetchPriority="high"
                  className="h-full w-full scale-105 object-cover will-change-transform"
                />
              </div>

              {/* Floating appointment card */}
              <div className="surface-card relative z-10 mx-4 mt-[-2rem] p-5 shadow-float sm:mx-auto sm:max-w-sm md:absolute md:-bottom-8 md:left-8 md:m-0 md:w-72 md:max-w-none">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent-foreground">
                  Next Available
                </p>
                <p className="mt-2 font-display text-lg font-bold text-primary">Same-week openings</p>
                <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Clock className="size-4 shrink-0 text-primary" aria-hidden="true" />
                    Mon–Thu 8:00 AM – 5:00 PM
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="size-4 shrink-0 text-primary" aria-hidden="true" />
                    {clinic.address.city}, {clinic.address.state}
                  </li>
                </ul>
                <Link
                  to="/book-appointment"
                  className="mt-4 flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground"
                >
                  Request a time
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <p className="mt-3 text-[0.68rem] leading-snug text-muted-foreground">
                  Demo availability. Requests are confirmed by our team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / SOCIAL PROOF */}
      <section className="border-y border-border bg-surface py-12 md:py-14">
        <div className="container-page">
          <div className="flex flex-col items-center gap-2 text-center">
            <Stars />
            <h2 className="font-display text-xl font-bold text-primary md:text-2xl">
              Trusted Dental Care for Our Community
            </h2>
          </div>
          <dl className="mt-9 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {clinic.stats.map((s) => (
              <div key={s.label} className="surface-card px-4 py-6 text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-display text-3xl font-extrabold text-primary md:text-4xl">
                    {s.value}
                  </span>
                  <span className="mt-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
          <div className="mx-auto mt-6 max-w-2xl">
            <DemoNote>
              These figures are demo placeholders for layout purposes and are not verified
              statistics. Replace them with the practice's own confirmed numbers.
            </DemoNote>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-y" aria-labelledby="services-heading">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Services"
            title="Complete Dental Care Under One Roof"
            description="From routine cleanings to full-mouth restoration, every stage of your care happens with a team that already knows your history."
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <li key={s.slug}>
                <Reveal delay={(i % 3) * 0.07} className="h-full">
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/25 hover:shadow-lift"
                  >
                    <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <ServiceIcon name={s.icon} className="size-6" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-bold text-primary">{s.title}</h3>
                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Learn More
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border px-6 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
            >
              Explore All Services
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="The Difference"
            title="Why Patients Choose Us"
            description="A practice built around clarity, comfort and long-term relationships — not volume."
          />
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

      {/* ABOUT */}
      <section className="section-y">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="overflow-hidden rounded-[1.75rem] shadow-lift">
              <img
                src={consultImg}
                alt="Dentist explaining a treatment plan to a smiling patient in a bright treatment room"
                width={1408}
                height={1008}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="About the Clinic"
                title="Modern Dentistry. Personal Care."
                align="left"
              />
              <div className="mt-6 space-y-4 text-[0.98rem] leading-relaxed text-muted-foreground">
                <p>
                  Our practice was built on a simple idea: dentistry works best when patients
                  understand what is happening and why. We take the time to show you what we see,
                  explain your options honestly, and let you decide.
                </p>
                <p>
                  Every operatory is equipped with digital imaging and intraoral cameras, so
                  findings are shown on screen rather than described from memory. Treatment plans
                  are sequenced around your priorities, timeline and budget.
                </p>
                <p>
                  From a toddler's first exam to complex restorative work, one team handles your
                  care — and knows your history the next time you walk in.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/team"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
                >
                  Meet Our Team
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-border px-6 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
                >
                  Our Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PATIENT EXPERIENCE */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="Patient Experience"
            title="Your Comfort Comes First"
            description="Five straightforward steps, with no pressure and no surprises along the way."
          />
          <ol className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {patientJourney.map((step) => (
              <li key={step.step} className="surface-card relative p-6">
                <span className="font-display text-3xl font-extrabold text-sky">{step.step}</span>
                <h3 className="mt-2 font-display text-base font-bold text-primary">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="section-y">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading eyebrow="Technology" title="Precision Tools, Gentler Visits" align="left" />
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {technology.map((t) => (
                  <li key={t.title} className="rounded-xl border border-border bg-card p-4">
                    <h3 className="text-sm font-bold text-primary">{t.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-[1.75rem] shadow-lift lg:order-first">
              <img
                src={techImg}
                alt="Digital intraoral scanner beside a monitor displaying a 3D dental scan"
                width={1408}
                height={1008}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="Before &amp; After"
            title="Cosmetic Results That Look Like You"
            description="Placeholder gallery — replace with the practice's own consented before-and-after photography."
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {beforeAfter.map((item) => (
              <li key={item.category} className="surface-card overflow-hidden">
                <div className="grid grid-cols-2">
                  {["Before", "After"].map((label) => (
                    <div
                      key={label}
                      className="flex aspect-square flex-col items-center justify-center gap-1.5 border-b border-border bg-secondary text-center last:border-l"
                    >
                      <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary/60">
                        {label}
                      </span>
                      <span className="px-3 text-[0.68rem] text-muted-foreground">Image placeholder</span>
                    </div>
                  ))}
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-bold text-primary">{item.category}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{item.caption}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mx-auto mt-8 max-w-2xl">
            <DemoNote>{disclaimers.results}</DemoNote>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* FAQ */}
      <section className="section-y">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Common Questions"
                title="Answers Before You Call"
                description="A few of the questions we hear most often from new and returning patients."
                align="left"
              />
              <Link
                to="/faq"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border px-6 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
              >
                View all FAQs
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
            <FaqAccordion items={faqs.slice(0, 6)} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
