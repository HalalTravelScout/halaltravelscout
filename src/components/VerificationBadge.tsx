import { cn } from "@/lib/utils";

export type VerificationKind = "visited" | "researched";

const STYLES: Record<VerificationKind, string> = {
  // Deep teal — "personally verified"
  visited:
    "bg-primary/10 text-primary border-primary/30",
  // Muted gold/tan — "researched from official sources"
  researched:
    "bg-accent/15 text-accent-foreground border-accent/40",
};

const LABELS: Record<VerificationKind, string> = {
  visited: "Personally visited & verified",
  researched: "Researched from official sources",
};

export function VerificationBadge({
  kind,
  label,
  className,
}: {
  kind: VerificationKind;
  label?: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        STYLES[kind],
        className,
      )}
    >
      {label ?? LABELS[kind]}
    </span>
  );
}
