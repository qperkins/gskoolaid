import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { NewArrivals } from "@/components/new-arrivals"
import { CategorySection } from "@/components/category-section"
import { FeaturedProduct } from "@/components/featured-product"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <NewArrivals />
      <CategorySection />
      <FeaturedProduct />
      <TestimonialsSection />
      <FAQSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
