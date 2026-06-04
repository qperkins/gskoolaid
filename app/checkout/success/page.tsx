"use client"

import { useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle, ShoppingBag, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useCart } from "@/lib/cart-context"

export default function CheckoutSuccessPage() {
  const { clearCart } = useCart()

  useEffect(() => {
    clearCart()
  }, [clearCart])

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="flex flex-col items-center gap-6"
          >
            {/* Success icon */}
            <div className="relative">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-14 h-14 text-primary" />
              </div>
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 15, -15, 0] }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -top-2 -right-2 text-3xl"
              >
                🍍
              </motion.div>
            </div>

            <div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-3">
                Order Confirmed!
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Thank you for your order! Your tropical treats are on their way. 
                You&apos;ll receive a confirmation email shortly.
              </p>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-4 w-full mt-2">
              <div className="bg-card border border-border rounded-2xl p-5 text-center">
                <div className="text-2xl mb-2">⚡</div>
                <p className="font-semibold text-sm text-foreground">Same-Day Delivery</p>
                <p className="text-xs text-muted-foreground mt-1">Delivered today</p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-5 text-center">
                <div className="text-2xl mb-2">📍</div>
                <p className="font-semibold text-sm text-foreground">Service Area</p>
                <p className="text-xs text-muted-foreground mt-1">Inland Empire, CA</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full mt-2">
              <Button
                asChild
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full h-12"
              >
                <Link href="/products">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Shop More
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="flex-1 rounded-full h-12 font-bold"
              >
                <Link href="/">
                  Go Home
                  <ArrowRight className="w-4 h-4 ml-2" />
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
