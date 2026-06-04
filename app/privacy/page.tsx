import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronRight } from "lucide-react"

export const metadata = {
  title: "Privacy Policy | G's Koolaid Pineapples",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-secondary/50 border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">Privacy Policy</span>
          </nav>
        </div>
      </div>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-extrabold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-10">Last updated: June 2026</p>

          <div className="prose-sm space-y-8 text-foreground">

            <div>
              <h2 className="text-xl font-bold mb-3">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                When you place an order, we collect your name, delivery address, phone number, and email address. 
                Payment information is processed securely through Stripe and is never stored on our servers.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">We use your information to:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Process and deliver your orders</li>
                <li>Contact you about your order status</li>
                <li>Send updates or promotions if you opt in</li>
                <li>Improve our products and service</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">3. Sharing Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or share your personal information with third parties, except as required 
                to fulfill your order (e.g., payment processing via Stripe) or as required by law.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We take reasonable measures to protect your information. All payment transactions are encrypted 
                and handled by Stripe, a PCI-compliant payment processor. However, no method of transmission 
                over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">5. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies solely to maintain your shopping cart session. We do not use tracking or 
                advertising cookies. You can disable cookies in your browser, but this may affect cart functionality.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You may request access to, correction of, or deletion of your personal data at any time by 
                contacting us at the details below.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">7. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this policy, please{" "}
                <Link href="/contact" className="text-primary font-semibold hover:underline">contact us</Link>.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
