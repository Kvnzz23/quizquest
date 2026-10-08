import type { ReactNode } from "react";
import { Button } from "./Button";
import { Skeleton } from "./Skeleton";

interface Props {
  loading: boolean;
  error: string | null;
  isEmpty?: boolean;
  emptyText?: string;
  onRetry?: () => void;
  skeleton?: ReactNode;
  children: ReactNode;
}

export function AsyncState({
  loading,
  error,
  isEmpty,
  emptyText = "Belum ada data.",
  onRetry,
  skeleton,
  children,
}: Props) {
  if (loading) return <>{skeleton ?? <Skeleton className="h-32 w-full" />}</>;
  if (error)
    return (
      <div
        role="alert"
        className="rounded-2xl border border-red-200 bg-red-50 p-5 text-center"
      >
        <p className="mb-3 text-sm font-medium text-red-800">{error}</p>
        {onRetry && (
          <Button variant="secondary" onClick={onRetry}>
            Coba lagi
          </Button>
        )}
      </div>
    );
  if (isEmpty)
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center text-sm text-slate-700">
        {emptyText}
      </div>
    );
  return <>{children}</>;
}
