import type { Achievement, ActivityLog, DailyQuest, LeaderboardUser, Question, QuizTopic, User } from "@/types";

export const CATEGORIES = ["All", "Pemrograman", "Basis Data", "Jaringan", "Rekayasa Software"] as const;

export const currentUser: User = { id: "u1", name: "Kevin", email: "kevin@quizquest.id", avatar: "🧑‍💻", xp: 1280, streak: 7, accuracyRate: 84, level: 5, completedQuizzesCount: 12 };

export const topics: QuizTopic[] = [
  { id: "js-dasar", title: "JavaScript Dasar", description: "Variabel, fungsi, dan tipe data inti JavaScript.", category: "Pemrograman", totalQuestions: 3, difficulty: "Easy", icon: "🟨", isCompleted: true },
  { id: "ts-lanjut", title: "TypeScript Lanjutan", description: "Generics, utility types, dan type narrowing.", category: "Pemrograman", totalQuestions: 3, difficulty: "Hard", icon: "🔷", isCompleted: false },
  { id: "sql-join", title: "SQL & JOIN", description: "Query dasar, JOIN, dan agregasi data.", category: "Basis Data", totalQuestions: 3, difficulty: "Medium", icon: "🗄️", isCompleted: false },
  { id: "normalisasi", title: "Normalisasi Database", description: "1NF sampai 3NF dengan contoh kasus.", category: "Basis Data", totalQuestions: 3, difficulty: "Medium", icon: "📐", isCompleted: true },
  { id: "tcp-ip", title: "Model TCP/IP", description: "Lapisan jaringan, protokol, dan pengalamatan.", category: "Jaringan", totalQuestions: 3, difficulty: "Easy", icon: "🌐", isCompleted: false },
  { id: "agile", title: "Agile & Scrum", description: "Peran, event, dan artefak dalam Scrum.", category: "Rekayasa Software", totalQuestions: 3, difficulty: "Easy", icon: "🔁", isCompleted: false },
];

const bank: Record<string, Omit<Question, "id" | "topicId">[]> = {
  Pemrograman: [
    { questionText: "Kata kunci mana yang mendeklarasikan variabel yang tidak dapat di-reassign?", options: ["var", "let", "const", "static"], correctAnswerIndex: 2, explanation: "`const` mencegah reassignment pada variabel setelah dideklarasikan." },
    { questionText: "Hasil dari typeof null di JavaScript adalah?", options: ["'null'", "'object'", "'undefined'", "'number'"], correctAnswerIndex: 1, explanation: "Ini bug historis JavaScript: typeof null mengembalikan 'object'." },
    { questionText: "Method array mana yang mengembalikan array baru hasil transformasi?", options: ["forEach", "map", "push", "splice"], correctAnswerIndex: 1, explanation: "`map` mengembalikan array baru tanpa mengubah array asal." },
  ],
  "Basis Data": [
    { questionText: "JOIN mana yang hanya mengembalikan baris yang cocok di kedua tabel?", options: ["LEFT JOIN", "INNER JOIN", "FULL JOIN", "CROSS JOIN"], correctAnswerIndex: 1, explanation: "INNER JOIN hanya mengambil baris dengan kecocokan di kedua tabel." },
    { questionText: "Perintah untuk mengelompokkan hasil query adalah?", options: ["ORDER BY", "WHERE", "GROUP BY", "LIMIT"], correctAnswerIndex: 2, explanation: "GROUP BY mengelompokkan baris, biasanya bersama fungsi agregat." },
    { questionText: "Bentuk normal pertama (1NF) mensyaratkan?", options: ["Tidak ada dependensi transitif", "Nilai atomik di setiap kolom", "Semua tabel punya foreign key", "Tidak ada primary key"], correctAnswerIndex: 1, explanation: "1NF mengharuskan setiap kolom berisi nilai atomik (tidak berulang)." },
  ],
  Jaringan: [
    { questionText: "Protokol mana yang bekerja di lapisan transport?", options: ["HTTP", "IP", "TCP", "Ethernet"], correctAnswerIndex: 2, explanation: "TCP dan UDP berada di lapisan transport." },
    { questionText: "Port default HTTPS adalah?", options: ["80", "21", "443", "8080"], correctAnswerIndex: 2, explanation: "HTTPS menggunakan port 443 secara default." },
    { questionText: "Fungsi utama DNS adalah?", options: ["Enkripsi data", "Menerjemahkan nama domain ke IP", "Membagi bandwidth", "Memblokir iklan"], correctAnswerIndex: 1, explanation: "DNS memetakan nama domain menjadi alamat IP." },
  ],
  "Rekayasa Software": [
    { questionText: "Siapa yang bertanggung jawab atas Product Backlog di Scrum?", options: ["Scrum Master", "Developer", "Product Owner", "Stakeholder"], correctAnswerIndex: 2, explanation: "Product Owner mengelola dan memprioritaskan Product Backlog." },
    { questionText: "Durasi maksimal Sprint dalam Scrum adalah?", options: ["1 minggu", "2 minggu", "1 bulan", "3 bulan"], correctAnswerIndex: 2, explanation: "Sprint berdurasi maksimal satu bulan." },
    { questionText: "Event untuk refleksi proses tim di akhir Sprint adalah?", options: ["Daily Scrum", "Sprint Review", "Retrospective", "Planning"], correctAnswerIndex: 2, explanation: "Sprint Retrospective membahas perbaikan proses tim." },
  ],
};

