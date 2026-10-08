import { CheckCircle2, Circle } from "lucide-react";
import type { DailyQuest } from "@/types";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";

export function DailyQuestCard({ quests }: { quests: DailyQuest[] }) {
  const main = quests[0];
  return (
    <Card>
      <h2 className="mb-1 text-lg font-bold">Misi Harian</h2>
      <p className="mb-2 text-sm text-slate-700">{main.current} dari {main.target} Kuis Selesai</p>
      <ProgressBar value={main.current} max={main.target} label="Progres misi harian" />
      <ul className="mt-4 space-y-2">
        {quests.map((q) => {
          const done = q.current >= q.target;
          return (
            <li key={q.id} className="flex min-h-[44px] items-center gap-3 text-sm">
              {done ? <CheckCircle2 className="text-emerald-600" aria-label="Selesai" /> : <Circle className="text-slate-400" aria-label="Belum selesai" />}
              <span className={`flex-1 ${done ? "text-slate-700 line-through" : ""}`}>{q.title}</span>
              <span className="font-bold text-amber-700">+{q.rewardXp} XP</span>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
