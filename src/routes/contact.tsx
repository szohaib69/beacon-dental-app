import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, Car, Navigation, Send, CheckCircle2, Loader2 } from "lucide-react";
import { clinic, disclaimers } from "@/config/clinic";
import { DemoNote, PageHero } from "@/components/site/ui";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact Our Dental Office in Ilkley, West Yorkshire | ${clinic.name}` },
      {
        name: "description",
        content:
          "Get in touch with our Ilkley, West Yorkshire dental office — address, phone, email, opening hours, parking and directions.",
      },
      { property: "og:title", content: `Contact ${clinic.name}` },
      { property: "og:description", content: "Address, phone, hours and directions to our dental office." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  subject: z.string().trim().min(1, "Please add a subject").max(120),
  message: z.string().trim().min(1, "Please write a short message").max(1000),
});

type Values = z.infer<typeof schema>;
type Errors = Partial<Record<keyof Values, string>>;

const fieldClass =
  "min-h-12 w-full rounded-xl border border-input bg-background px-4 text-[0.95rem] outline-none transition-colors focus-visible:border-primary";

function Contact() {
  const [values, setValues] = useState<Values>({ name: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const set = (key: keyof Values, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) next[issue.path[0] as keyof Values] = issue.message;
      setErrors(next);
      return;
    }
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 600));
    setStatus("success");
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get In Touch"
        description="Questions about a treatment, your bill or your next visit? Call us, email us, or send a message and we'll get back to you."
      />

      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <div className="surface-card p-6">
              <h2 className="font-display text-xl font-bold text-primary">{clinic.name}</h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-accent-foreground" aria-hidden="true" />
                  <span className="text-muted-foreground">
                    {clinic.address.line1}
                    <br />
                    {clinic.address.line2}
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-5 shrink-0 text-accent-foreground" aria-hidden="true" />
                  <a href={clinic.contact.phoneHref} className="font-semibold text-primary hover:underline">
                    {clinic.contact.phoneDisplay}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0 text-accent-foreground" aria-hidden="true" />
                  <a href={clinic.contact.emailHref} className="font-semibold text-primary hover:underline">
                    {clinic.contact.email}
                  </a>
                </li>
              </ul>
              <a
                href={clinic.address.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex min-h-12 items-center justify-center gap-2 rounded-full border border-border text-sm font-semibold text-primary transition-colors hover:bg-secondary"
              >
                <Navigation className="size-4" aria-hidden="true" />
                Get Directions
              </a>
            </div>

            <div className="surface-card p-6">
              <h2 className="flex items-center gap-2 font-display text-base font-bold text-primary">
                <Clock className="size-5 text-accent-foreground" aria-hidden="true" />
                Opening hours
              </h2>
              <dl className="mt-4 space-y-2 text-sm">
                {clinic.hours.map((h) => (
                  <div key={h.day} className="flex justify-between gap-4 border-b border-border pb-2 last:border-0">
                    <dt className="text-muted-foreground">{h.day}</dt>
                    <dd className="font-medium text-foreground">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="surface-card p-6">
              <h2 className="flex items-center gap-2 font-display text-base font-bold text-primary">
                <Car className="size-5 text-accent-foreground" aria-hidden="true" />
                Parking &amp; directions
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{clinic.address.parking}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{clinic.address.directions}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div
              className="flex aspect-[16/10] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border bg-secondary text-center"
              role="img"
              aria-label="Map placeholder — the clinic's real Google Maps location will appear here"
            >
              <MapPin className="size-8 text-primary/50" aria-hidden="true" />
              <p className="font-display text-base font-bold text-primary">Google Maps placeholder</p>
              <p className="max-w-xs px-6 text-xs text-muted-foreground">{clinic.address.mapEmbedNote}</p>
            </div>

            {status === "success" ? (
              <div className="surface-card p-8 text-center">
                <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-mint">
                  <CheckCircle2 className="size-7 text-mint-foreground" aria-hidden="true" />
                </span>
                <h2 className="mt-5 font-display text-xl font-bold text-primary" role="status">
                  Message received
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Thanks for reaching out. A team member will respond during office hours. For
                  anything urgent, please call {clinic.contact.phoneDisplay}.
                </p>
                <div className="mt-6 text-left">
                  <DemoNote>
                    Demo submission: no email service is connected yet, so this message was not
                    delivered anywhere.
                  </DemoNote>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="surface-card p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-primary">Send us a message</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  General questions only. To book, use the{" "}
                  <Link to="/book-appointment" className="font-semibold text-primary underline">
                    appointment request form
                  </Link>
                  .
                </p>

                <div className="mt-6 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="c-name" className="mb-2 block text-sm font-semibold">
                        Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="c-name"
                        className={fieldClass}
                        autoComplete="name"
                        value={values.name}
                        onChange={(e) => set("name", e.target.value)}
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && <p className="mt-1.5 text-sm text-destructive" role="alert">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="c-email" className="mb-2 block text-sm font-semibold">
                        Email <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="c-email"
                        type="email"
                        className={fieldClass}
                        autoComplete="email"
                        value={values.email}
                        onChange={(e) => set("email", e.target.value)}
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && <p className="mt-1.5 text-sm text-destructive" role="alert">{errors.email}</p>}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="c-phone" className="mb-2 block text-sm font-semibold">
                      Phone (optional)
                    </label>
                    <input
                      id="c-phone"
                      type="tel"
                      className={fieldClass}
                      autoComplete="tel"
                      value={values.phone}
                      onChange={(e) => set("phone", e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="c-subject" className="mb-2 block text-sm font-semibold">
                      Subject <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="c-subject"
                      className={fieldClass}
                      value={values.subject}
                      onChange={(e) => set("subject", e.target.value)}
                      aria-invalid={!!errors.subject}
                    />
                    {errors.subject && <p className="mt-1.5 text-sm text-destructive" role="alert">{errors.subject}</p>}
                  </div>
                  <div>
                    <label htmlFor="c-message" className="mb-2 block text-sm font-semibold">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="c-message"
                      rows={5}
                      className="w-full rounded-xl border border-input bg-background p-4 text-[0.95rem] outline-none focus-visible:border-primary"
                      value={values.message}
                      onChange={(e) => set("message", e.target.value)}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && <p className="mt-1.5 text-sm text-destructive" role="alert">{errors.message}</p>}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-6 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-base font-semibold text-primary-foreground disabled:opacity-70"
                >
                  {status === "submitting" ? (
                    <Loader2 className="size-5 animate-spin" aria-hidden="true" />
                  ) : (
                    <Send className="size-5" aria-hidden="true" />
                  )}
                  {status === "submitting" ? "Sending…" : "Send Message"}
                </button>

                <div className="mt-5">
                  <DemoNote>{disclaimers.medicalInfo}</DemoNote>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
