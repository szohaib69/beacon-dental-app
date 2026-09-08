import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCtaBar } from "@/components/site/MobileCtaBar";
import { Toaster } from "@/components/ui/sonner";
import { clinic } from "@/config/clinic";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-lg text-center">
        <p className="eyebrow justify-center">Error 404</p>
        <h1 className="mt-4 text-4xl font-bold text-primary md:text-5xl">This page couldn't be found</h1>
        <p className="mt-4 text-muted-foreground">
          The page you're looking for may have moved. Try our services, our team, or get in touch and
          we'll point you in the right direction.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
          >
            Go home
          </Link>
          <Link
            to="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-border px-6 text-sm font-semibold text-primary"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold text-primary">This page didn't load</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Something went wrong on our end. You can try again or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-border px-6 text-sm font-semibold text-primary"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${clinic.name} | Family & Cosmetic Dentist in Ilkley, West Yorkshire` },
      {
        name: "description",
        content:
          "Comprehensive family, cosmetic and emergency dental care in Ilkley, West Yorkshire. Accepting new patients with same-week appointments.",
      },
      { property: "og:site_name", content: clinic.name },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#152a45" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          name: clinic.name,
          description:
            "Family, cosmetic, restorative and emergency dental care. Demo website — business details are placeholders.",
          telephone: clinic.contact.phoneDisplay,
          email: clinic.contact.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: clinic.address.line1,
            addressLocality: clinic.address.city,
            addressRegion: clinic.address.state,
            postalCode: clinic.address.zip,
            addressCountry: "GB",
          },
          openingHours: ["Mo-Th 08:00-17:00", "Fr 08:00-14:00"],
          medicalSpecialty: "Dentistry",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main" className="flex-1 pb-20 lg:pb-0">
          {/* Required: nested routes render here. */}
          <Outlet />
        </main>
        <Footer />
        <MobileCtaBar />
      </div>
      <Toaster position="top-center" />
    </QueryClientProvider>
  );
}
