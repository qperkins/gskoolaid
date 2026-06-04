"use client"

import { use, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { getProductBySlug, getRelatedProducts } from "@/lib/products"
import { useCart } from "@/lib/cart-context"
import { 
  Star, 
  Minus, 
  Plus, 
  ShoppingCart, 
  Heart, 
  Share2, 
  Zap,
  Shield, 
  MapPin,
  ChevronRight,
  Check
} from "lucide-react"

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const product = getProductBySlug(slug)
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(slug, 4)

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1)
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const handleAddToCart = () => {
    addItem(product, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-secondary/50 border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative aspect-square bg-gradient-to-br from-secondary to-muted/50 rounded-3xl overflow-hidden border border-border">
                {product.badge && (
                  <Badge className={`absolute top-4 left-4 z-10 ${product.badgeColor} text-white font-bold`}>
                    {product.badge}
                  </Badge>
                )}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full h-full p-8"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col"
            >
              {/* Flavor Tag */}
              <Badge variant="outline" className="w-fit mb-3 text-primary border-primary">
                {product.flavor}
              </Badge>

              {/* Title */}
              <h1 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-4 text-balance">
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-foreground">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                {product.originalPrice && (
                  <Badge className="bg-red-500 text-white">
                    SAVE ${(product.originalPrice - product.price).toFixed(2)}
                  </Badge>
                )}
              </div>

              {/* Reviews */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.reviews.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-semibold">{product.reviews.rating}</span>
                <span className="text-muted-foreground">
                  ({product.reviews.count.toLocaleString()} reviews)
                </span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Quantity & Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex items-center border border-border rounded-full">
                  <button
                    onClick={decreaseQuantity}
                    className="p-3 hover:bg-muted rounded-l-full transition-colors"
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-semibold">{quantity}</span>
                  <button
                    onClick={increaseQuantity}
                    className="p-3 hover:bg-muted rounded-r-full transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <Button
                  size="lg"
                  onClick={handleAddToCart}
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full text-lg transition-all"
                  disabled={!product.inStock}
                >
                  {added ? (
                    <>
                      <Check className="w-5 h-5 mr-2" />
                      ADDED!
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      {product.inStock ? "ADD TO CART" : "SOLD OUT"}
                    </>
                  )}
                </Button>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 mb-8">
                <Button variant="outline" size="sm" className="rounded-full">
                  <Heart className="w-4 h-4 mr-2" />
                  Save
                </Button>
                <Button variant="outline" size="sm" className="rounded-full">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 p-4 bg-secondary/50 rounded-2xl">
                <div className="flex flex-col items-center text-center gap-2">
                  <Zap className="w-6 h-6 text-primary" />
                  <span className="text-xs font-medium">Same-Day Delivery</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  <span className="text-xs font-medium">Quality Guaranteed</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span className="text-xs font-medium">Inland Empire, CA</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Product Details Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 max-w-3xl"
          >
            <Accordion type="single" collapsible defaultValue="description" className="w-full">
              <AccordionItem value="description" className="border-b border-border">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Description
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {product.longDescription}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ingredients" className="border-b border-border">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Ingredients
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {product.ingredients.join(", ")}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="nutrition" className="border-b border-border">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Nutrition Facts
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 text-muted-foreground">
                    <p><span className="font-medium text-foreground">Serving Size:</span> {product.nutritionFacts.servingSize}</p>
                    <p><span className="font-medium text-foreground">Calories:</span> {product.nutritionFacts.calories}</p>
                    <p><span className="font-medium text-foreground">Total Sugar:</span> {product.nutritionFacts.sugar}</p>
                    <p><span className="font-medium text-foreground">Sodium:</span> {product.nutritionFacts.sodium}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="delivery" className="border-b border-border">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  Delivery & Returns
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <p className="mb-2"><span className="font-medium text-foreground">Same-Day Delivery:</span> All orders are delivered the same day</p>
                  <p className="mb-2"><span className="font-medium text-foreground">Service Area:</span> Inland Empire, California only</p>
                  <p><span className="font-medium text-foreground">Satisfaction:</span> If you&apos;re not happy, we&apos;ll make it right.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 lg:py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="font-[var(--font-script)] text-primary text-xl lg:text-2xl">
              You May Also Like
            </span>
            <h2 className="text-2xl lg:text-4xl font-extrabold text-foreground mt-2">
              RELATED PRODUCTS
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {relatedProducts.map((relatedProduct, index) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
