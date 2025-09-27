import React, { useState } from "react";
import { cards } from "../data/cardsData";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Cards = () => {
  return (
    <section className="pt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-12">
      {cards.map((card) => (
        <ImageCard key={card.id} card={card} />
      ))}
    </section>
  );
};

const ImageCard = ({ card }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? card.images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === card.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-out">
      {/* Image Carousel */}
      <div className="relative w-full h-58">
        <img
          src={card.images[currentIndex]}
          alt={card.title}
          className="w-full h-full object-cover transition-all duration-300"
        />

        {/* Left Button */}
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Right Button */}
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Text Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {card.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{card.desc}</p>
      </div>
    </div>
  );
};

export default Cards;
