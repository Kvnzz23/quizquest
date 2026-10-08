import {
  achievements,
  activities,
  currentUser,
  dailyQuests,
  leaderboardAllTime,
  leaderboardWeekly,
} from "@/lib/dummyData";
import type {
  Achievement,
  ActivityLog,
  DailyQuest,
  LeaderboardUser,
  User,
} from "@/types";

const delay = (ms = 500) => new Promise((r) => setTimeout(r, ms));
let user: User = { ...currentUser };

export async function getCurrentUser(): Promise<User> {
  await delay(300);
  return user;
}
export async function getDailyQuests(): Promise<DailyQuest[]> {
  await delay();
  return dailyQuests;
}
export async function getActivities(): Promise<ActivityLog[]> {
  await delay();
  return activities;
}
export async function getAchievements(): Promise<Achievement[]> {
  await delay(300);
  return achievements;
}
export async function getLeaderboard(
  scope: "weekly" | "all",
): Promise<LeaderboardUser[]> {
  await delay();
  return scope === "weekly" ? leaderboardWeekly : leaderboardAllTime;
}
