import { questions, topics } from "@/lib/dummyData";
import type { Question, QuizSummary, QuizTopic } from "@/types";

const delay = (ms = 500) => new Promise((r) => setTimeout(r, ms));

export interface TopicFilter { search?: string; category?: string; difficulty?: string; }

export async function getTopics(filter: TopicFilter = {}): Promise<QuizTopic[]> {
  await delay();
  const q = filter.search?.trim().toLowerCase();
  return topics.filter(
    (t) =>
      (!filter.category || filter.category === "All" || t.category === filter.category) &&
      (!filter.difficulty || filter.difficulty === "All" || t.difficulty === filter.difficulty) &&
      (!q || t.title.toLowerCase().includes(q) || t.description.toLowerCase().includes(q))
  );
}

export async function getTopicById(id: string): Promise<QuizTopic> {
  await delay(300);
  const t = topics.find((x) => x.id === id);
  if (!t) throw new Error("Topik kuis tidak ditemukan.");
  return t;
}

export async function getQuestions(topicId: string): Promise<Question[]> {
  await delay(400);
  return questions.filter((q) => q.topicId === topicId);
}

export async function getQuizSummary(score: number, total: number): Promise<QuizSummary> {
  await delay(400);
  const xpEarned = score * 10;
  const leveledUp = (1280 + xpEarned) % 1300 < xpEarned;
  return { xpEarned, accuracy: total ? Math.round((score / total) * 100) : 0, streak: 8, leveledUp, newLevel: leveledUp ? 6 : 5 };
}
