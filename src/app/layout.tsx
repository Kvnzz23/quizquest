import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "QuizQuest", description: "Belajar jadi permainan dengan kuis, XP, dan streak." };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="id"><body>{children}</body></html>);
}
