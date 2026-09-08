export type Section = { heading: string; paragraphs: string[] };

export function LegalBody({ sections }: { sections: Section[] }) {
  return (
    <div className="mt-10 space-y-9">
      {sections.map((s) => (
        <section key={s.heading}>
          <h2 className="font-display text-xl font-bold text-primary">{s.heading}</h2>
          <div className="mt-3 space-y-3 leading-relaxed text-muted-foreground">
            {s.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
