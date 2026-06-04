import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) throw new Error("STRIPE_SECRET_KEY is not set. Add it to your .env.local file.")
  return new Stripe(key, { apiVersion: "2025-05-28.basil" })
}

interface CheckoutItem {
  productId: number
  name: string
  price: number
  quantity: number
  image?: string
}

export async function POST(req: NextRequest) {
  try {
    const stripe = getStripe()
    const { items }: { items: CheckoutItem[] } = await req.json()

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "No items provided" }, { status: 400 })
    }

    const origin = req.headers.get("origin") ?? process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = items.map(item => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          description: "G's Koolaid Pineapples — fresh tropical snack jar",
          ...(item.image && item.image.startsWith("http")
            ? { images: [item.image] }
            : {}),
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }))

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/cancel`,
      custom_text: {
        submit: { message: "Same-day delivery in the Inland Empire, CA 🍍" },
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error"
    console.error("Stripe checkout error:", message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
