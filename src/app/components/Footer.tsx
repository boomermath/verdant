const socials = [
    { name: "Instagram", link: "https://www.instagram.com/verdantecocity/" },
    { name: "Facebook", link: "https://www.facebook.com/VerdantEcoCity" },
    { name: "Twitter", link: "https://twitter.com/VerdantEcoCity" }
];

export function Footer() {
    return (
        <footer className="flex justify-end w-full py-4 text-center">
            <div className="container mx-auto border-t-2 border-verdant-green-900 grid md:grid-cols-3 gap-12 p-4">
                <div className="text-left space-y-4">
                    <h3 className="text-2xl font-playfair-display text-verdant-green-900">Verdant</h3>
                    <p className="text-sm">
                        123 Green Street <br />
                        San Diego, California 12345
                    </p>
                    <ul className="text-sm">
                        <li>Phone: <a className="text-verdant-green-700 hover:underline" href="tel:+1234567890">+1 (123) 456-7890</a></li>
                        <li>Email: <a className="text-verdant-green-700 hover:underline" href="mailto:info@verdant.com">info@verdant.com</a></li>
                    </ul>
                </div>
                <div className="text-left space-y-4">
                    <h3 className="text-2xl font-playfair-display text-verdant-green-900">Hours</h3>
                    <p className="text-sm">
                        Tuesday - Saturday: 5:30pm - 10:00pm <br />
                        Sunday & Monday: Closed
                    </p>
                </div>
                <div className="text-left space-y-4">
                    <h3 className="text-2xl font-playfair-display text-verdant-green-900">Follow us</h3>
                    <div className="text-left text-sm flex flex-col gap-4 md:flex-row">
                        {socials.map((social, index) => (
                            <a href={social.link}
                                className="text-left text-verdant-green-700 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                                key={index}>
                                {social.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}