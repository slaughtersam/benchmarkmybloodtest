"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="flex-1 rounded-md border border-zinc-300 px-4 py-2 font-medium dark:border-zinc-700"
    >
      Print
    </button>
  );
}
