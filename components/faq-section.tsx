"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "What are Kool-Aid Pineapples?",
    answer: "Our Kool-Aid Pineapples are premium pineapple chunks that have been carefully infused with delicious Kool-Aid flavors. Each jar contains fresh, juicy pineapple pieces soaked in your favorite Kool-Aid drink mix for a unique, sweet and tangy snacking experience!"
  },
  {
    question: "How should I store my jar after opening?",
    answer: "Once opened, keep your Kool-Aid Pineapples refrigerated and consume within 7-10 days for the best taste and freshness. Make sure the lid is tightly sealed between servings."
  },
  {
    question: "Where do you deliver?",
    answer: "We currently serve customers in the Inland Empire, California area only. All orders are delivered same-day so you can enjoy your tropical treats fresh!"
  },
  {
    question: "Are your products gluten-free?",
    answer: "Yes! All of our Kool-Aid Pineapple products are gluten-free. They contain pineapple, sugar, citric acid, and Kool-Aid flavoring. Please check individual product pages for complete ingredient lists."
  },
  {
    question: "Can I return or exchange my order?",
    answer: "We want you to love your Kool-Aid Pineapples! If you're not satisfied with your order, please contact us and we'll make it right."
  },
]

export function FAQSection() {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-[var(--font-script)] text-primary text-2xl lg:text-3xl">
            FAQ
          </span>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-foreground mt-2">
            GOT QUESTIONS?<br />WE&apos;VE GOT ANSWERS
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-2xl px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
