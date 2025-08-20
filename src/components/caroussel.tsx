import { useEffect, useState } from "react";
import DivNavBar from "./divNavBar";

type CarousselProps = {
  images: string[];
  titre?: string; // un titre unique pour toutes les slides
};

export default function Caroussel({ images, titre }: CarousselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide toutes les 5 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full z-0">
      <DivNavBar />

      {/* Images */}
      <div className="relative h-56 overflow-hidden md:h-[100vh]">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
          >
            <img
              src={img}
              alt={`Slide ${index}`}
              className="block w-full h-full object-cover"
            />

            {/* Titre centré */}
            {titre && (
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-3xl md:text-9xl font-bold text-white drop-shadow-lg text-center px-4">
                  {titre}
                </h2>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === i ? "bg-white" : "bg-gray-400"
            }`}
            aria-label={`Slide ${i + 1}`}
          ></button>
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={goPrev}
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </span>
      </button>

      {/* Next Button */}
      <button
        onClick={goNext}
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}
