"use client";

import { memo, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";

interface HeroSliderProps {
    slides: string[];
    autoPlayInterval?: number;
}

export const HeroSlider = memo(({
    slides,
    autoPlayInterval = 5000
}: HeroSliderProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, [slides.length]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }, [slides.length]);

    const goToSlide = useCallback((index: number) => {
        setCurrentSlide(index);
    }, []);

    // Auto-play functionality
    useEffect(() => {
        if (slides.length <= 1) return;

        const interval = setInterval(nextSlide, autoPlayInterval);
        return () => clearInterval(interval);
    }, [nextSlide, autoPlayInterval, slides.length]);

    // If no slides, return null
    if (!slides || slides.length === 0) {
        return (
            <div className="w-full bg-gray-200 flex items-center justify-center rounded-lg py-20">
                <span className="text-[var(--deep-teal)]">No images available</span>
            </div>
        );
    }

    return (
        /*
         * MODIFIED: Removed fixed `h-full` from the outer wrapper.
         * Previously the container relied on the parent's height, which caused
         * `fill` images to either overflow or get clipped.
         *
         * Now the wrapper is `relative w-full` with no explicit height — it
         * grows to fit whatever the image naturally needs.
         */
        <div className="relative w-full bg-gray-100 rounded-lg overflow-hidden">

            {/* Slides Container */}
            <div className="relative w-full">
                {slides.map((slide, index) => (
                    /*
                     * MODIFIED: Changed from `absolute inset-0 w-full h-full`
                     * to a block-level div that is only hidden (opacity-0 +
                     * absolute) when not active. The ACTIVE slide uses normal
                     * document flow (`relative`) so it pushes the container
                     * to the correct height.
                     */
                    <div
                        key={index}
                        className={`w-full transition-opacity duration-500 ease-in-out ${
                            index === currentSlide
                                ? "relative opacity-100"
                                : "absolute inset-0 opacity-0 pointer-events-none"
                        }`}
                    >
                        {/*
                         * MODIFIED: Replaced `fill` + `object-cover` with a
                         * responsive width/height approach using `object-contain`.
                         * - `width` and `height` give Next.js the intrinsic
                         *   dimensions it needs for layout calculation (these
                         *   are the maximum natural dimensions; the actual render
                         *   size is controlled by CSS below).
                         * - `w-full h-auto` makes the image scale to the
                         *   container width while preserving its aspect ratio,
                         *   so no part of the image is ever cropped.
                         * - `object-contain` ensures the full image is always
                         *   visible inside the box.
                         */}
                        <Image
                            src={slide}
                            alt={`Dental clinic slide ${index + 1}`}
                            width={900}
                            height={1200}
                            className="w-full h-auto object-contain"
                            priority={index === 0}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            {slides.length > 1 && (
                <>
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-14 lg:h-14 bg-[var(--bright-teal)] rounded-full shadow-lg flex items-center justify-center transition-all duration-200 z-10"
                        aria-label="Previous slide"
                    >
                        <CaretLeftIcon size={20} color="#fff" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-14 lg:h-14 bg-[var(--bright-teal)] rounded-full shadow-lg flex items-center justify-center transition-all duration-200 z-10"
                        aria-label="Next slide"
                    >
                        <CaretRightIcon size={20} color="#fff" />
                    </button>
                </>
            )}
        </div>
    );
});

HeroSlider.displayName = "HeroSlider";