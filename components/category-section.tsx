"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { flavorImages } from "@/lib/products"

const categories = [
  { id: 1, name: "Tropical Punch", image: flavorImages["Tropical Punch"], color: "from-orange-400 to-red-500" },
  { id: 2, name: "Grape", image: flavorImages.Grape, color: "from-purple-400 to-violet-600" },
  { id: 3, name: "Watermelon", image: flavorImages.Watermelon, color: "from-pink-400 to-rose-500" },
  { id: 4, name: "Green Apple", image: flavorImages["Green Apple"], color: "from-lime-400 to-green-500" },
]

export function CategorySection() {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-[var(--font-script)] text-primary text-2xl lg:text-3xl">
            Choose your Mood
          </span>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-foreground mt-2">
            SHOP BY FLAVOR
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/products?flavor=${encodeURIComponent(category.name)}`}
                className="block group"
              >
                <div className={`relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br ${category.color}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full p-6"
                  >
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-contain drop-shadow-lg"
                    />
                  </motion.div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                  
                  {/* Category name badge */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <span className="bg-card text-foreground font-bold text-sm px-4 py-2 rounded-full shadow-lg">
                      {category.name}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
