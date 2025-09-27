import React, { useState } from "react";
import { cards } from "../data/cardsData";
import { ChevronLeft, ChevronRight, Heart, ShoppingCart } from "lucide-react";

const Cards = () => {
  return (
    <section className="pt-24 pb-12 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        {cards.map((card) => (
          <ImageCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
};

const ImageCard = ({ card }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

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

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const addToCart = () => {
    alert(`${card.title} added to cart!`);
  };

  const toggleQuickView = () => {
    setIsQuickViewOpen(!isQuickViewOpen);
  };

  return (
    <>
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-out">
        {/* Image Carousel */}
        <div
          className="relative w-full h-64 sm:h-72 md:h-80 cursor-pointer"
          onClick={toggleQuickView} // Open modal on image click
        >
          <img
            src={card.images[currentIndex]}
            alt={card.title}
            className="w-full h-full object-fit transition-all duration-300"
          />

          {/* Left Button */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Button */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Text Content */}
        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h3>
          <p className="text-gray-600 leading-relaxed mb-4">{card.desc}</p>

          {/* Buttons */}
          <div className="flex flex-nowrap gap-3">
            {/* Wishlist Button */}
            <button
              onClick={toggleWishlist}
              className={`flex items-center gap-2 text-sm px-4 py-2 rounded-lg border ${
                isWishlisted
                  ? "bg-red-500 text-white border-red-500"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-red-500 hover:text-white transition"
              }`}
            >
              <Heart size={20} />
              {isWishlisted ? "Wishlisted" : "Add to Wishlist"}
            </button>

            {/* Add to Cart Button */}
            <button
              onClick={addToCart}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
            >
              <ShoppingCart size={20} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      {isQuickViewOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
          onClick={toggleQuickView} // Close modal when clicking outside
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-6 relative"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on inner click
          >
            <button
              onClick={toggleQuickView}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              ✕
            </button>
            <div className="flex justify-center">
            <img
              src={card.images[currentIndex]}
              alt={card.title}
              className="w-fit h-100  object-fit rounded-xl mb-4"
              />
              </div>
              <div className="text-center mb-4">

            <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
            <p className="text-gray-600 mb-4">{card.desc}</p>
              </div>
            <div className="flex gap-3 justify-center">
              <button
                onClick={addToCart}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
              >
                <ShoppingCart size={20} />
                Add to Cart
              </button>
              <button
                onClick={toggleWishlist}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
                  isWishlisted
                    ? "bg-red-500 text-white border-red-500"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-red-500 hover:text-white transition"
                }`}
              >
                <Heart size={20} />
                {isWishlisted ? "Wishlisted" : "Add to Wishlist"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cards;
