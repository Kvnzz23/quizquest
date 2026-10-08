import type { QuizTopic } from "@/types";
import { Badge, DifficultyBadge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function TopicCard({ topic }: { topic: QuizTopic }) {
  return (
    <Card className="flex flex-col">
      <div className="mb-2 flex items-start justify-between"><span className="text-3xl" aria-hidden>{topic.icon}</span><DifficultyBadge level={topic.difficulty} /></div>
      <h3 className="font-bold">{topic.title}</h3>
      <p className="mb-2 flex-1 text-sm text-slate-700">{topic.description}</p>
      <div className="mb-3 flex items-center gap-2 text-xs text-slate-700">{topic.totalQuestions} soal <Badge>{topic.category}</Badge>{topic.isCompleted && <Badge className="bg-emerald-100 text-emerald-800">Selesai</Badge>}</div>
      <Button href={`/quiz/${topic.id}`}>Mulai Kuis</Button>
    </Card>
  );
}
