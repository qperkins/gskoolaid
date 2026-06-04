"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    avatar: "SM",
    rating: 5,
    text: "OMG these are SO good! The strawberry flavor is my absolute favorite. Already ordered my third jar!",
    flavor: "Strawberry"
  },
  {
    id: 2,
    name: "Jake T.",
    avatar: "JT",
    rating: 5,
    text: "Perfect snack for summer parties. Everyone always asks where I get them. Same-day delivery is unbeatable!",
    flavor: "Pineapple"
  },
  {
    id: 3,
    name: "Emily R.",
    avatar: "ER",
    rating: 5,
    text: "The blue raspberry is incredible! Such a unique product. My kids absolutely love it.",
    flavor: "Blue Raspberry Lemonade"
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-[var(--font-script)] text-primary text-2xl lg:text-3xl">
            What they say
          </span>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-foreground mt-2">
            HAPPY CUSTOMERS
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-card border-border rounded-2xl h-full">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground mb-6 text-lg leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">Purchased: {testimonial.flavor}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
