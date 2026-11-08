import { Suspense } from "react";
import { requireUser } from "@/lib/session";
import { signOut } from "./actions";

export const metadata = { title: "Dashboard · Benchmark My Blood Test" };

export default function DashboardPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-6 py-16">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
        <form action={signOut}>
          <button type="submit" className="text-sm underline">
            Sign out
          </button>
        </form>
      </div>
      <Suspense fallback={<p className="text-zinc-500">Loading…</p>}>
        <DashboardContent />
      </Suspense>
    </main>
  );
}

async function DashboardContent() {
  const { username } = await requireUser();
  return (
    <>
      <p>
        Signed in as <span className="font-mono font-semibold">{username}</span>
      </p>
      <p className="text-zinc-600 dark:text-zinc-400">
        Next: your demographics, test results and benchmarks will appear here.
      </p>
    </>
  );
}
