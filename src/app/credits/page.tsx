import { Playfair_Display } from "next/font/google"
import { ExternalLink } from "lucide-react"

const playfair = Playfair_Display({ subsets: ["latin"] })


export default function CreditsPage() {
    return (
        <div className="flex-grow container mx-auto px-6 py-12 pt-20">
            <section className="mb-12">
                <h2 className={`${playfair.className} text-3xl font-bold text-[var(--dark-green-800)] mb-4`}>
                    Sources of Information
                </h2>
                <ul className="list-disc list-inside">
                    <li>
                        <a
                            href="https://www.sustainabletable.org.au/"
                            className="text-[var(--dark-green-600)] hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Sustainable Table <ExternalLink className="inline-block w-4 h-4 ml-1" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.thesra.org/"
                            className="text-[var(--dark-green-600)] hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            The Sustainable Restaurant <ExternalLink className="inline-block w-4 h-4 ml-1" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.veganuary.com/"
                            className="text-[var(--dark-green-600)] hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Veganuary <ExternalLink className="inline-block w-4 h-4 ml-1" />
                        </a>
                    </li>
                    {/* Add more sources as needed */}
                </ul>
            </section>

            <section className="mb-12">
                <h2 className={`${playfair.className} text-3xl font-bold text-[var(--dark-green-800)] mb-4`}>
                    Documentation for Copyrighted Material
                </h2>
                <p>
                    All images used in this website are placeholder images and would be replaced with properly licensed or
                    original photographs in a real website. The fonts used (Playfair Display and Lato) are open-source fonts
                    available under the Open Font License.
                </p>
                <p className="mt-4">Icons are from the Lucide React library, which is released under the ISC License.</p>
            </section>

            <section className="mb-12">
                <h2 className={`${playfair.className} text-3xl font-bold text-[var(--dark-green-800)] mb-4`}>
                    Required Documents
                </h2>
                <ul className="list-disc list-inside">
                    <li>
                        <a
                            href="/student-copyright-checklist.pdf"
                            className="text-[var(--dark-green-600)] hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Student Copyright Checklist (PDF) <ExternalLink className="inline-block w-4 h-4 ml-1" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="/plan-of-work-log.pdf"
                            className="text-[var(--dark-green-600)] hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Plan of Work Log (PDF) <ExternalLink className="inline-block w-4 h-4 ml-1" />
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    );
}