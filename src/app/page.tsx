import {
  BarChart3,
  CheckCircle2,
  Flame,
  Gamepad2,
  ListChecks,
  MousePointerClick,
  Timer,
  Trophy,
  Zap,
  Code2,
  Database,
  Network,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Footer } from "@/components/layout/Footer";
import { LandingNavbar } from "@/components/layout/LandingNavbar";

const stats = [
  { value: "20+", label: "Topik kuis" },
  { value: "500+", label: "Soal latihan" },
  { value: "10 mnt", label: "Rata-rata per kuis" },
  { value: "Gratis", label: "Untuk mulai belajar" },
];

const values = [
  {
    icon: Zap,
    title: "Sederhana",
    text: "Pilih topik, jawab soal, langsung dapat pembahasan.",
  },
  {
    icon: Timer,
    title: "Cepat",
    text: "Satu kuis selesai dalam hitungan menit.",
  },
  {
    icon: Gamepad2,
    title: "Gamifikasi",
    text: "Kumpulkan XP, jaga streak, dan naik peringkat.",
  },
];

const steps = [
  {
    icon: MousePointerClick,
    title: "Pilih topik",
    text: "Telusuri topik pemrograman, basis data, jaringan, atau rekayasa software.",
  },
  {
    icon: ListChecks,
    title: "Jawab soal",
    text: "Kerjakan soal pilihan ganda dan lihat pembahasan setelah setiap jawaban.",
  },
  {
    icon: Trophy,
    title: "Kumpulkan XP",
    text: "Dapatkan XP, naik level, dan bersaing di papan peringkat.",
  },
];

const features = [
  {
    icon: CheckCircle2,
    title: "Misi harian",
    text: "Selesaikan target harian dan klaim reward XP tambahan.",
  },
  {
    icon: Flame,
    title: "Streak belajar",
    text: "Belajar setiap hari untuk menjaga api streak tetap menyala.",
  },
  {
    icon: Trophy,
    title: "Papan peringkat",
    text: "Bandingkan XP-mu dengan pengguna lain, mingguan maupun keseluruhan.",
  },
  {
    icon: BarChart3,
    title: "Riwayat & analitik",
    text: "Pantau akurasi jawabanmu dari waktu ke waktu.",
  },
];

const topics = [
  {
    icon: Code2,
    title: "Pemrograman",
    text: "JavaScript, TypeScript, dan logika dasar.",
  },
  { icon: Database, title: "Basis Data", text: "SQL, JOIN, dan normalisasi." },
  { icon: Network, title: "Jaringan", text: "Model TCP/IP, port, dan DNS." },
  {
    icon: RefreshCw,
    title: "Rekayasa Software",
    text: "Agile, Scrum, dan siklus pengembangan.",
  },
];

const testimonials = [
  {
    name: "Kevin",
    role: "Mahasiswa Software Engineer",
    text: "Streak bikin aku jadi rajin latihan soal tiap hari. Pembahasannya juga jelas.",
  },
  {
    name: "Budi",
    role: "Calon Software Engineer",
    text: "Kuis SQL-nya pas untuk persiapan wawancara. Satu kuis cuma sebentar.",
  },
  {
    name: "Citra",
    role: "Siswa SMK RPL",
    text: "Belajar jadi terasa seperti main game. Seru lihat peringkat naik tiap minggu.",
  },
];

const faqs = [
  {
    q: "Apakah QuizQuest gratis?",
    a: "Ya. Kamu bisa membuat akun dan mengerjakan kuis tanpa biaya.",
  },
  {
    q: "Berapa lama satu kuis?",
    a: "Rata-rata sekitar 10 menit, jadi mudah diselipkan di sela aktivitas.",
  },
  {
    q: "Bagaimana XP dan level bekerja?",
    a: "Setiap jawaban benar memberi XP. Semakin banyak XP, semakin tinggi levelmu.",
  },
  {
    q: "Apa yang terjadi jika streak terputus?",
    a: "Streak kembali ke nol. Kerjakan minimal satu kuis per hari untuk menjaganya.",
  },
  {
    q: "Bisakah dipakai di HP?",
    a: "Bisa. Tampilan dirancang mobile-first dan nyaman dipakai dengan satu tangan.",
  },
];

