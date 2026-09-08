import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { CalendarCheck, CheckCircle2, Phone, ShieldAlert, Loader2 } from "lucide-react";
import { clinic, disclaimers } from "@/config/clinic";
import { services } from "@/data/services";
import { DemoNote, PageHero } from "@/components/site/ui";

export const Route = createFileRoute("/book-appointment")({
  head: () => ({
    meta: [
      { title: `Request an Appointment | ${clinic.name} in [CITY], [STATE]` },
      {
        name: "description",
        content:
          "Request a dental appointment online in under a minute. New and existing patients welcome — our team confirms every request by phone.",
      },
      { property: "og:title", content: "Request a Dental Appointment" },
      { property: "og:description", content: "Send an appointment request and our team will call to confirm." },
      { property: "og:url", content: "/book-appointment" },
    ],
    links: [{ rel: "canonical", href: "/book-appointment" }],
  }),
  component: BookAppointment,
});

const schema = z.object({
  firstName: z.string().trim().min(1, "Please enter your first name").max(60),
  lastName: z.string().trim().min(1, "Please enter your last name").max(60),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().min(7, "Please enter a phone number we can reach you on").max(30),
  preferredDate: z.string().trim().max(30).optional().or(z.literal("")),
  preferredTime: z.string().trim().max(30).optional().or(z.literal("")),
  patientType: z.string().min(1, "Please tell us if you are a new or existing patient"),
  reason: z.string().min(1, "Please choose a reason for your visit"),
  insurance: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
  consent: z.literal(true, { errorMap: () => ({ message: "Please confirm we may contact you" }) }),
});

type Values = z.input<typeof schema>;
type Errors = Partial<Record<keyof Values, string>>;

const initial: Values = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  preferredDate: "",
  preferredTime: "",
  patientType: "",
  reason: "",
  insurance: "",
  message: "",
  consent: false as unknown as true,
};

const fieldClass =
  "min-h-12 w-full rounded-xl border border-input bg-background px-4 text-[0.95rem] text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus-visible:border-primary";

