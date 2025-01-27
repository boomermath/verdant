import Link from "next/link";

export function Header() {
    
    return (
        <header className="fixed w-full z-10 bg-gradient-to-b container mx-auto flex justify-between items-center py-2 px-4">
          <Link href="/">
            <h1 className="font-playfair-display text-yellow-400 text-3xl font-bold">Verdant</h1>
          </Link>
        </header>
    );
}