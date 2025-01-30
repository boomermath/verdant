import type { LucideIcon } from "lucide-react"


interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  theme?: "light" | "dark" | "wine"
}

export default function FeatureCard({ icon: Icon, title, description, theme = "light" }: FeatureCardProps) {
  const bgColor =
    theme === "dark"
      ? "bg-[var(--gold-500)]"
      : theme === "wine"
        ? "bg-[var(--dark-green-800)]"
        : "bg-[var(--dark-green-800)]"
  const textColor = theme === "dark" ? "text-[var(--dark-green-900)]" : "text-[var(--cream-100)]"
  const iconColor = theme === "dark" ? "text-[var(--dark-green-900)]" : "text-[var(--gold-300)]"
  const titleColor =
    theme === "dark"
      ? "text-[var(--dark-green-800)]"
      : theme === "wine"
        ? "text-[var(--gold-300)]"
        : "text-[var(--dark-green-800)]"

  return (
    <div className={`text-center ${textColor}`}>
      <div className={`${bgColor} p-4 rounded-full inline-block mb-4`}>
        <Icon className={`w-8 h-8 ${iconColor}`} />
      </div>
      <h3 className={`font-playfair-display text-xl font-semibold mb-2 ${titleColor}`}>{title}</h3>
      <p>{description}</p>
    </div>
  )
}