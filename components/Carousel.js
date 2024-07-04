"use client";

import { useState } from "react";
import QuoteCard from "./QuoteCard";

const Carousel = ({}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const quotes = [
    {
      text: "The only limit to our realization of tomorrow is our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    {
      text: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
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
    <div className="carousel">
      <button onClick={prevQuote} className="carousel_button">
        Previous
      </button>
      <QuoteCard quote={quotes[currentIndex]} />
      <button onClick={nextQuote} className="carousel_button">
        Next
      </button>
    </div>
  );
};

export default Carousel;
