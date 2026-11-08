"use server";

import { MIN_PASSWORD_LENGTH, usernameToEmail } from "@/lib/auth";
import { createAdminClient } from "@/lib/supabase/admin";
import { verifyTurnstile } from "@/lib/turnstile";
import { generateUsername } from "@/lib/username";

export type RegisterResult = { ok: true; username: string } | { ok: false; error: string };

export async function registerAccount(input: {
  password: string;
  confirm: string;
  agreed: boolean;
  turnstileToken: string | null;
}): Promise<RegisterResult> {
  const { password, confirm, agreed, turnstileToken } = input;

  if (!agreed) return { ok: false, error: "Please confirm you are 18+ and accept the terms." };
  if (password.length < MIN_PASSWORD_LENGTH)
    return { ok: false, error: `Password must be at least ${MIN_PASSWORD_LENGTH} characters.` };
  if (password !== confirm) return { ok: false, error: "Passwords do not match." };
  if (!(await verifyTurnstile(turnstileToken)))
    return { ok: false, error: "Bot check failed. Please refresh and try again." };

  const admin = createAdminClient();

  // Retry on the (rare) chance the random username is already taken.
  for (let attempt = 0; attempt < 5; attempt++) {
    const username = generateUsername();
    const { error } = await admin.auth.admin.createUser({
      email: usernameToEmail(username),
      password,
      email_confirm: true,
      user_metadata: { username },
    });
    if (!error) return { ok: true, username };
    if (!/already|exists|registered/i.test(error.message)) {
      console.error("registerAccount: createUser failed:", error.message);
      return { ok: false, error: "Could not create account. Please try again." };
    }
  }
  return { ok: false, error: "Could not create account. Please try again." };
}
