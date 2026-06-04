"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronRight, MapPin, Clock, MessageCircle, Send, Check } from "lucide-react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-secondary/50 border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">Contact Us</span>
          </nav>
        </div>
      </div>

      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="font-[var(--font-script)] text-primary text-2xl lg:text-3xl">
                We&apos;d love to hear from you
              </span>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground mt-2">
                CONTACT US
              </h1>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

              {/* Info cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-5"
              >
                <div className="bg-card border border-border rounded-2xl p-6 flex gap-4 items-start">
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Service Area</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Inland Empire, California<br />
                      Same-day delivery to your door
                    </p>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 flex gap-4 items-start">
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Hours</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Monday – Saturday: 9am – 7pm<br />
                      Sunday: 10am – 5pm
                    </p>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 flex gap-4 items-start">
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Response Time</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      We typically respond within a few hours.<br />
                      For order issues, we respond same day.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-6">
                  <p className="text-sm text-foreground font-medium">
                    🍍 Have a question about an order, a flavor request, or just want to say hi? 
                    Fill out the form and we&apos;ll get back to you shortly!
                  </p>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {submitted ? (
                  <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-16">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Check className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-foreground">Message Sent!</h3>
                    <p className="text-muted-foreground">Thanks for reaching out — we&apos;ll get back to you shortly. 🍍</p>
                    <Button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }) }}
                      variant="outline"
                      className="rounded-full mt-2"
                    >
                      Send Another
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="text-sm font-semibold text-foreground block mb-2">Name</label>
                      <Input
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        className="rounded-xl h-12"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-foreground block mb-2">Email</label>
                      <Input
                        required
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        className="rounded-xl h-12"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-foreground block mb-2">Message</label>
                      <textarea
                        required
                        rows={5}
                        placeholder="What's on your mind?"
                        value={form.message}
                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full h-12"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
