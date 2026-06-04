"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { XCircle, ShoppingCart, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useCart } from "@/lib/cart-context"

export default function CheckoutCancelPage() {
  const { openCart } = useCart()

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center">
              <XCircle className="w-14 h-14 text-muted-foreground" />
            </div>

            <div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-3">
                Checkout Cancelled
              </h1>
              <p className="text-muted-foreground text-lg">
                No worries — your cart is still saved. Come back when you&apos;re ready!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full mt-2">
              <Button
                onClick={openCart}
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full h-12"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                View Cart
              </Button>
              <Button
                asChild
                variant="outline"
                className="flex-1 rounded-full h-12 font-bold"
              >
                <Link href="/products">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Keep Shopping
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
