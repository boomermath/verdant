import { Playfair_Display } from "next/font/google"
import type { LucideIcon } from "lucide-react"

const playfair = Playfair_Display({ subsets: ["latin"] })

interface MenuItemProps {
  name: string
  description: string
  price: string
  sustainabilityIcon: LucideIcon
  sustainabilityNote: string
}

export default function MenuItem({
  name,
  description,
  price,
  sustainabilityIcon: Icon,
  sustainabilityNote,
}: MenuItemProps) {
  return (
    <div className="bg-gradient-to-br from-[var(--cream-100)] to-[var(--gold-300)] p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-start mb-2">
        <h3 className={`${playfair.className} text-xl font-semibold text-[var(--dark-green-800)]`}>{name}</h3>
        <span className="text-[var(--gold-500)] font-semibold">{price}</span>
      </div>
      <p className="text-[var(--dark-green-700)] mb-4">{description}</p>
      <div className="flex items-center text-sm text-[var(--dark-green-600)]">
        <Icon className="w-4 h-4 mr-2" />
        <span>{sustainabilityNote}</span>
      </div>
    </div>
  )
}

