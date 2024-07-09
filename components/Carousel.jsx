"use client";

import { useState } from "react";
import Image from "next/image";
import QuoteCard from "./QuoteCard";

const Carousel = ({}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const quotes = [
    {
      text: "Life can be so much broader, once you discover one simple fact, and that is that everything around you that you call ‘life’ was made up by people who were no smarter than you. And you can change it, you can influence it, you can build your own things that other people can use. Once you learn that, you’ll never be the same again.",
      author: "Steve Jobs",
    },
    {
      text: "To laugh often and much: To win the respect of intelligent people and the affection of children, to earn the appreciation of honest critics and endure the betrayal of false friends; to appreciate beauty, to find the best in others, to leave the world a bit better whether by a healthy child, a garden patch, or a redeemed social condition; to know even one life has breathed easier because you lived. This is to have succeeded",
      author: "Ralph W. Emerson",
    },
  ];

  const nextQuote = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length
    );
  };

  return (
    <div className="carousel w-3/4">
      <div className="relative w-40 h-auto">
        <Image
          src="/assets/icons/left-arrow.svg"
          className="w-full object-center object-contain invert"
          fill
          onClick={nextQuote}
        />
      </div>
      <div>
        <QuoteCard quote={quotes[currentIndex]} />
      </div>
      <div className="relative w-40 h-auto">
        <Image
          src="/assets/icons/right-arrow.svg"
          className="w-full object-center object-contain invert"
          fill
          onClick={nextQuote}
        />
      </div>
    </div>
  );
};

export default Carousel;
