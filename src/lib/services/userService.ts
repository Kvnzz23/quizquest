import { currentUser } from "@/lib/dummyData";

import type {
  User,
} from "@/types";

const delay = (ms = 500) => new Promise((r) => setTimeout(r, ms));
let user: User = { ...currentUser };

export async function login(email: string, password: string): Promise<User> {
  await delay(700);
  if (password.length < 6) throw new Error("Email atau kata sandi salah.");
  return { ...user, email };
}
export async function register(
  name: string,
  email: string,
  _password: string,
): Promise<User> {
  await delay(700);
  user = { ...user, name, email };
  return user;
}
