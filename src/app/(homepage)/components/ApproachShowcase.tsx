import Image from "next/image"

type ApproachShowCaseProps = {
    image: string,
    title: string,
    description: string
}

export const ApproachShowCase = ({ image, title, description }: ApproachShowCaseProps) => {
    return (
        <figure className="flex flex-col space-y-4 items-center justify-center">
            <Image
                src={image}
                alt="Local farm"
                width={650}
                height={650}
                className="w-56 h-56 rounded-full object-cover drop-shadow-2xl"
            />
            <figcaption className="text-center space-y-3">
                <h2 className="font-playfair-display text-2xl tracking-tight">{title}</h2>
                <p className="text-gray-700 text-base text-justify">{description}</p>
            </figcaption>
        </figure>
    );
}