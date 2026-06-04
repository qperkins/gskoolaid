"use client"

import { Suspense, useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { products, offeredFlavors } from "@/lib/products"
import { Search, SlidersHorizontal, X } from "lucide-react"

const flavors = [...offeredFlavors]

function ProductsPageContent() {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 25])
  const [showInStockOnly, setShowInStockOnly] = useState(false)
  const [sortBy, setSortBy] = useState("featured")
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    const flavor = searchParams.get("flavor")
    if (flavor && flavors.includes(flavor)) {
      setSelectedFlavors([flavor])
    }
  }, [searchParams])

  const toggleFlavor = (flavor: string) => {
    setSelectedFlavors(prev =>
      prev.includes(flavor)
        ? prev.filter(f => f !== flavor)
        : [...prev, flavor]
    )
  }

  const clearFilters = () => {
    setSelectedFlavors([])
    setPriceRange([0, 25])
    setShowInStockOnly(false)
    setSearchQuery("")
  }

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.flavor.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFlavor = selectedFlavors.length === 0 || selectedFlavors.includes(product.flavor)
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    const matchesStock = !showInStockOnly || product.inStock
    return matchesSearch && matchesFlavor && matchesPrice && matchesStock
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "name":
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  const hasActiveFilters = selectedFlavors.length > 0 || showInStockOnly || priceRange[0] > 0 || priceRange[1] < 25

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-primary via-orange-500 to-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-300 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 py-12 lg:py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="font-[var(--font-script)] text-white/90 text-xl lg:text-2xl">
              Collections
            </span>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white mt-2">
              ALL PRODUCTS
            </h1>
            <p className="text-white/80 mt-4 max-w-2xl mx-auto text-pretty">
              Explore our full collection of Kool-Aid infused pineapple jars. From classic flavors to limited editions, 
              find your perfect tropical treat.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex items-center justify-between mb-4">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {hasActiveFilters && (
                <span className="bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">
                  {selectedFlavors.length + (showInStockOnly ? 1 : 0)}
                </span>
              )}
            </Button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-card border border-border rounded-lg px-4 py-2 text-sm"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A-Z</option>
            </select>
          </div>

          {/* Sidebar Filters */}
          <aside className={`lg:w-64 shrink-0 ${showFilters ? "block" : "hidden lg:block"}`}>
            <div className="bg-card rounded-2xl p-6 border border-border sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-bold text-lg text-foreground">Filters</h2>
                {hasActiveFilters && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-primary text-xs"
                  >
                    <X className="w-3 h-3 mr-1" />
                    RESET ALL
                  </Button>
                )}
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="text-sm font-semibold text-foreground mb-2 block">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Flavor Filter */}
              <div className="mb-6">
                <label className="text-sm font-semibold text-foreground mb-3 block">Flavor</label>
                <div className="space-y-2">
                  {flavors.map((flavor) => (
                    <label
                      key={flavor}
                      className="flex items-center gap-2 cursor-pointer group"
                    >
                      <Checkbox
                        checked={selectedFlavors.includes(flavor)}
                        onCheckedChange={() => toggleFlavor(flavor)}
                      />
                      <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                        {flavor}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <label className="text-sm font-semibold text-foreground mb-3 block">Price</label>
                <div className="px-2">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    min={0}
                    max={25}
                    step={1}
                    className="mb-3"
                  />
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>${priceRange[0].toFixed(2)}</span>
                    <span>to</span>
                    <span>${priceRange[1].toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Availability Filter */}
              <div>
                <label className="text-sm font-semibold text-foreground mb-3 block">Availability</label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <Checkbox
                    checked={showInStockOnly}
                    onCheckedChange={(checked) => setShowInStockOnly(checked as boolean)}
                  />
                  <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                    In Stock Only
                  </span>
                </label>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            {/* Results Header */}
            <div className="hidden lg:flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">{sortedProducts.length}</span> products
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-card border border-border rounded-lg px-4 py-2 text-sm"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A-Z</option>
              </select>
            </div>

            {/* Products Grid */}
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
                {sortedProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg mb-4">No products found</p>
                <Button onClick={clearFilters} variant="outline">
                  Clear filters
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <p className="text-muted-foreground">Loading products...</p>
        </div>
      }
    >
      <ProductsPageContent />
    </Suspense>
  )
}
