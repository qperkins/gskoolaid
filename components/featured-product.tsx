"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"

export function FeaturedProduct() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 lg:py-24">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute top-0 right-0 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-accent/25 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#ff4d6d]/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/3 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative mx-auto aspect-square max-w-lg">
              <div className="absolute inset-0 rotate-3 rounded-3xl bg-gradient-to-br from-primary to-accent" />
              <div className="absolute inset-0 overflow-hidden rounded-3xl bg-card shadow-2xl">
                <motion.div
                  animate={{ rotate: [-2, 2, -2] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative h-full w-full"
                >
                  <Image
                    src="/tropicalpunch.PNG"
                    alt="Tropical Punch Pineapple Jar"
                    fill
                    className="rounded-3xl object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 text-center lg:order-2 lg:text-left"
          >
            <span className="font-[var(--font-script)] text-2xl text-accent lg:text-3xl">
              Limited Edition
            </span>
            <h2 className="mt-2 mb-4 text-3xl font-extrabold text-primary-foreground lg:text-5xl">
              SUMMER<br />
              PARADISE JAR
            </h2>
            <div className="mb-6 flex justify-center gap-2 lg:justify-start">
              <Badge variant="outline" className="border-accent/40 bg-accent/15 text-accent">LIMITED</Badge>
              <Badge className="bg-accent text-accent-foreground">EXCLUSIVE</Badge>
            </div>
            <p className="mx-auto mb-8 max-w-md text-lg text-primary-foreground/70 lg:mx-0">
              Ready for the ultimate tropical experience? Our Limited Edition Summer Paradise Jar combines the sweetest pineapple chunks with an exclusive blend of tropical Kool-Aid flavors. Only 500 jars available!
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <div className="text-center sm:text-left">
                <span className="text-3xl font-bold text-primary-foreground">$14.99</span>
                <span className="ml-2 text-lg text-primary-foreground/50 line-through">$19.99</span>
              </div>
              <Button
                size="lg"
                className="rounded-full bg-accent px-8 font-bold text-accent-foreground shadow-[0_0_32px_rgba(255,215,0,0.35)] hover:bg-accent/90 hover:shadow-[0_0_48px_rgba(255,215,0,0.5)]"
              >
                <Sparkles className="mr-2 size-5" />
                GET IT NOW
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
