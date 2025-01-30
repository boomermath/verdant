import Link from "next/link";
import Logo from "./Logo";

export function Header() {
  return (
    <header className="bg-white/70 fixed w-full z-10 bg-gradient-to-b from-[var(--dark-green-900)] to-[var(--dark-green-800)]">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Logo className="w-40 h-12" />
        <ul className="hidden md:flex space-x-6 text-[var(--cream-100)]">
          {[{ name: "Home", href: "/" }, { name: "Menu", href: "/menu" }, { name: "Reservations", href: "/reservations" }, { name: "Credits", href: "/credits" }].map((item) => (
            <li key={item.name}>
              <Link href={`${item.href}`} className="hover:text-[var(--gold-300)] transition-colors">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}