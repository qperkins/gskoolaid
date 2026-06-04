"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

export function NewsletterSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="font-[var(--font-script)] text-accent text-2xl lg:text-3xl">
            Snack Smarter
          </span>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-primary-foreground mt-2 mb-4">
            JOIN THE<br />PINEAPPLE CLUB
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8">
            Get exclusive deals, new flavor alerts & restock notifications straight to your inbox. Plus, get 10% off your first order!
          </p>

          {/* Newsletter Form */}
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-primary-foreground text-foreground border-0 h-14 rounded-full px-6 text-lg placeholder:text-muted-foreground"
            />
            <Button 
              type="submit"
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold px-8 h-14 rounded-full whitespace-nowrap"
            >
              SUBSCRIBE <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </form>

          <p className="text-primary-foreground/70 text-sm mt-4">
            No spam, unsubscribe anytime. See our Privacy Policy.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
