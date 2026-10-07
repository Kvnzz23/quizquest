"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HelpCircle, LogOut } from "lucide-react";
import { NAV_ITEMS } from "@/lib/nav";

export function Sidebar() {
  const path = usePathname();
  return (
    <aside className="fixed inset-y-0 left-0 hidden w-64 flex-col border-r border-slate-200 bg-white p-4 md:flex">
      <Link href="/dashboard" className="mb-4 text-2xl font-extrabold text-indigo-700">QuizQuest</Link>
      <nav aria-label="Menu utama" className="flex-1 space-y-1">
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const active = path === href || (href !== "/dashboard" && path.startsWith(href));
          return (
            <Link key={href} href={href} aria-current={active ? "page" : undefined}
              className={`flex min-h-[44px] items-center gap-3 rounded-xl px-3 text-sm ${active ? "bg-indigo-600 font-bold text-white" : "text-slate-700 hover:bg-slate-100"}`}>
              <Icon size={20} aria-hidden /> {label}
            </Link>
          );
        })}
      </nav>
      <div className="space-y-1 border-t border-slate-200 pt-3">
        <Link href="/" className="flex min-h-[44px] items-center gap-3 rounded-xl px-3 text-sm text-slate-700 hover:bg-slate-100"><HelpCircle size={20} aria-hidden /> Bantuan</Link>
        <Link href="/login" className="flex min-h-[44px] items-center gap-3 rounded-xl px-3 text-sm text-slate-700 hover:bg-slate-100"><LogOut size={20} aria-hidden /> Logout</Link>
      </div>
    </aside>
  );
}
