"use client"

import { useCallback, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, Minus, Plus, ShoppingCart, Trash2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/lib/cart-context"

export function CartDrawer() {
  const { items, removeItem, updateQuantity, closeCart, isOpen, totalItems, subtotal } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const handleCheckout = useCallback(async () => {
    setIsCheckingOut(true)
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map(item => ({
            productId: item.product.id,
            name: item.product.name,
            price: item.product.price,
            quantity: item.quantity,
            image: item.product.image,
          })),
        }),
      })
      const data = await res.json()
      if (data.error) throw new Error(data.error)
      if (data.url) window.location.href = data.url
    } catch (err) {
      console.error("Checkout error:", err)
      alert("Checkout is not configured yet. Please add your Stripe API keys to .env.local")
      setIsCheckingOut(false)
    }
  }, [items])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-foreground/40 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-card z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <div className="flex items-center gap-3">
                <ShoppingCart className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-extrabold text-foreground">Your Cart</h2>
                {totalItems > 0 && (
                  <Badge className="bg-primary text-primary-foreground font-bold">{totalItems}</Badge>
                )}
              </div>
              <button
                onClick={closeCart}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <div className="text-6xl">🍍</div>
                  <p className="text-xl font-bold text-foreground">Your cart is empty</p>
                  <p className="text-muted-foreground text-sm">Add some tropical treats!</p>
                  <Button
                    onClick={closeCart}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-bold mt-2"
                    asChild
                  >
                    <a href="/products">Shop Now</a>
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map(item => (
                    <motion.div
                      key={item.product.id}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex items-center gap-4 bg-secondary/40 rounded-2xl p-4"
                    >
                      {/* Image */}
                      <div className="relative w-16 h-16 shrink-0 bg-gradient-to-br from-secondary to-muted/50 rounded-xl overflow-hidden">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-contain p-1"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                          {item.product.flavor}
                        </p>
                        <p className="font-semibold text-foreground text-sm leading-snug line-clamp-1">
                          {item.product.name}
                        </p>
                        <p className="text-primary font-bold text-sm mt-1">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                      </div>

                      {/* Quantity */}
                      <div className="flex flex-col items-end gap-2">
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <div className="flex items-center border border-border rounded-full">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center hover:bg-muted rounded-l-full transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-7 text-center text-sm font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center hover:bg-muted rounded-r-full transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border px-6 py-5 space-y-4">
                {/* Subtotal */}
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground font-medium">Subtotal</span>
                  <span className="text-xl font-extrabold text-foreground">${subtotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-muted-foreground bg-secondary/60 rounded-lg px-3 py-2 text-center">
                  ⚡ Same-day delivery · Inland Empire, CA
                </p>
                <Button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full text-base h-12"
                >
                  {isCheckingOut ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Checkout
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Secure checkout powered by Stripe 🔒
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
