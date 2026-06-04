export interface Product {
  id: number
  slug: string
  name: string
  flavor: string
  description: string
  longDescription: string
  price: number
  originalPrice?: number
  image: string
  badge?: string
  badgeColor?: string
  inStock: boolean
  ingredients: string[]
  nutritionFacts: {
    servingSize: string
    calories: number
    sugar: string
    sodium: string
  }
  reviews: {
    rating: number
    count: number
  }
}

/** Maps each offered flavor to the best-matching asset in /public */
export const flavorImages: Record<string, string> = {
  Cherry: "/images/pineapple-jar-2.png",
  "Tropical Punch": "/tropicalpunch.jpeg",
  Grape: "/grape.jpeg",
  "Lemon-Lime": "/lemonade.jpeg",
  "Pink Lemonade": "/strawberrylemonade.jpeg",
  "Blue Raspberry Lemonade": "/bluerasberry.jpeg",
  Strawberry: "/strawberrylemonade.jpeg",
  Watermelon: "/watermelon.jpeg",
  Orange: "/images/pineapple-jar-1.png",
  "Black Cherry": "/blackcherry.jpeg",
  "Berry Blue": "/bluerasberry.jpeg",
  Mango: "/peachmango.jpeg",
  Pineapple: "/images/pineapple-jar-1.png",
  "Fruit Punch": "/tropicalpunch.jpeg",
  "Green Apple": "/greenapple.jpeg",
  "Peach Mango": "/peachmango.jpeg",
  "Strawberry Kiwi": "/strawberrylemonade.jpeg",
  "Mandarin Tangerine": "/lemonade.jpeg",
  "Pina Pineapple": "/images/pineapple-jar-3.png",
}

export const offeredFlavors = [
  "Cherry",
  "Tropical Punch",
  "Grape",
  "Lemon-Lime",
  "Pink Lemonade",
  "Blue Raspberry Lemonade",
  "Strawberry",
  "Watermelon",
  "Orange",
  "Black Cherry",
  "Berry Blue",
  "Mango",
  "Pineapple",
  "Fruit Punch",
  "Green Apple",
  "Peach Mango",
  "Strawberry Kiwi",
  "Mandarin Tangerine",
  "Pina Pineapple",
] as const

function slugify(flavor: string): string {
  return flavor
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

const defaultIngredients = [
  "Pineapple",
  "Water",
  "Sugar",
  "Citric Acid",
  "Natural Flavors",
]

function createProduct(
  id: number,
  flavor: string,
  overrides: Partial<Product> = {}
): Product {
  const image = flavorImages[flavor] ?? "/images/pineapple-jar-1.png"
  return {
    id,
    slug: slugify(flavor),
    name: `${flavor} Pineapple`,
    flavor,
    description: `Juicy pineapple chunks infused with bold ${flavor} Kool-Aid flavor.`,
    longDescription: `Our ${flavor} Pineapple brings together premium pineapple chunks and classic ${flavor} Kool-Aid for a sweet, tangy snack you'll crave. Each jar is packed fresh and soaked in our signature infusion process for maximum flavor in every bite.`,
    price: 20.00,
    image,
    inStock: true,
    ingredients: [...defaultIngredients, `${flavor} Flavor`],
    nutritionFacts: {
      servingSize: "1/2 cup (125g)",
      calories: 80,
      sugar: "18g",
      sodium: "10mg",
    },
    reviews: {
      rating: 4.8,
      count: 200 + id * 37,
    },
    ...overrides,
  }
}

export const products: Product[] = [
  createProduct(1, "Cherry", {
    badge: "HOT",
    badgeColor: "bg-orange-500",
    reviews: { rating: 4.9, count: 789 },
  }),
  createProduct(2, "Tropical Punch", {
    badge: "NEW",
    badgeColor: "bg-accent",
    reviews: { rating: 4.8, count: 542 },
  }),
  createProduct(3, "Grape"),
  createProduct(4, "Lemon-Lime"),
  createProduct(5, "Pink Lemonade"),
  createProduct(6, "Blue Raspberry Lemonade"),
  createProduct(7, "Strawberry", {
    reviews: { rating: 4.9, count: 856 },
  }),
  createProduct(8, "Watermelon", {
    inStock: false,
    reviews: { rating: 4.7, count: 334 },
  }),
  createProduct(9, "Orange"),
  createProduct(10, "Black Cherry"),
  createProduct(11, "Berry Blue"),
  createProduct(12, "Mango", {
    badge: "LIMITED",
    badgeColor: "bg-purple-500",
    reviews: { rating: 4.9, count: 567 },
  }),
  createProduct(13, "Pineapple", {
    badge: "BESTSELLER",
    badgeColor: "bg-primary",
    reviews: { rating: 4.9, count: 1247 },
  }),
  createProduct(14, "Fruit Punch"),
  createProduct(15, "Green Apple"),
  createProduct(16, "Peach Mango"),
  createProduct(17, "Strawberry Kiwi"),
  createProduct(18, "Mandarin Tangerine"),
  createProduct(19, "Pina Pineapple", {
    badge: "NEW",
    badgeColor: "bg-accent",
  }),
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getRelatedProducts(currentSlug: string, limit: number = 4): Product[] {
  return products
    .filter((product) => product.slug !== currentSlug)
    .slice(0, limit)
}

export function getFeaturedProducts(limit: number = 4): Product[] {
  return products.filter((p) => p.badge).slice(0, limit)
}