export const questions: Question[] = topics.flatMap((t) =>
  (bank[t.category] ?? []).map((q, i) => ({ ...q, id: `${t.id}-q${i + 1}`, topicId: t.id }))
);

export const dailyQuests: DailyQuest[] = [
  { id: "d1", title: "Selesaikan 3 kuis hari ini", target: 3, current: 2, rewardXp: 50, isClaimed: false },
  { id: "d2", title: "Raih akurasi di atas 80%", target: 1, current: 1, rewardXp: 30, isClaimed: false },
  { id: "d3", title: "Jaga streak belajar", target: 1, current: 1, rewardXp: 20, isClaimed: true },
];

export const activities: ActivityLog[] = [
  { id: "a1", topicTitle: "JavaScript Dasar", score: 3, totalQuestions: 3, xpEarned: 30, date: "6 Okt 2026" },
  { id: "a2", topicTitle: "Normalisasi Database", score: 2, totalQuestions: 3, xpEarned: 20, date: "5 Okt 2026" },
  { id: "a3", topicTitle: "SQL & JOIN", score: 3, totalQuestions: 3, xpEarned: 30, date: "4 Okt 2026" },
  { id: "a4", topicTitle: "Model TCP/IP", score: 1, totalQuestions: 3, xpEarned: 10, date: "2 Okt 2026" },
];

export const leaderboardWeekly: LeaderboardUser[] = [
  { rank: 1, name: "Herman", xp: 940, avatar: "👩‍🎓", isCurrentUser: false },
  { rank: 2, name: "Kevin", xp: 860, avatar: "🧑‍💻", isCurrentUser: true },
  { rank: 3, name: "Budi", xp: 720, avatar: "🧔", isCurrentUser: false },
  { rank: 4, name: "Citra", xp: 640, avatar: "👩‍💻", isCurrentUser: false },
  { rank: 5, name: "Dimas", xp: 510, avatar: "🧑‍🔬", isCurrentUser: false },
];
export const leaderboardAllTime: LeaderboardUser[] = [
  { rank: 1, name: "Alya", xp: 4120, avatar: "👩‍🎓", isCurrentUser: false },
  { rank: 2, name: "Budi", xp: 3380, avatar: "🧔", isCurrentUser: false },
  { rank: 3, name: "Citra", xp: 2910, avatar: "👩‍💻", isCurrentUser: false },
  { rank: 4, name: "Dimas", xp: 1710, avatar: "🧑‍🔬", isCurrentUser: false },
  { rank: 5, name: "Kevin", xp: 1280, avatar: "🧑‍💻", isCurrentUser: true },
];

export const achievements: Achievement[] = [
  { id: "ac1", title: "Langkah Pertama", description: "Selesaikan kuis pertama", unlocked: true },
  { id: "ac2", title: "Api Menyala", description: "Streak 7 hari", unlocked: true },
  { id: "ac3", title: "Tajam", description: "Akurasi 80% atau lebih", unlocked: true },
  { id: "ac4", title: "Kolektor XP", description: "Capai 5.000 XP", unlocked: false },
];