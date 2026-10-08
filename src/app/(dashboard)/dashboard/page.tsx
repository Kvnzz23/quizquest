"use client";
import Link from "next/link";
import { useState } from "react";
import { CATEGORIES } from "@/lib/dummyData";
import { getTopics } from "@/lib/services/quizService";
import { getActivities, getCurrentUser, getDailyQuests, getLeaderboard } from "@/lib/services/userService";
import { useAsync } from "@/lib/useAsync";
import { AsyncState } from "@/components/ui/AsyncState";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";
import { DailyQuestCard } from "@/components/quiz/DailyQuestCard";
import { TopicCard } from "@/components/quiz/TopicCard";

export default function DashboardPage() {
  const [category, setCategory] = useState("All");
  const user = useAsync(getCurrentUser);
  const quests = useAsync(getDailyQuests);
  const topics = useAsync(() => getTopics({ category }), [category]);
  const allTopics = useAsync(() => getTopics());
  const acts = useAsync(getActivities);
  const board = useAsync(() => getLeaderboard("weekly"));
  const resume = allTopics.data?.find((t) => !t.isCompleted);

  return (
    <div className="space-y-6">
      <AsyncState loading={user.loading} error={user.error} onRetry={user.reload} skeleton={<Skeleton className="h-10 w-64" />}>
        <h1 className="text-2xl font-bold md:text-3xl">Halo, {user.data?.name}! 👋</h1>
      </AsyncState>

      <AsyncState loading={user.loading} error={user.error} skeleton={<div className="grid grid-cols-3 gap-3"><Skeleton className="h-24" /><Skeleton className="h-24" /><Skeleton className="h-24" /></div>}>
        {user.data && (
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            <Card><p className="text-xs text-slate-700">XP</p><p className="text-lg font-extrabold text-amber-700 md:text-2xl">⚡ {user.data.xp.toLocaleString("id-ID")}</p></Card>
            <Card><p className="text-xs text-slate-700">Streak</p><p className="text-lg font-extrabold md:text-2xl">🔥 {user.data.streak} Hari</p></Card>
            <Card><p className="text-xs text-slate-700">Akurasi</p><p className="text-lg font-extrabold md:text-2xl">🎯 {user.data.accuracyRate}%</p></Card>
          </div>
        )}
      </AsyncState>

      <div className="grid gap-4 lg:grid-cols-2">
        <AsyncState loading={quests.loading} error={quests.error} onRetry={quests.reload} isEmpty={!quests.data?.length}>
          {quests.data && <DailyQuestCard quests={quests.data} />}
        </AsyncState>
        <Card>
          <h2 className="mb-2 text-lg font-bold">Lanjutkan Belajar</h2>
          <AsyncState loading={allTopics.loading} error={allTopics.error} onRetry={allTopics.reload} isEmpty={!resume} emptyText="Semua topik sudah selesai. Hebat!">
            {resume && (
              <div className="flex items-center gap-3">
                <span className="text-3xl" aria-hidden>{resume.icon}</span>
                <div className="flex-1"><p className="font-semibold">{resume.title}</p><p className="text-sm text-slate-700">{resume.totalQuestions} soal</p></div>
                <Button href={`/quiz/${resume.id}`}>Lanjutkan</Button>
              </div>
            )}
          </AsyncState>
        </Card>
      </div>

      <section>
        <h2 className="mb-3 text-lg font-bold">Topik Kuis Populer</h2>
        <div className="mb-4 flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Filter kategori">
          {CATEGORIES.map((c) => (
            <button key={c} onClick={() => setCategory(c)} aria-pressed={category === c}
              className={`min-h-[44px] shrink-0 rounded-full px-4 text-sm font-semibold ${category === c ? "bg-indigo-600 text-white" : "bg-white text-slate-800 border border-slate-300"}`}>{c}</button>
          ))}
        </div>
        <AsyncState loading={topics.loading} error={topics.error} onRetry={topics.reload} isEmpty={!topics.data?.length} emptyText="Belum ada kuis di kategori ini."
          skeleton={<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"><Skeleton className="h-48" /><Skeleton className="h-48" /><Skeleton className="h-48" /></div>}>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{topics.data?.map((t) => <TopicCard key={t.id} topic={t} />)}</div>
        </AsyncState>
      </section>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <h2 className="mb-3 text-lg font-bold">Aktivitas Terakhir</h2>
          <AsyncState loading={acts.loading} error={acts.error} onRetry={acts.reload} isEmpty={!acts.data?.length} emptyText="Belum ada aktivitas. Mulai kuis pertamamu!">
            <ul className="divide-y divide-slate-100">
              {acts.data?.slice(0, 3).map((a) => (
                <li key={a.id} className="flex items-center justify-between py-3 text-sm">
                  <div><p className="font-semibold">{a.topicTitle}</p><p className="text-slate-700">Skor {a.score}/{a.totalQuestions} · {a.date}</p></div>
                  <span className="font-bold text-amber-700">+{a.xpEarned} XP</span>
                </li>
              ))}
            </ul>
          </AsyncState>
        </Card>
        <Card>
          <div className="mb-3 flex items-center justify-between"><h2 className="text-lg font-bold">Peringkat Minggu Ini</h2><Link href="/leaderboard" className="min-h-[44px] content-center text-sm font-semibold text-indigo-700 underline">Lihat Semua</Link></div>
          <AsyncState loading={board.loading} error={board.error} onRetry={board.reload} isEmpty={!board.data?.length}>
            <ol className="space-y-2">
              {board.data?.slice(0, 3).map((u) => (
                <li key={u.rank} className={`flex items-center gap-3 rounded-xl p-2 text-sm ${u.isCurrentUser ? "bg-indigo-50 font-bold" : ""}`}>
                  <span className="w-6 text-center font-bold">{u.rank}</span><span aria-hidden>{u.avatar}</span><span className="flex-1">{u.name}</span><span>{u.xp} XP</span>
                </li>
              ))}
            </ol>
          </AsyncState>
        </Card>
      </div>
    </div>
  );
}
