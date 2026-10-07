import type { HTMLAttributes } from "react";
export function Card({ className = "", ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`rounded-2xl border border-slate-200 bg-white p-4 md:p-5 ${className}`} {...rest} />;
}
