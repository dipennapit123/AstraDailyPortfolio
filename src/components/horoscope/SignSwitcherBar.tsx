"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodiacSigns, type ZodiacSlug } from "@/src/content/site";

export function SignSwitcherBar({ currentSlug }: { currentSlug: ZodiacSlug }) {
  const router = useRouter();

  return (
    <div className="mb-6 grid min-h-11 grid-cols-1 items-center gap-3 sm:mb-8 sm:grid-cols-3">
      <Link
        href="/"
        className="inline-flex min-h-11 items-center gap-1 justify-self-start text-sm font-medium text-on-surface-variant touch-manipulation transition-colors hover:text-primary"
      >
        <span aria-hidden>&larr;</span> Back to all signs
      </Link>

      <div className="flex justify-center sm:justify-center">
        <label className="sr-only" htmlFor="zodiac-switcher">
          Change zodiac sign
        </label>
        <select
          id="zodiac-switcher"
          value={currentSlug}
          onChange={(e) => {
            const next = e.target.value;
            if (next && next !== currentSlug) {
              router.push(`/horoscope/${next}`);
            }
          }}
          className="w-full max-w-[14rem] appearance-none rounded-full border border-white/15 bg-black/60 px-4 py-2 pr-9 text-center text-sm font-semibold text-on-surface outline-none transition hover:border-primary/40 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 sm:w-auto"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23a78bfa' d='M1 1l5 5 5-5'/%3E%3C/svg%3E\")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 0.85rem center",
          }}
        >
          {zodiacSigns.map((sign) => (
            <option key={sign.slug} value={sign.slug}>
              {sign.glyph} {sign.label}
            </option>
          ))}
        </select>
      </div>

      <span className="hidden sm:block" aria-hidden />
    </div>
  );
}
