import type { InputHTMLAttributes } from "react";
interface Props extends InputHTMLAttributes<HTMLInputElement> { label: string; error?: string; }
export function Input({ label, error, id, ...rest }: Props) {
  const key = id ?? rest.name;
  return (
    <div>
      <label htmlFor={key} className="mb-1 block text-sm font-medium text-slate-800">{label}</label>
      <input id={key} aria-invalid={!!error} aria-describedby={error ? `${key}-err` : undefined}
        className={`min-h-[44px] w-full rounded-xl border px-3 text-sm ${error ? "border-red-600" : "border-slate-300"}`} {...rest} />
      {error && <p id={`${key}-err`} role="alert" className="mt-1 text-sm text-red-700">{error}</p>}
    </div>
  );
}