export default function Landing() {
  return (
    <>
      <LandingNavbar />
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-4 py-16 text-center md:py-24">
          <h1 className="text-4xl font-extrabold md:text-6xl">
            Naik level setiap kali kamu belajar.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-slate-700">
            QuizQuest mengubah latihan soal pemrograman, database, dan jaringan
            menjadi misi harian yang seru.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/register">Mulai Belajar</Button>
            <Button href="/dashboard" variant="secondary">
              Coba Demo
            </Button>
          </div>
        </section>

        {/* Statistik */}
        <section
          aria-label="Statistik"
          className="border-y border-slate-200 bg-white"
        >
          <dl className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-4 py-8 text-center md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dd className="text-3xl font-extrabold text-indigo-700">
                  {s.value}
                </dd>
                <dt className="text-sm text-slate-700">{s.label}</dt>
              </div>
            ))}
          </dl>
        </section>

        {/* Keunggulan */}
        <section
          id="keunggulan"
          className="mx-auto max-w-5xl scroll-mt-20 px-4 py-16"
          aria-label="Keunggulan"
        >
          <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">
            Kenapa QuizQuest?
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {values.map(({ icon: Icon, title, text }) => (
              <Card key={title}>
                <Icon className="mb-2 text-indigo-600" aria-hidden />
                <h3 className="font-bold">{title}</h3>
                <p className="text-sm text-slate-700">{text}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Cara Kerja */}
        <section
          id="cara-kerja"
          className="scroll-mt-20 bg-indigo-50 py-16"
          aria-label="Cara kerja"
        >
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">
              Cara kerja
            </h2>
            <ol className="grid gap-4 md:grid-cols-3">
              {steps.map(({ icon: Icon, title, text }, i) => (
                <li key={title} className="rounded-2xl bg-white p-5">
                  <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="flex items-center gap-2 font-bold">
                    <Icon size={18} className="text-indigo-600" aria-hidden />
                    {title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-700">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Fitur */}
        <section
          id="fitur"
          className="mx-auto max-w-5xl scroll-mt-20 px-4 py-16"
          aria-label="Fitur"
        >
          <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">
            Fitur yang kamu dapat
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map(({ icon: Icon, title, text }) => (
              <Card key={title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                  <Icon aria-hidden />
                </span>
                <div>
                  <h3 className="font-bold">{title}</h3>
                  <p className="text-sm text-slate-700">{text}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Topik */}
        <section
          id="topik"
          className="scroll-mt-20 bg-white py-16"
          aria-label="Topik kuis"
        >
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">
              Topik yang bisa kamu pelajari
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {topics.map(({ icon: Icon, title, text }) => (
                <Card
                  key={title}
                  className="flex flex-col items-center p-6 text-center"
                > 
                  <div
                    className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600"
                    aria-hidden
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-3 font-bold">{title}</h3>
                  <p className="mt-1 text-sm text-slate-700">{text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimoni */}
        <section
          id="testimoni"
          className="mx-auto max-w-5xl scroll-mt-20 px-4 py-16"
          aria-label="Testimoni"
        >
          <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">
            Testimonial
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name}>
                <blockquote className="text-sm">“{t.text}”</blockquote>
                <p className="mt-3 font-bold">{t.name}</p>
                <p className="text-xs text-slate-700">{t.role}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="scroll-mt-20 bg-white py-16"
          aria-label="Pertanyaan umum"
        >
          <div className="mx-auto max-w-2xl px-4">
            <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl">
              Pertanyaan umum
            </h2>
            <div className="space-y-2">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-xl border border-slate-200 p-4"
                >
                  <summary className="flex min-h-[44px] cursor-pointer items-center justify-between font-semibold">
                    {f.q}
                    <span 
                      aria-hidden
                      className="ml-3 text-indigo-600 transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="pb-2 text-sm text-slate-700">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA akhir */}
        <section
          className="mx-auto max-w-5xl px-4 py-16"
          aria-label="Ajakan bergabung"
        >
          <div className="rounded-3xl bg-indigo-700 px-6 py-12 text-center text-white">
            <h2 className="text-2xl font-extrabold md:text-4xl">
              Siap mulai petualangan belajarmu?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-indigo-100">
              Buat akun gratis dan selesaikan kuis pertamamu hari ini.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                href="/register"
                className="!bg-white !text-indigo-700 hover:!bg-indigo-50"
              >
                Mulai Belajar
              </Button>
              <Button
                href="/dashboard"
                variant="ghost"
                className="!text-white hover:!bg-indigo-600"
              >
                Coba Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
