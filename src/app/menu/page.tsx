import { Playfair_Display, Lato } from "next/font/google"
import { Leaf, Droplet, Sprout } from "lucide-react"
import MenuItem from "./components/MenuItem"

const playfair = Playfair_Display({ subsets: ["latin"] })
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"] })

const menuItems = [
  {
    category: "Starters",
    items: [
      {
        name: "Heirloom Tomato Carpaccio",
        description: "Locally sourced tomatoes, basil-infused olive oil, aged balsamic reduction",
        price: "$14",
        sustainabilityIcon: Leaf,
        sustainabilityNote: "Zero food miles",
      },
      {
        name: "Wild Mushroom Croquettes",
        description: "Foraged mushrooms, truffle aioli, micro herbs",
        price: "$16",
        sustainabilityIcon: Sprout,
        sustainabilityNote: "Supports local foragers",
      },
      {
        name: "Roasted Beet Tartare",
        description: "Golden and red beets, cashew cream, pickled mustard seeds, rye crisps",
        price: "$15",
        sustainabilityIcon: Droplet,
        sustainabilityNote: "Low water footprint",
      },
    ],
  },
  {
    category: "Salads",
    items: [
      {
        name: "Living Lettuce Salad",
        description: "Hydroponic lettuce, avocado, watermelon radish, citrus vinaigrette",
        price: "$18",
        sustainabilityIcon: Droplet,
        sustainabilityNote: "Hydroponic farming",
      },
      {
        name: "Ancient Grain Bowl",
        description: "Quinoa, farro, roasted seasonal vegetables, tahini dressing",
        price: "$19",
        sustainabilityIcon: Leaf,
        sustainabilityNote: "Drought-resistant grains",
      },
    ],
  },
  {
    category: "Main Courses",
    items: [
      {
        name: "Cauliflower Steak",
        description: "Roasted cauliflower, romesco sauce, pine nut gremolata, wilted greens",
        price: "$24",
        sustainabilityIcon: Droplet,
        sustainabilityNote: "Water-efficient crop",
      },
      {
        name: "Wild Mushroom Risotto",
        description: "Arborio rice, foraged mushrooms, cashew cream, truffle oil",
        price: "$26",
        sustainabilityIcon: Sprout,
        sustainabilityNote: "Supports local foragers",
      },
      {
        name: "Jackfruit 'Crab' Cakes",
        description: "Spiced jackfruit, remoulade sauce, fennel slaw",
        price: "$25",
        sustainabilityIcon: Leaf,
        sustainabilityNote: "Sustainable alt. to seafood",
      },
      {
        name: "Eggplant Moussaka",
        description: "Layers of eggplant, lentil ragu, cashew bechamel",
        price: "$23",
        sustainabilityIcon: Droplet,
        sustainabilityNote: "Low water footprint",
      },
      {
        name: "Zucchini Noodle Pad Thai",
        description: "Spiralized zucchini, tofu, tamarind sauce, crushed peanuts",
        price: "$22",
        sustainabilityIcon: Leaf,
        sustainabilityNote: "Low-carbon alternative",
      },
    ],
  },
  {
    category: "Sides",
    items: [
      {
        name: "Roasted Root Vegetables",
        description: "Seasonal root vegetables, herbs, maple glaze",
        price: "$10",
        sustainabilityIcon: Leaf,
        sustainabilityNote: "Locally sourced",
      },
      {
        name: "Charred Broccolini",
        description: "Garlic, chili flakes, lemon zest",
        price: "$12",
        sustainabilityIcon: Droplet,
        sustainabilityNote: "Water-efficient crop",
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        name: "Aquafaba Chocolate Mousse",
        description: "Dark chocolate, aquafaba, berry compote",
        price: "$14",
        sustainabilityIcon: Leaf,
        sustainabilityNote: "Uses chickpea byproduct",
      },
      {
        name: "Seasonal Fruit Crumble",
        description: "Local fruits, oat and nut topping, cashew ice cream",
        price: "$13",
        sustainabilityIcon: Sprout,
        sustainabilityNote: "Supports local farmers",
      },
      {
        name: "Lavender Panna Cotta",
        description: "Coconut milk, lavender from our garden, honeycomb",
        price: "$15",
        sustainabilityIcon: Droplet,
        sustainabilityNote: "Uses our garden herbs",
      },
    ],
  },
  {
    category: "Drinks",
    items: [
      {
        name: "Green Goddess Smoothie",
        description: "Kale, spinach, banana, ginger, spirulina",
        price: "$9",
        sustainabilityIcon: Leaf,
        sustainabilityNote: "Organic ingredients",
      },
      {
        name: "Butterfly Pea Lemonade",
        description: "Butterfly pea flower tea, lemon juice, agave",
        price: "$8",
        sustainabilityIcon: Droplet,
        sustainabilityNote: "Uses rainwater collection",
      },
      {
        name: "Kombucha Flight",
        description: "Four seasonal flavors of house-made kombucha",
        price: "$12",
        sustainabilityIcon: Sprout,
        sustainabilityNote: "Probiotic-rich, house-made",
      },
    ],
  },
]

export default function MenuPage() {
  return (
    <div className={`${lato.className} text-gray-800 pt-20`}>
      <main className="container mx-auto px-6 py-12">
        <p className="text-center text-lg mb-12">
          Our menu celebrates the bounty of local, seasonal produce. Each dish is crafted to showcase the natural
          flavors of our sustainably sourced ingredients.
        </p>

        {menuItems.map((category) => (
          <section key={category.category} className="mb-12">
            <h2 className={`${playfair.className} text-3xl font-bold text-[var(--dark-green-800)] mb-6`}>
              {category.category}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {category.items.map((item) => (
                <MenuItem key={item.name} {...item} />
              ))}
            </div>
          </section>
        ))}
      </main>

      <footer className="bg-gradient-to-t from-[var(--dark-green-900)] to-[var(--dark-green-800)] text-[var(--cream-100)] py-6">
        <div className="container mx-auto px-6 text-center">
          <p>Our menu changes seasonally to ensure we&#39;re always using the freshest, most sustainable ingredients.</p>
          <p className="mt-2">Please inform your server of any allergies or dietary restrictions.</p>
        </div>
      </footer>
    </div>
  )
}