function BookAppointment() {
  const [values, setValues] = useState<Values>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const set = <K extends keyof Values>(key: K, value: Values[K]) => {
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
      document.getElementById("appointment-form")?.scrollIntoView({ block: "start" });
      return;
    }
    setStatus("submitting");
    // Demo only: no scheduling system is connected yet.
    await new Promise((r) => setTimeout(r, 700));
    setStatus("success");
    window.scrollTo({ top: 0 });
  };

  if (status === "success") {
    return (
      <section className="section-y">
        <div className="container-page max-w-2xl text-center">
          <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-mint">
            <CheckCircle2 className="size-8 text-mint-foreground" aria-hidden="true" />
          </span>
          <h1 className="mt-6 text-3xl font-bold text-primary md:text-4xl" role="status">
            Thank You — We've Received Your Request
          </h1>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Your appointment request has been received. A member of our team will contact you to
            confirm your appointment. This is a request, not a confirmed booking.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={clinic.contact.phoneHref}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="size-4" aria-hidden="true" />
              Call {clinic.contact.phoneDisplay}
            </a>
            <Link
              to="/"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-border px-6 text-sm font-semibold text-primary"
            >
              Back to home
            </Link>
          </div>
          <div className="mt-10 text-left">
            <DemoNote>
              Demo submission: no scheduling system is connected to this website yet, so this
              request was not sent anywhere. Connect a booking or email service before launch.
            </DemoNote>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Appointments"
        title="Request an Appointment"
        description="Send us your preferred day and time and our team will call to confirm. New and existing patients are always welcome."
      />

      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <form id="appointment-form" onSubmit={onSubmit} noValidate className="surface-card p-6 md:p-8">
            <h2 className="font-display text-xl font-bold text-primary">Your details</h2>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <Field label="First Name" required error={errors.firstName} id="firstName">
                <input
                  id="firstName"
                  className={fieldClass}
                  autoComplete="given-name"
                  value={values.firstName}
                  onChange={(e) => set("firstName", e.target.value)}
                  aria-invalid={!!errors.firstName}
                />
              </Field>
              <Field label="Last Name" required error={errors.lastName} id="lastName">
                <input
                  id="lastName"
                  className={fieldClass}
                  autoComplete="family-name"
                  value={values.lastName}
                  onChange={(e) => set("lastName", e.target.value)}
                  aria-invalid={!!errors.lastName}
                />
              </Field>
              <Field label="Email" required error={errors.email} id="email">
                <input
                  id="email"
                  type="email"
                  className={fieldClass}
                  autoComplete="email"
                  value={values.email}
                  onChange={(e) => set("email", e.target.value)}
                  aria-invalid={!!errors.email}
                />
              </Field>
              <Field label="Phone" required error={errors.phone} id="phone">
                <input
                  id="phone"
                  type="tel"
                  className={fieldClass}
                  autoComplete="tel"
                  value={values.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  aria-invalid={!!errors.phone}
                />
              </Field>
              <Field label="Preferred Date" id="preferredDate" error={errors.preferredDate}>
                <input
                  id="preferredDate"
                  type="date"
                  className={fieldClass}
                  value={values.preferredDate}
                  onChange={(e) => set("preferredDate", e.target.value)}
                />
              </Field>
              <Field label="Preferred Time" id="preferredTime" error={errors.preferredTime}>
                <select
                  id="preferredTime"
                  className={fieldClass}
                  value={values.preferredTime}
                  onChange={(e) => set("preferredTime", e.target.value)}
                >
                  <option value="">No preference</option>
                  <option>Early morning (8–10 AM)</option>
                  <option>Late morning (10 AM–12 PM)</option>
                  <option>Early afternoon (12–3 PM)</option>
                  <option>Late afternoon (3–5 PM)</option>
                </select>
              </Field>
              <Field label="New or Existing Patient" required error={errors.patientType} id="patientType">
                <select
                  id="patientType"
                  className={fieldClass}
                  value={values.patientType}
                  onChange={(e) => set("patientType", e.target.value)}
                  aria-invalid={!!errors.patientType}
                >
                  <option value="">Please select</option>
                  <option>New patient</option>
                  <option>Existing patient</option>
                </select>
              </Field>
              <Field label="Reason for Visit" required error={errors.reason} id="reason">
                <select
                  id="reason"
                  className={fieldClass}
                  value={values.reason}
                  onChange={(e) => set("reason", e.target.value)}
                  aria-invalid={!!errors.reason}
                >
                  <option value="">Please select</option>
                  <option>Exam and cleaning</option>
                  {services.map((s) => (
                    <option key={s.slug}>{s.title}</option>
                  ))}
                  <option>Something else</option>
                </select>
              </Field>
              <div className="sm:col-span-2">
                <Field label="Insurance Provider (optional)" id="insurance" error={errors.insurance}>
                  <input
                    id="insurance"
                    className={fieldClass}
                    placeholder="e.g. plan name, or leave blank"
                    value={values.insurance}
                    onChange={(e) => set("insurance", e.target.value)}
                  />
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field label="Message (optional)" id="message" error={errors.message}>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-xl border border-input bg-background p-4 text-[0.95rem] outline-none transition-colors placeholder:text-muted-foreground/70 focus-visible:border-primary"
                    placeholder="Anything that would help us prepare for your visit"
                    value={values.message}
                    onChange={(e) => set("message", e.target.value)}
                  />
                </Field>
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-surface p-4">
              <label className="flex cursor-pointer items-start gap-3 text-sm text-foreground">
                <input
                  type="checkbox"
                  className="mt-0.5 size-5 shrink-0 rounded border-input accent-[var(--primary)]"
                  checked={values.consent === true}
                  onChange={(e) => set("consent", e.target.checked as unknown as true)}
                  aria-invalid={!!errors.consent}
                />
                <span>I agree to be contacted regarding my appointment request.</span>
              </label>
              {errors.consent && (
                <p className="mt-2 text-sm font-medium text-destructive">{errors.consent}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-6 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-base font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 disabled:opacity-70"
            >
              {status === "submitting" ? (
                <Loader2 className="size-5 animate-spin" aria-hidden="true" />
              ) : (
                <CalendarCheck className="size-5" aria-hidden="true" />
              )}
              {status === "submitting" ? "Sending request…" : "Request Appointment"}
            </button>

            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              This is an appointment <strong>request</strong>, not a confirmed booking. A team
              member will contact you to finalize the time.
            </p>
          </form>

          <aside className="space-y-5">
            <div className="surface-card p-6">
              <h2 className="font-display text-base font-bold text-primary">Prefer to call?</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Our front desk can often find a same-week opening while you're on the phone.
              </p>
              <a
                href={clinic.contact.phoneHref}
                className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground"
              >
                <Phone className="size-4" aria-hidden="true" />
                {clinic.contact.phoneDisplay}
              </a>
            </div>

            <div className="rounded-2xl border border-destructive/25 bg-destructive/5 p-6">
              <ShieldAlert className="size-6 text-destructive" aria-hidden="true" />
              <h2 className="mt-3 font-display text-base font-bold text-primary">Dental emergency?</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Do not use this form for urgent problems. Call the office directly, and see our{" "}
                <Link to="/emergency" className="font-semibold text-primary underline">
                  emergency dental care page
                </Link>
                .
              </p>
            </div>

            <div className="surface-card p-6">
              <h2 className="font-display text-base font-bold text-primary">Office hours</h2>
              <dl className="mt-3 space-y-2 text-sm">
                {clinic.hours.map((h) => (
                  <div key={h.day} className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">{h.day}</dt>
                    <dd className="font-medium text-foreground">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <DemoNote>{disclaimers.medicalInfo}</DemoNote>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  id,
  required,
  error,
  children,
}: {
  label: string;
  id: string;
  required?: boolean | undefined;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-foreground">
        {label}
        {required && (
          <span className="ml-1 text-destructive" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-sm font-medium text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
