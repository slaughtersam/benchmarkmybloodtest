import Link from "next/link";
import { RegisterForm } from "./register-form";

export const metadata = { title: "Create account · Benchmark My Blood Test" };

export default function RegisterPage() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center gap-6 px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Create an anonymous account</h1>
      <div className="rounded-lg border border-zinc-200 p-4 text-sm text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">
        <p>We never ask for an email, name or phone number.</p>
        <p className="mt-2">
          You will get a <strong>random username</strong>. Write it down along with your password.{" "}
          <strong>If you lose either, there is no way to recover your account.</strong>
        </p>
      </div>
      <RegisterForm />
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Already have an account?{" "}
        <Link href="/login" className="underline">
          Sign in
        </Link>
      </p>
    </main>
  );
}
