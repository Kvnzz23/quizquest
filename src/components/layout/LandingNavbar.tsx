"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const links = [
  { href: "#keunggulan", label: "Keunggulan" },
  { href: "#cara-kerja", label: "Cara Kerja" },
  { href: "#fitur", label: "Fitur" },
  { href: "#topik", label: "Topik" },
  { href: "#faq", label: "FAQ" },
];

export function LandingNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4"
      >
        <Link href="/" className="text-xl font-extrabold text-indigo-700">
          QuizQuest
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="flex min-h-[44px] items-center rounded-xl px-4 text-sm font-medium text-slate-800 hover:bg-slate-100"
            >
              {l.label}
            </a>
          ))}
          <Button href="/login" variant="ghost">
            Masuk
          </Button>
          <Button href="/register">Mulai Belajar</Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-11 w-11 items-center justify-center rounded-xl hover:bg-slate-100 md:hidden"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-slate-200 bg-white px-4 pb-4 md:hidden"
        >
          <div className="flex flex-col gap-1 pt-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[44px] items-center rounded-xl px-3 text-sm font-medium text-slate-800 hover:bg-slate-100"
              >
                {l.label}
              </a>
            ))}
            <Button href="/login" variant="secondary" className="mt-2">
              Masuk
            </Button>
            <Button href="/register">Mulai Belajar</Button>
          </div>
        </div>
      )}
    </header>
  );
}
