import { VideoBackground } from "./components/VideoBackground";
import Testimonial from "./components/Testimonial";
import { UtensilsCrossed, Leaf, Users, Recycle, Droplet, Wine } from "lucide-react";
import FeatureCard from "./components/FeatureCard";
import MenuHighlight from "./components/MenuHighlight";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center min-h-screen bg-cream-100">
      <VideoBackground />
      <section className="py-20 bg-gradient-to-br from-[var(--cream-100)] to-[var(--gold-300)]">
          <div className="container mx-auto px-6">
            <h2
              className={`font-playfair-display text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--dark-green-800)]`}
            >
              Our Approach
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              <FeatureCard
                icon={UtensilsCrossed}
                title="Farm-to-Table"
                description="We source our ingredients from local organic farms, ensuring the freshest produce for our dishes."
              />
              <FeatureCard
                icon={Leaf}
                title="Sustainable Practices"
                description="Our commitment to sustainability extends from our kitchen to our dining room, minimizing our environmental impact."
              />
              <FeatureCard
                icon={Users}
                title="Culinary Artistry"
                description="Our chefs craft each dish with precision and creativity, elevating plant-based ingredients to new heights."
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-[var(--dark-green-900)] via-[var(--dark-green-800)] to-[var(--dark-green-700)] text-[var(--cream-100)]">
          <div className="container mx-auto px-6">
            <h2
              className={`font-playfair-display text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--gold-300)]`}
            >
              Our Commitment to Sustainability
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              <FeatureCard
                icon={Leaf}
                title="100% Plant-Based"
                description="Our menu is entirely plant-based, significantly reducing our carbon footprint."
                theme="dark"
              />
              <FeatureCard
                icon={Recycle}
                title="Zero-Waste Initiative"
                description="We compost all organic waste and use eco-friendly packaging for takeaways."
                theme="dark"
              />
              <FeatureCard
                icon={Droplet}
                title="Water Conservation"
                description="Our state-of-the-art kitchen uses 50% less water than traditional restaurants."
                theme="dark"
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-tl from-[var(--dark-green-900)] via-[var(--dark-green-800)] to-[var(--dark-green-700)] text-[var(--cream-100)]">
          <div className="container mx-auto px-6">
            <h2
              className={`font-playfair-display text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--gold-300)]`}
            >
              Menu Highlights
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <MenuHighlight
                title="Roasted Heirloom Carrot Tartare"
                description="With smoked almond cream, pickled mustard seeds, and carrot top pesto"
                price="$24"
              />
              <MenuHighlight
                title="Wild Mushroom Risotto"
                description="Arborio rice cooked with foraged mushrooms, truffle oil, and cashew parmesan"
                price="$28"
              />
            </div>
            <div className="text-center mt-12">
              <Link
                href="/menu"
                className="bg-gradient-to-r from-[var(--gold-500)] to-[var(--gold-400)] text-[var(--dark-green-900)] px-6 py-3 rounded-full hover:from-[var(--gold-400)] hover:to-[var(--gold-300)] transition-all duration-300 font-semibold"
              >
                View Full Menu
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-[var(--cream-100)] to-[var(--gold-300)]">
          <div className="container mx-auto px-6">
            <h2
              className={`font-playfair-display text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--dark-green-800)]`}
            >
              Sustainable Wine Selection
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              <FeatureCard
                icon={Wine}
                title="Local Red Blend"
                description="A robust blend of sustainably grown Cabernet Sauvignon and Merlot from nearby vineyards."
                theme="wine"
              />
              <FeatureCard
                icon={Wine}
                title="Organic Chardonnay"
                description="A crisp and refreshing Chardonnay from an organic winery committed to eco-friendly practices."
                theme="wine"
              />
              <FeatureCard
                icon={Wine}
                title="Biodynamic Rosé"
                description="A delicate and aromatic rosé produced using biodynamic farming methods, respecting nature's rhythms."
                theme="wine"
              />
            </div>
          </div>  
        </section>

        <section className="py-20 bg-gradient-to-br from-[var(--dark-green-900)] via-[var(--dark-green-800)] to-[var(--dark-green-700)] text-[var(--cream-100)]">
          <div className="container mx-auto px-6">
            <h2
              className={`font-playfair-display text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--gold-300)]`}
            >
              What Our Guests Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Testimonial
                quote="Verdant isn't just a meal, it's an experience. The flavors are incredible, and knowing it's all sustainable makes it taste even better!"
                author="Sarah L."
              />
              <Testimonial
                quote="As a wine enthusiast, I was blown away by Verdant's sustainable wine selection. It perfectly complements their innovative plant-based dishes."
                author="Michael R."
              />
              <Testimonial
                quote="The ambiance at Verdant is unmatched. It's the perfect blend of elegance and eco-consciousness. A must-visit for any food lover!"
                author="Emma T."
              />
            </div>
          </div>
        </section>
    </main>
  );
}
