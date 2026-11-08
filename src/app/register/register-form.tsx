"use client";

import Script from "next/script";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { MIN_PASSWORD_LENGTH, usernameToEmail } from "@/lib/auth";
import { createClient } from "@/lib/supabase/client";
import { registerAccount } from "./actions";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export function RegisterForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const password = String(form.get("password") ?? "");
    setError(null);

    startTransition(async () => {
      const result = await registerAccount({
        password,
        confirm: String(form.get("confirm") ?? ""),
        agreed: form.get("agreed") === "on",
        turnstileToken: (form.get("cf-turnstile-response") as string | null) ?? null,
      });
      if (!result.ok) {
        setError(result.error);
        return;
      }
      // Sign in from the browser so Supabase's per-client rate limits apply.
      const { error: signInError } = await createClient().auth.signInWithPassword({
        email: usernameToEmail(result.username),
        password,
      });
      if (signInError) {
        setError(
          `Account created as ${result.username}, but sign-in failed. Write this username down and sign in manually.`,
        );
        return;
      }
      router.push("/welcome");
      router.refresh();
    });
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      {TURNSTILE_SITE_KEY && (
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
      )}
      <label className="flex flex-col gap-1 text-sm font-medium">
        Choose a password
        <input
          name="password"
          type="password"
          required
          minLength={MIN_PASSWORD_LENGTH}
          autoComplete="new-password"
          className="rounded-md border border-zinc-300 bg-transparent px-3 py-2 font-normal dark:border-zinc-700"
        />
        <span className="font-normal text-zinc-500">At least {MIN_PASSWORD_LENGTH} characters.</span>
      </label>
      <label className="flex flex-col gap-1 text-sm font-medium">
        Confirm password
        <input
          name="confirm"
          type="password"
          required
          minLength={MIN_PASSWORD_LENGTH}
          autoComplete="new-password"
          className="rounded-md border border-zinc-300 bg-transparent px-3 py-2 font-normal dark:border-zinc-700"
        />
      </label>
      <label className="flex items-start gap-2 text-sm">
        <input name="agreed" type="checkbox" required className="mt-1" />
        <span>
          I am 18 or older, I understand this site is not medical advice, and I will not submit any
          personally identifying information.
        </span>
      </label>
      {TURNSTILE_SITE_KEY && <div className="cf-turnstile" data-sitekey={TURNSTILE_SITE_KEY} />}
      {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
      <button
        type="submit"
        disabled={pending}
        className="rounded-md bg-zinc-900 px-4 py-2 font-medium text-white disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900"
      >
        {pending ? "Creating account…" : "Create account"}
      </button>
    </form>
  );
}
