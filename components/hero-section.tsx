"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const flavorBadges = [
  { label: "Strawberry Lemonade", className: "border-[#e05c7a]/40 bg-[#e05c7a]/15 text-[#e05c7a]" },
  { label: "Lemon Lime", className: "border-[#7ec850]/40 bg-[#7ec850]/15 text-[#7ec850]" },
  { label: "Peach Mango", className: "border-[#FFA43B]/40 bg-[#FFA43B]/15 text-[#FFA43B]" },
] as const

const particles = [
  { emoji: "🍍", className: "left-[8%] top-[12%] text-lg opacity-15 [animation-delay:-1s] [animation-duration:6s]" },
  { emoji: "⭐", className: "left-[22%] top-[68%] text-sm opacity-10 [animation-delay:-2.5s] [animation-duration:8s]" },
  { emoji: "💛", className: "left-[45%] top-[8%] text-base opacity-12 [animation-delay:-0.5s] [animation-duration:7s]" },
  { emoji: "🌟", className: "left-[62%] top-[78%] text-lg opacity-10 [animation-delay:-3s] [animation-duration:9s]" },
  { emoji: "🍍", className: "left-[78%] top-[22%] text-sm opacity-15 [animation-delay:-4s] [animation-duration:5s]" },
  { emoji: "⭐", className: "left-[88%] top-[55%] text-base opacity-12 [animation-delay:-1.5s] [animation-duration:10s]" },
  { emoji: "💛", className: "left-[35%] top-[88%] text-sm opacity-10 [animation-delay:-2s] [animation-duration:6.5s]" },
  { emoji: "🌟", className: "left-[55%] top-[42%] text-xs opacity-15 [animation-delay:-5s] [animation-duration:7.5s]" },
] as const

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-primary min-h-[calc(100svh-8.5rem)]">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="animate-hero-blob absolute -left-[10%] -top-[10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,#ff4d6d_0%,transparent_70%)] opacity-35 blur-[80px] [animation-duration:14s]" />
        <div className="animate-hero-blob absolute bottom-[-5%] right-[30%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,var(--color-accent)_0%,transparent_70%)] opacity-35 blur-[80px] [animation-delay:-4s] [animation-duration:10s]" />
        <div className="animate-hero-blob absolute -right-[5%] top-[30%] h-[350px] w-[350px] rounded-full bg-[radial-gradient(circle,#3b82f6_0%,transparent_70%)] opacity-20 blur-[80px] [animation-delay:-8s] [animation-duration:16s]" />
        <div className="hero-noise" />
      </div>

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {particles.map((particle, index) => (
          <span
            key={index}
            className={cn("absolute animate-hero-blob", particle.className)}
          >
            {particle.emoji}
          </span>
        ))}
      </div>

      <div className="relative z-10 container mx-auto grid min-h-[calc(100svh-8.5rem)] grid-cols-1 items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:gap-12 lg:py-20">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center text-center lg:text-left"
        >
          <Badge
            variant="outline"
            className="mx-auto mb-5 w-fit rounded-full border-accent/40 bg-accent/15 px-4 py-1.5 text-accent lg:mx-0"
          >
            <span className="mr-2">🍍</span>
            <span className="font-[var(--font-script)] text-base tracking-wide">
              Sweeter than ever
            </span>
          </Badge>

          <h1 className="mb-4 font-extrabold leading-[0.92] tracking-tight text-primary-foreground">
            <span className="block text-[clamp(3.5rem,9vw,7.5rem)] uppercase">
              Tropical
            </span>
            <span
              className="block text-[clamp(3.5rem,9vw,7.5rem)] uppercase text-transparent"
              style={{ WebkitTextStroke: "2px var(--color-accent)" }}
            >
              Pineapple
            </span>
            <span className="block text-[clamp(3.5rem,9vw,7.5rem)] uppercase text-accent">
              Jars
            </span>
          </h1>

          <div className="mb-6 flex flex-wrap justify-center gap-2 lg:justify-start">
            {flavorBadges.map((flavor) => (
              <Badge
                key={flavor.label}
                variant="outline"
                className={cn("rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-wider", flavor.className)}
              >
                {flavor.label}
              </Badge>
            ))}
          </div>

          <p className="mx-auto mb-9 max-w-md text-base leading-relaxed text-primary-foreground/70 lg:mx-0 lg:text-lg">
            Bold, fruity, and totally addictive. Our Kool-Aid infused pineapple chunks come soaked
            to perfection — a tropical treat that&apos;s as vibrant as it tastes.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Button
              size="lg"
              className="h-auto rounded-full bg-accent px-9 py-4 text-base font-bold tracking-wide text-accent-foreground shadow-[0_0_32px_rgba(255,215,0,0.35)] transition-transform hover:scale-[1.03] hover:bg-accent/90 hover:shadow-[0_0_48px_rgba(255,215,0,0.5)]"
              asChild
            >
              <Link href="/products">
                SHOP NOW
                <ArrowRight className="size-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-auto rounded-full border-primary-foreground/35 bg-transparent px-8 py-4 text-base font-bold tracking-wide text-primary-foreground shadow-none hover:border-primary-foreground/60 hover:bg-primary-foreground/10 hover:text-primary-foreground"
              asChild
            >
              <Link href="/products">
                <Sparkles className="size-5" />
                VIEW FLAVORS
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Product image */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative flex items-center justify-center lg:justify-end"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute h-[70%] w-[80%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,150,50,0.25)_0%,rgba(255,50,100,0.15)_50%,transparent_80%)] blur-[60px]"
          />

          <div className="relative z-10 w-full max-w-[680px] animate-hero-tag">
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl">
              <Image
                src="/herowithbackground.PNG"
                alt="G's Kool-Aid Pineapple Jars — Strawberry Lemonade, Lemon Lime, and Peach Mango"
                fill
                priority
                className="object-cover drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                sizes="(max-width: 1024px) 90vw, 680px"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
