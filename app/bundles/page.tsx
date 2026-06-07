"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { useCart } from "@/lib/cart-context"
import { products } from "@/lib/products"
import { ShoppingCart, Zap, Star, Check } from "lucide-react"
import { useState } from "react"

interface Bundle {
  id: string
  name: string
  tagline: string
  description: string
  jars: number
  price: number
  originalPrice: number
  badge?: string
  badgeColor?: string
  image: string
  perks: string[]
  productIds: number[]
}

const bundles: Bundle[] = [
  {
    id: "trio",
    name: "Trio Pack",
    tagline: "Perfect starter",
    description: "Pick any 3 flavors and mix it up. Great for trying out new favorites or gifting.",
    jars: 3,
    price: 54,
    originalPrice: 60,
    image: "/cherry.PNG",
    perks: ["3 jars of your choice", "Save $6", "Same-day delivery"],
    productIds: [1, 2, 13],
  },
  {
    id: "six-pack",
    name: "Six Pack",
    tagline: "Most popular",
    description: "Stock up on your favorites. Share with friends or keep them all to yourself — we won't judge.",
    jars: 6,
    price: 105,
    originalPrice: 120,
    badge: "BEST VALUE",
    badgeColor: "bg-primary",
    image: "/tropicalpunch.PNG",
    perks: ["6 jars of your choice", "Save $15", "Same-day delivery", "Free bonus flavor"],
    productIds: [1, 2, 5, 7, 12, 13],
  },
  {
    id: "party-pack",
    name: "Party Pack",
    tagline: "Feed the whole crew",
    description: "The ultimate spread for any occasion. Perfect for parties, cookouts, or family gatherings in the IE.",
    jars: 12,
    price: 200,
    originalPrice: 240,
    badge: "PARTY SIZE",
    badgeColor: "bg-purple-500",
    image: "/pinapineapple.PNG",
    perks: ["12 jars of your choice", "Save $40", "Same-day delivery", "Priority order", "Custom flavor mix"],
    productIds: [1, 2, 3, 4, 5, 6, 7, 9, 12, 13, 16, 19],
  },
]

function BundleCard({ bundle, index }: { bundle: Bundle; index: number }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    const bundleProducts = bundle.productIds.map(id => products.find(p => p.id === id)!).filter(Boolean)
    bundleProducts.forEach(product => addItem(product, 1))
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const savings = bundle.originalPrice - bundle.price
  const isPopular = bundle.id === "six-pack"

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-primary text-primary-foreground text-xs font-extrabold px-4 py-1.5 rounded-full shadow-lg">
            ⭐ MOST POPULAR
          </span>
        </div>
      )}

      <Card className={`relative overflow-hidden rounded-3xl border-2 transition-all duration-300 hover:shadow-2xl h-full flex flex-col ${
        isPopular ? "border-primary shadow-lg shadow-primary/20" : "border-border"
      }`}>
        {bundle.badge && (
          <Badge className={`absolute top-4 right-4 z-10 ${bundle.badgeColor} text-white font-bold`}>
            {bundle.badge}
          </Badge>
        )}

        {/* Image area */}
        <div className="relative bg-gradient-to-br from-secondary/80 to-muted/40 pt-8 pb-4 px-8 flex items-center justify-center">
          <div className="absolute top-4 left-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 right-4 w-16 h-16 bg-accent/20 rounded-full blur-xl" />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
            className="relative h-36 w-36"
          >
            <Image
              src={bundle.image}
              alt={bundle.name}
              fill
              className="object-contain drop-shadow-xl"
            />
          </motion.div>
          {/* Jar count badge */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs font-extrabold px-3 py-1 rounded-full">
            {bundle.jars} JARS
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6">
          <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-1">{bundle.tagline}</p>
          <h3 className="text-2xl font-extrabold text-foreground mb-2">{bundle.name}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-5">{bundle.description}</p>

          {/* Perks */}
          <ul className="space-y-2 mb-6">
            {bundle.perks.map(perk => (
              <li key={perk} className="flex items-center gap-2 text-sm text-foreground">
                <Check className="w-4 h-4 text-primary shrink-0" />
                {perk}
              </li>
            ))}
          </ul>

          {/* Price */}
          <div className="mt-auto">
            <div className="flex items-end gap-2 mb-4">
              <span className="text-3xl font-extrabold text-foreground">${bundle.price}</span>
              <span className="text-lg text-muted-foreground line-through mb-0.5">${bundle.originalPrice}</span>
              <Badge className="bg-green-500 text-white mb-0.5 text-xs">SAVE ${savings}</Badge>
            </div>

            <Button
              onClick={handleAdd}
              className={`w-full font-bold rounded-full h-12 text-base transition-all ${
                isPopular
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                  : "bg-foreground hover:bg-foreground/90 text-background"
              }`}
            >
              {added ? (
                <span className="flex items-center gap-2">
                  <Check className="w-5 h-5" /> Added to Cart!
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" /> Add to Cart
                </span>
              )}
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export default function BundlesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
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
              More jars, more savings
            </span>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white mt-2">
              BUNDLE & SAVE
            </h1>
            <p className="text-white/80 mt-4 max-w-xl mx-auto text-pretty">
              Stock up on your favorite Kool-Aid Pineapple jars and save big. All bundles include same-day delivery in the Inland Empire.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-secondary border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12 text-sm font-medium text-foreground">
            <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-primary" /> Same-Day Delivery</span>
            <span className="flex items-center gap-2"><Star className="w-4 h-4 text-primary fill-primary" /> 4.9 Rating</span>
            <span className="flex items-center gap-2"><ShoppingCart className="w-4 h-4 text-primary" /> Mix Any Flavors</span>
          </div>
        </div>
      </div>

      {/* Bundles Grid */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-5xl mx-auto">
            {bundles.map((bundle, index) => (
              <BundleCard key={bundle.id} bundle={bundle} index={index} />
            ))}
          </div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground text-sm mt-10"
          >
            All bundles add individual jars to your cart — mix and match any flavors you want from our{" "}
            <a href="/products" className="text-primary font-semibold hover:underline">full collection</a>.
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
