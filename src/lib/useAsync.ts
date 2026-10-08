"use client";
import { useCallback, useEffect, useState } from "react";

export function useAsync<T>(fn: () => Promise<T>, deps: unknown[] = []) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const run = useCallback(() => {
    setLoading(true);
    setError(null);
    fn()
      .then(setData)
      .catch((e) =>
        setError(e instanceof Error ? e.message : "Terjadi kesalahan."),
      )
      .finally(() => setLoading(false));
  }, deps);
  useEffect(() => {
    run();
  }, [run]);
  return { data, loading, error, reload: run };
}
