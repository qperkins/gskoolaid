"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"

export function FeaturedProduct() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl transform rotate-3" />
              <div className="absolute inset-0 bg-card rounded-3xl shadow-2xl">
                <motion.div
                  animate={{ rotate: [-2, 2, -2] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full h-full p-8"
                >
                  <Image
                    src="/tropicalpunch.jpeg"
                    alt="Tropical Punch Pineapple Jar"
                    fill
                    className="object-contain"
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
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            <span className="font-[var(--font-script)] text-primary text-2xl lg:text-3xl">
              Limited Edition
            </span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-foreground mt-2 mb-4">
              SUMMER<br />
              PARADISE JAR
            </h2>
            <div className="flex gap-2 justify-center lg:justify-start mb-6">
              <Badge className="bg-primary text-primary-foreground">LIMITED</Badge>
              <Badge className="bg-accent text-accent-foreground">EXCLUSIVE</Badge>
            </div>
            <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto lg:mx-0">
              Ready for the ultimate tropical experience? Our Limited Edition Summer Paradise Jar combines the sweetest pineapple chunks with an exclusive blend of tropical Kool-Aid flavors. Only 500 jars available!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <div className="text-center sm:text-left">
                <span className="text-3xl font-bold text-foreground">$14.99</span>
                <span className="text-lg text-muted-foreground line-through ml-2">$19.99</span>
              </div>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 rounded-full"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                GET IT NOW
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
