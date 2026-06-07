"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MapPin, Heart, Sparkles, ArrowRight } from "lucide-react"

const values = [
  {
    icon: "🍍",
    title: "Fresh Every Time",
    description: "Every jar is made fresh to order — no sitting on shelves, no preservatives. Just real pineapple and bold flavor.",
  },
  {
    icon: "📍",
    title: "Locally Rooted",
    description: "We're an Inland Empire small business, serving our community with same-day delivery straight to your door.",
  },
  {
    icon: "🎨",
    title: "Bold Flavors",
    description: "With 19 Kool-Aid flavors and counting, there's always something new to try. We keep it fun and keep it tropical.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-primary via-[#1a3db8] to-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-40 h-40 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-yellow-300 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 py-12 lg:py-16 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-[var(--font-script)] text-white/90 text-xl lg:text-2xl">
              Our story
            </span>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white mt-2">
              ABOUT G&apos;S
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl transform rotate-3 opacity-20" />
              <div className="relative bg-gradient-to-br from-secondary to-muted/50 rounded-3xl overflow-hidden aspect-square flex items-center justify-center border border-border">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-3/4 h-3/4"
                >
                  <Image
                    src="/cherry.PNG"
                    alt="G's Koolaid Pineapples"
                    fill
                    className="object-contain"
                  />
                </motion.div>
                <div className="absolute bottom-5 left-5 bg-primary text-primary-foreground font-extrabold text-sm px-4 py-2 rounded-full flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Inland Empire, CA
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="font-[var(--font-script)] text-primary text-2xl lg:text-3xl">
                Started with a jar
              </span>
              <h2 className="text-3xl lg:text-5xl font-extrabold text-foreground mt-2 mb-6">
                MADE WITH LOVE<br />IN THE IE
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  G&apos;s Koolaid Pineapples started the same way most great ideas do — in the kitchen, 
                  messing around with flavors and refusing to settle for boring snacks.
                </p>
                <p>
                  What began as something fun to share with friends quickly turned into a 
                  community favorite across the Inland Empire. People kept coming back, kept asking 
                  for new flavors, and kept spreading the word.
                </p>
                <p>
                  Today we offer 19 bold Kool-Aid flavors, all made fresh and delivered the same day 
                  right to your door. No warehouses, no middlemen — just G, a jar, and a whole lot of flavor.
                </p>
              </div>

              <div className="flex items-center gap-3 mt-8">
                <Heart className="w-5 h-5 text-primary fill-primary" />
                <span className="font-semibold text-foreground">Proudly local. Always fresh.</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary/40">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="font-[var(--font-script)] text-primary text-2xl">What we&apos;re about</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mt-2">THE G&apos;S DIFFERENCE</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-6 text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-extrabold text-foreground text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="font-[var(--font-script)] text-primary text-2xl">Ready to taste?</span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-foreground mt-2 mb-6">
              FIND YOUR FLAVOR
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 rounded-full"
              >
                <Link href="/products">
                  <Sparkles className="w-5 h-5 mr-2" />
                  SHOP ALL FLAVORS
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="font-bold px-8 rounded-full"
              >
                <Link href="/bundles">
                  BUNDLE & SAVE
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
