import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center gap-8 px-6 py-24">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-semibold tracking-tight">Benchmark My Blood Test</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Anonymously compare your blood test markers with people who share your demographic and
          health profile, and connect with them to compare notes.
        </p>
      </div>
      <ul className="flex flex-col gap-2 text-zinc-700 dark:text-zinc-300">
        <li>• No email, no name, no contact info. You get a random username.</li>
        <li>• Only your test values are stored. Screenshots are read, then discarded.</li>
        <li>• Filter cohorts by age, sex, conditions, and more.</li>
      </ul>
      <div className="flex gap-3">
        <Link
          href="/register"
          className="rounded-md bg-zinc-900 px-5 py-2.5 font-medium text-white dark:bg-zinc-100 dark:text-zinc-900"
        >
          Create anonymous account
        </Link>
        <Link
          href="/login"
          className="rounded-md border border-zinc-300 px-5 py-2.5 font-medium dark:border-zinc-700"
        >
          Sign in
        </Link>
      </div>
      <p className="rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-200">
        This site is for informational purposes only and is not medical advice.
      </p>
    </main>
  );
}
