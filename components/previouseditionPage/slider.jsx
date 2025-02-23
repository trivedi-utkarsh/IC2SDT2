"use client"; // Required for Next.js App Router (if using Next.js 13+) 

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageSlider({images}) {
  const [currentIndex, setCurrentIndex] = useState(0); // Start from the first image
  const [transition, setTransition] = useState(true); // Enable smooth transition

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Next Slide
  const nextSlide = () => {
    if (currentIndex === images.length - 1) {
      setTransition(false);
      setCurrentIndex(0); // Reset to first image
    } else {
      setTransition(true);
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Previous Slide
  const prevSlide = () => {
    if (currentIndex === 0) {
      setTransition(false);
      setCurrentIndex(images.length - 1); // Go to last image
    } else {
      setTransition(true);
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
      {/* Slider Container */}
      <div
        className={`flex ${transition ? "transition-transform duration-1000 ease-linear" : ""}`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="w-auto h-auto object-cover"
          />
        ))}
      </div>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-20 text-white p-2 rounded-full"
      >
        <ChevronLeft size={30} />
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-20 text-white p-2 rounded-full"
      >
        <ChevronRight size={30} />
      </button>
    </div>
  );
}
