import { clinic } from "@/config/clinic";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        className={
          inverted
            ? "flex size-10 items-center justify-center rounded-xl bg-primary-foreground/10 ring-1 ring-primary-foreground/20"
            : "flex size-10 items-center justify-center rounded-xl navy-gradient shadow-soft"
        }
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none">
          <path
            d="M12 5.2c1.7-1.4 3.6-2 5.2-1.3 2.1.9 3 3.4 2.5 6.3-.4 2.3-1.2 4.3-1.9 6.4-.5 1.5-1 3.4-2.3 3.4-1.2 0-1.6-1.6-2-3.2-.3-1.3-.7-2.4-1.5-2.4s-1.2 1.1-1.5 2.4c-.4 1.6-.8 3.2-2 3.2-1.3 0-1.8-1.9-2.3-3.4-.7-2.1-1.5-4.1-1.9-6.4-.5-2.9.4-5.4 2.5-6.3C8.4 3.2 10.3 3.8 12 5.2Z"
            fill="white"
            fillOpacity="0.95"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.02rem] font-bold tracking-tight ${inverted ? "text-primary-foreground" : "text-primary"}`}
        >
          {clinic.name}
        </span>
        <span
          className={`mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] ${inverted ? "text-primary-foreground/60" : "text-muted-foreground"}`}
        >
          Family &amp; Cosmetic Dentistry
        </span>
      </span>
    </span>
  );
}
