import Link from "next/link";
import { LoginForm } from "./login-form";

export const metadata = { title: "Sign in · Benchmark My Blood Test" };

export default function LoginPage() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center gap-6 px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Sign in</h1>
      <LoginForm />
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        New here?{" "}
        <Link href="/register" className="underline">
          Create an anonymous account
        </Link>
      </p>
    </main>
  );
}
