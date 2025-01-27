"use client";

import { ChevronDown } from "lucide-react";

export const VideoBackground = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/cd.mp4"
                autoPlay
                loop
                muted
                playsInline
                poster="/cookpic.webp"
            />


            <div className="relative flex flex-col w-full h-full text-white">
                <div className="flex flex-col items-center justify-center grow">
                    <h1 className="text-6xl md:text-6xl mb-4 font-playfair-display font-semibold">Verdant</h1>
                    <p className="text-2xl md:text-xl">Elevating Plant-Based Cuisine</p>
                </div>

                <div className="flex items-center justify-center mt-auto mb-4">
                    <ChevronDown onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })} size={28} className="animate-bounce" />
                </div>
            </div>
        </div>
    );
};