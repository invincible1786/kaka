import React from "react";
import { motion } from "framer-motion";

const Carousel = () => {
  // Array of card data (you can replace this with any content)
  const cards = [
    { id: 1, title: "Card 1", content: "This is the first card" },
    { id: 2, title: "Card 2", content: "This is the second card" },
    { id: 3, title: "Card 3", content: "This is the third card" },
    { id: 4, title: "Card 4", content: "This is the fourth card" },
    { id: 5, title: "Card 5", content: "This is the fifth card" }
  ];

  return (
    <div className="carousel-container overflow-hidden">
      <motion.div
        className="carousel flex"
        animate={{ x: "-100%" }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="card flex-shrink-0 w-64 h-48 m-2 p-4 bg-gray-200 rounded-lg shadow-lg"
          >
            <h3 className="text-lg font-bold">{card.title}</h3>
            <p className="text-sm">{card.content}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
