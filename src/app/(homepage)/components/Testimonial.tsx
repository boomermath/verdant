

interface TestimonialProps {
    quote: string
    author: string
}

export default function Testimonial({ quote, author }: TestimonialProps) {
    return (
        <div className="bg-[var(--cream-100)] p-6 rounded-lg shadow-lg text-[var(--dark-green-900)]">
            <p className="mb-4 italic">&#34;{quote}&#34;</p>
            <p className="font-playfair-display text-right font-semibold">- {author}</p>
        </div>
    )
}
