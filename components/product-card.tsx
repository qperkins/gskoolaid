"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus } from "lucide-react"
import { Product } from "@/lib/products"
import { useCart } from "@/lib/cart-context"

interface ProductCardProps {
  product: Product
  index?: number
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCart()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <Link href={`/products/${product.slug}`}>
        <Card className="group relative overflow-hidden bg-card border-border hover:shadow-xl transition-all duration-300 rounded-2xl cursor-pointer">
          {/* Badge */}
          {product.badge && (
            <Badge className={`absolute top-3 left-3 z-10 ${product.badgeColor} text-white font-bold text-xs`}>
              {product.badge}
            </Badge>
          )}

          {/* Out of Stock Overlay */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-background/60 z-20 flex items-center justify-center">
              <span className="bg-foreground text-background px-4 py-2 rounded-full font-bold text-sm">
                SOLD OUT
              </span>
            </div>
          )}

          {/* Product Image */}
          <div className="relative aspect-square bg-gradient-to-br from-secondary/50 to-muted/30 p-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="relative w-full h-full"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Quick Add Button */}
            {product.inStock && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  addItem(product)
                }}
                className="absolute bottom-3 right-3 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Plus className="w-5 h-5" />
              </motion.button>
            )}
          </div>

          {/* Product Info */}
          <div className="p-4">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
              {product.flavor}
            </p>
            <h3 className="font-semibold text-foreground text-sm lg:text-base mb-2 line-clamp-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-foreground">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  )
}
