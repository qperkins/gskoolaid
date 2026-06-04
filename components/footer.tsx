import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🍍</span>
              <span className="text-2xl font-bold">
                G&apos;s <span className="text-primary">Koolaid Pineapples</span>
              </span>
            </Link>
            <p className="text-sidebar-foreground/70 text-sm">
              The tastiest Kool-Aid infused pineapples you&apos;ve ever tried!
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-bold text-sidebar-foreground mb-4 uppercase tracking-wider text-sm">
              Shop
            </h4>
            <ul className="space-y-3">
              <li><Link href="/products" className="text-sidebar-foreground/70 hover:text-primary transition-colors text-sm">All Products</Link></li>
              <li><Link href="/bundles" className="text-sidebar-foreground/70 hover:text-primary transition-colors text-sm">Bundles</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-bold text-sidebar-foreground mb-4 uppercase tracking-wider text-sm">
              Help
            </h4>
            <ul className="space-y-3">
              <li><Link href="/contact" className="text-sidebar-foreground/70 hover:text-primary transition-colors text-sm">Contact Us</Link></li>
              <li><Link href="/privacy" className="text-sidebar-foreground/70 hover:text-primary transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sidebar-foreground/70 hover:text-primary transition-colors text-sm">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-sidebar-foreground mb-4 uppercase tracking-wider text-sm">
              Company
            </h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sidebar-foreground/70 hover:text-primary transition-colors text-sm">About Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mt-8 pt-8 border-t border-sidebar-border">
          <Link href="#" className="text-sidebar-foreground/70 hover:text-primary transition-colors">
            <Instagram className="w-5 h-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="text-sidebar-foreground/70 hover:text-primary transition-colors">
            <Facebook className="w-5 h-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="text-sidebar-foreground/70 hover:text-primary transition-colors">
            <Twitter className="w-5 h-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="text-sidebar-foreground/70 hover:text-primary transition-colors">
            <Youtube className="w-5 h-5" />
            <span className="sr-only">YouTube</span>
          </Link>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="bg-sidebar-accent py-6">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-sidebar-foreground tracking-tight">
            TROPICAL TREATS YOU&apos;VE NEVER TASTED BEFORE
          </h3>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-sidebar-border py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sidebar-foreground/50 text-sm">
            © 2026 G&apos;s Koolaid Pineapples. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sidebar-foreground/50 text-xs">Payment Methods:</span>
            <div className="flex gap-2">
              <span className="bg-sidebar-foreground/10 px-2 py-1 rounded text-xs font-medium">VISA</span>
              <span className="bg-sidebar-foreground/10 px-2 py-1 rounded text-xs font-medium">MC</span>
              <span className="bg-sidebar-foreground/10 px-2 py-1 rounded text-xs font-medium">AMEX</span>
              <span className="bg-sidebar-foreground/10 px-2 py-1 rounded text-xs font-medium">PayPal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
