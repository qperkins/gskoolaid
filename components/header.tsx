"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ShoppingCart, Menu, X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/lib/cart-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { totalItems, openCart } = useCart()

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-primary text-primary-foreground py-2 overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              <span className="flex items-center gap-2 text-sm font-medium">
                <Star className="w-4 h-4 fill-current" />
                4.9 RATING
              </span>
              <span className="text-sm font-medium">🍍 INLAND EMPIRE, CA</span>
              <span className="text-sm font-medium">⚡ SAME-DAY DELIVERY</span>
              <span className="text-sm font-medium">✓ 100% SATISFACTION</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <motion.div
                whileHover={{ rotate: 10 }}
                className="text-3xl"
              >
                🍍
              </motion.div>
              <span className="text-2xl font-bold tracking-tight text-foreground">
                G&apos;s <span className="text-primary">Koolaid Pineapples</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/products" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                SHOP
              </Link>
              {/* <Link href="/products?flavor=Pineapple" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                FLAVORS
              </Link> */}
              <Link href="/bundles" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                BUNDLES
              </Link>
              <Link href="/about" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                ABOUT
              </Link>
              {/* <Link href="/products" className="flex items-center gap-1 text-sm font-semibold text-primary">
                🔥 SALE
              </Link> */}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-2 lg:gap-4">
              <Button
                variant="default"
                size="sm"
                className="relative bg-primary hover:bg-primary/90"
                onClick={openCart}
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center justify-center">
                    {totalItems > 99 ? "99+" : totalItems}
                  </span>
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-50 bg-card lg:hidden"
          >
            <div className="flex justify-between items-center p-4 border-b border-border">
              <span className="text-2xl font-bold">
                G&apos;s <span className="text-primary">Koolaid Pineapples</span>
              </span>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                <X className="w-6 h-6" />
              </Button>
            </div>
            <nav className="flex flex-col p-6 gap-4">
              <Link href="/products" className="text-xl font-semibold py-2" onClick={() => setIsMenuOpen(false)}>SHOP</Link>
              {/* <Link href="/products" className="text-xl font-semibold py-2" onClick={() => setIsMenuOpen(false)}>FLAVORS</Link> */}
              <Link href="/bundles" className="text-xl font-semibold py-2" onClick={() => setIsMenuOpen(false)}>BUNDLES</Link>
              <Link href="/about" className="text-xl font-semibold py-2" onClick={() => setIsMenuOpen(false)}>ABOUT</Link>
              {/* <Link href="/products" className="text-xl font-semibold py-2 text-primary" onClick={() => setIsMenuOpen(false)}>🔥 SALE</Link> */}
            </nav>
          </motion.div>
        )}
      </header>
    </>
  )
}
