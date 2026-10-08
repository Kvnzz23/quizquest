import type { Difficulty } from "@/types";
const tone: Record<Difficulty, string> = {
  Easy: "bg-emerald-100 text-emerald-800",
  Medium: "bg-amber-100 text-amber-900",
  Hard: "bg-red-100 text-red-800",
};
export function Badge({
  children,
  className = "bg-indigo-100 text-indigo-800",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${className}`}
    >
      {children}
    </span>
  );
}
export function DifficultyBadge({ level }: { level: Difficulty }) {
  return <Badge className={tone[level]}>{level}</Badge>;
}
