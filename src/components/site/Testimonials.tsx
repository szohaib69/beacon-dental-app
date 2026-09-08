import { Link } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/data/content";
import { disclaimers } from "@/config/clinic";
import { SectionHeading, DemoNote } from "./ui";

export function Testimonials() {
  return (
    <section className="section-y bg-surface" aria-labelledby="testimonials-heading">
      <div className="container-page">
        <SectionHeading
          eyebrow="Patient Stories"
          title="What Our Patients Say"
          description="Demo testimonials shown here to illustrate layout. Replace them with real, permissioned patient feedback."
        />

        <div id="testimonials-heading" className="sr-only">
          Patient testimonials
        </div>

        <Carousel opts={{ align: "start", loop: true }} className="mt-12">
          <CarouselContent className="-ml-4">
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                <figure className="surface-card flex h-full flex-col p-6">
                  <Quote className="size-7 text-accent" aria-hidden="true" />
                  <blockquote className="mt-4 flex-1 text-[0.98rem] leading-relaxed text-foreground">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-border pt-4">
                    <span className="block text-sm font-semibold text-primary">— {t.name}</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">{t.detail}</span>
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex justify-center gap-3">
            <CarouselPrevious className="static size-11 translate-y-0" />
            <CarouselNext className="static size-11 translate-y-0" />
          </div>
        </Carousel>

        <div className="mt-10 flex flex-col items-center gap-5">
          <Link
            to="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-background px-6 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
          >
            See More Patient Reviews
          </Link>
          <div className="max-w-2xl">
            <DemoNote>{disclaimers.testimonials}</DemoNote>
          </div>
        </div>
      </div>
    </section>
  );
}
