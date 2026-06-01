interface SectionLabelProps {
  label: string;
}

export function SectionLabel({ label }: SectionLabelProps) {
  return (
    <div className="section-label">
      <span className="section-label__line" aria-hidden="true" />
      <p className="section-label__text">{label}</p>
    </div>
  );
}
