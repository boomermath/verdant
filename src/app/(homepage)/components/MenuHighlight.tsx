
interface MenuHighlightProps {
  title: string
  description: string
  price: string
}

export default function MenuHighlight({ title, description, price }: MenuHighlightProps) {
  return (
    <div className="bg-gradient-to-br from-[var(--cream-100)] to-[var(--gold-300)] p-6 rounded-lg shadow-lg text-[var(--dark-green-900)]">
      <h3 className={`font-playfair-display text-xl font-semibold mb-2 text-[var(--dark-green-800)]`}>{title}</h3>
      <p className="text-sm text-[var(--dark-green-700)] mb-2">{description}</p>
      <span className="text-[var(--gold-500)] font-semibold">{price}</span>
    </div>
  )
}

