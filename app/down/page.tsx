import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Temporarily Unavailable | G's Koolaid Pineapples",
  description: "This site is temporarily unavailable. Please check back soon.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function DownPage() {
  return (
    <main className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-primary px-6 text-center text-primary-foreground">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-[10%] -top-[10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,#ff4d6d_0%,transparent_70%)] opacity-30 blur-[80px]" />
        <div className="absolute bottom-[-8%] right-[20%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,var(--color-accent)_0%,transparent_70%)] opacity-30 blur-[80px]" />
        <div className="absolute -right-[5%] top-[25%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,#3b82f6_0%,transparent_70%)] opacity-20 blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-lg">
        <p className="font-[var(--font-script)] text-4xl text-accent sm:text-5xl">
          G&apos;s Koolaid Pineapples
        </p>
        <h1 className="mt-8 text-3xl font-bold tracking-tight sm:text-4xl">
          Temporarily unavailable
        </h1>
        <p className="mt-4 text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
          This site is down for a short while. Please check back soon — we&apos;ll
          be back up as soon as everything is sorted.
        </p>
      </div>
    </main>
  )
}
