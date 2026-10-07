"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { login, register } from "@/lib/services/userService";
import { Button } from "./Button";
import { Card } from "./Card";
import { Input } from "./Input";

export function AuthForm({ mode }: { mode: "login" | "register" }) {
  const router = useRouter();
  const isReg = mode === "register";
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") ?? "").trim();
    const email = String(f.get("email") ?? "").trim();
    const password = String(f.get("password") ?? "");
    const err: Record<string, string> = {};
    if (isReg && name.length < 2) err.name = "Nama minimal 2 karakter.";
    if (!/^\S+@\S+\.\S+$/.test(email))
      err.email = "Format email tidak valid, contoh: nama@email.com.";
    if (password.length < 6) err.password = "Kata sandi minimal 6 karakter.";
    setErrors(err);
    if (Object.keys(err).length) return;
    setLoading(true);
    try {
      if (isReg) await register(name, email, password);
      else await login(email, password);
      router.push("/dashboard");
    } catch (ex) {
      setErrors({ form: ex instanceof Error ? ex.message : "Gagal masuk." });
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-sm">
        <Link href="/" className="text-xl font-extrabold text-indigo-700">
          QuizQuest
        </Link>
        <h1 className="mb-4 mt-2 text-2xl font-bold">
          {isReg ? "Buat akun" : "Masuk"}
        </h1>
        <form onSubmit={onSubmit} noValidate className="space-y-3">
          {isReg && (
            <Input
              label="Nama"
              name="name"
              autoComplete="name"
              error={errors.name}
            />
          )}
          <Input
            label="Email"
            name="email"
            type="email"
            autoComplete="email"
            error={errors.email}
          />
          <Input
            label="Kata sandi"
            name="password"
            type="password"
            autoComplete={isReg ? "new-password" : "current-password"}
            error={errors.password}
          />
          {errors.form && (
            <p role="alert" className="text-sm text-red-700">
              {errors.form}
            </p>
          )}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Memproses..." : isReg ? "Daftar" : "Masuk"}
          </Button>
        </form>
        <p className="mt-4 text-center text-sm text-slate-700">
          {isReg ? "Sudah punya akun?" : "Belum punya akun?"}{" "}
          <Link
            className="font-semibold text-indigo-700 underline"
            href={isReg ? "/login" : "/register"}
          >
            {isReg ? "Masuk" : "Daftar"}
          </Link>
        </p>
      </Card>
    </main>
  );
}
