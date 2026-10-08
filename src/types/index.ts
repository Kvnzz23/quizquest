export type Difficulty = "Easy" | "Medium" | "Hard";
export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  xp: number;
  streak: number;
  accuracyRate: number;
  level: number;
  completedQuizzesCount: number;
}
export interface QuizTopic {
  id: string;
  title: string;
  description: string;
  category: string;
  totalQuestions: number;
  difficulty: Difficulty;
  icon: string;
  isCompleted: boolean;
}
export interface Question {
  id: string;
  topicId: string;
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}
export interface DailyQuest {
  id: string;
  title: string;
  target: number;
  current: number;
  rewardXp: number;
  isClaimed: boolean;
}
export interface ActivityLog {
  id: string;
  topicTitle: string;
  score: number;
  totalQuestions: number;
  xpEarned: number;
  date: string;
}
export interface LeaderboardUser {
  rank: number;
  name: string;
  xp: number;
  avatar: string;
  isCurrentUser: boolean;
}
export interface Achievement {
  id: string;
  title: string;
  description: string;
  unlocked: boolean;
}
export interface QuizSummary {
  xpEarned: number;
  accuracy: number;
  streak: number;
  leveledUp: boolean;
  newLevel: number;
}
