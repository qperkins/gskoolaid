import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronRight } from "lucide-react"

export const metadata = {
  title: "Terms & Conditions | G's Koolaid Pineapples",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-secondary/50 border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">Terms & Conditions</span>
          </nav>
        </div>
      </div>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-extrabold text-foreground mb-2">Terms & Conditions</h1>
          <p className="text-muted-foreground mb-10">Last updated: June 2026</p>

          <div className="space-y-8 text-foreground">

            <div>
              <h2 className="text-xl font-bold mb-3">1. Service Area</h2>
              <p className="text-muted-foreground leading-relaxed">
                G's Koolaid Pineapples currently serves customers in the Inland Empire, California area only. 
                Orders placed outside our delivery area will be cancelled and refunded in full.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">2. Same-Day Delivery</h2>
              <p className="text-muted-foreground leading-relaxed">
                We offer same-day delivery for orders placed within our operating hours. Orders placed after 
                our daily cutoff time will be delivered the following day. We will contact you if any delay 
                occurs with your order.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">3. Orders & Payment</h2>
              <p className="text-muted-foreground leading-relaxed">
                All orders are subject to availability. Payment is collected at the time of checkout via 
                Stripe. Prices are listed in USD and are subject to change without notice. We reserve the 
                right to cancel any order for any reason, with a full refund issued.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">4. Food Safety & Perishable Items</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our products are fresh and perishable. Once delivered, please refrigerate immediately and 
                consume within 7–10 days of opening. We are not responsible for product quality if 
                storage instructions are not followed after delivery.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">5. Refunds & Satisfaction Guarantee</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your satisfaction is our priority. If you are not happy with your order, please contact us 
                immediately upon delivery. We handle all refund and exchange requests on a case-by-case basis. 
                We do not accept returns of opened or consumed products for food safety reasons.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">6. Allergens</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our products contain pineapple, sugar, citric acid, and artificial flavoring. They are 
                prepared in a home kitchen environment. Please review individual product ingredient lists 
                before ordering if you have food allergies or sensitivities.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">7. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website — including images, text, logos, and branding — is the 
                property of G's Koolaid Pineapples and may not be reproduced without written permission.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">8. Changes to These Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to update these terms at any time. Continued use of the site 
                following any changes constitutes your acceptance of the new terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">9. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                Questions about these terms? <Link href="/contact" className="text-primary font-semibold hover:underline">Get in touch</Link>.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
