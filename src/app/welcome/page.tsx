import Link from "next/link";
import { Suspense } from "react";
import { requireUser } from "@/lib/session";
import { PrintButton } from "./print-button";

export const metadata = { title: "Save your username · Benchmark My Blood Test" };

export default function WelcomePage() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center gap-6 px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Your account is ready</h1>
      <div className="rounded-xl border-2 border-dashed border-zinc-400 p-6 text-center print:border-black">
        <p className="text-sm uppercase tracking-wide text-zinc-500">Your username</p>
        <Suspense fallback={<p className="mt-2 font-mono text-2xl text-zinc-400">loading…</p>}>
          <Username />
        </Suspense>
        <p className="mt-4 text-sm text-zinc-500">benchmarkmybloodtest.com</p>
      </div>
      <div className="rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-900 dark:border-red-800 dark:bg-red-950 dark:text-red-200 print:hidden">
        <strong>Write this down now.</strong> Store it with your password somewhere safe. We cannot
        recover lost usernames or reset passwords. There is no email on file.
      </div>
      <div className="flex gap-3 print:hidden">
        <PrintButton />
        <Link
          href="/dashboard"
          className="flex-1 rounded-md bg-zinc-900 px-4 py-2 text-center font-medium text-white dark:bg-zinc-100 dark:text-zinc-900"
        >
          I&apos;ve saved it, continue
        </Link>
      </div>
    </main>
  );
}

async function Username() {
  const { username } = await requireUser();
  return <p className="mt-2 font-mono text-2xl font-semibold">{username}</p>;
}
