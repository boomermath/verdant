import { VideoBackground } from "./components/VideoBackground";
import Image from "next/image";
import content from "./content/index.json";
import { ApproachShowCase } from "./components/ApproachShowcase";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center min-h-screen bg-cream-100">
      <VideoBackground />
      <section className="flex flex-col items-center justify-center p-8 container">
        <h1 className="font-playfair-display text-4xl p-10 text-center">Our Approach</h1>
        <div className="flex flex-col md:flex-row gap-28 p-8">
          {content.approaches.map((approach, index) => (
            <ApproachShowCase key={index} {...approach} />
          ))}
        </div>
      </section>
    </main>
  );
}
