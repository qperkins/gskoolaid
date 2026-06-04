"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 py-12 lg:py-20">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <span className="font-[var(--font-script)] text-accent text-2xl lg:text-3xl">
              Sweeter than ever!
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-primary-foreground mt-2 mb-4 leading-tight">
              TROPICAL<br />
              <span className="text-accent">PINEAPPLE</span><br />
              JARS
            </h1>
            <p className="text-primary-foreground/90 text-lg lg:text-xl mb-8 max-w-md mx-auto lg:mx-0">
              Dive into bold, fruity flavors with our Kool-Aid infused pineapple chunks. A tropical treat that&apos;s as vibrant as it tastes!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg px-8 rounded-full"
                asChild
              >
                <Link href="/products">
                  SHOP NOW <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary-foreground bg-transparent text-primary-foreground shadow-none hover:bg-primary-foreground hover:text-primary hover:border-primary-foreground font-bold text-lg px-8 rounded-full"
                asChild
              >
                <Link href="/products">
                  <Sparkles className="w-5 h-5 mr-2" />
                  VIEW FLAVORS
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Hero Image — stable sizing + CSS animation (avoids fill/layout flicker) */}
          <div className="relative w-full max-w-lg mx-auto animate-hero-fade-in">
            <div className="relative aspect-square w-full">
              <div className="relative h-full w-full animate-float">
                <Image
                  src="/images/hero-pineapples.png"
                  alt="Kool-Aid Pineapple Jars Collection"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                  sizes="(max-width: 1024px) 90vw, 512px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
