'use client'
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Carousel = () => {
  // State to track the current index of visible cards
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = 10; // Total number of cards (you can adjust this as needed)

  // Example cards (this can be dynamic data as well)
  const cards = [
    { title: "Card 1", description: "This is the first card." },
    { title: "Card 2", description: "This is the second card." },
    { title: "Card 3", description: "This is the third card." },
    { title: "Card 4", description: "This is the fourth card." },
    { title: "Card 5", description: "This is the fifth card." },  
    { title: "Card 6", description: "This is the sixth card." },
    { title: "Card 7", description: "This is the seventh card." },
    { title: "Card 8", description: "This is the eighth card." },
    { title: "Card 9", description: "This is the ninth card." },
    { title: "Card 10", description: "This is the tenth card." },
  ];

  // Update the index every 3 seconds to slide the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
    }, 3000); // 3 seconds transition time

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex space-x-4">
        <AnimatePresence initial={false}>
          {/* Display 5 cards at a time, slice based on the current index */}
          {cards.slice(currentIndex, currentIndex + 5).map((card, idx) => (
            <motion.div
              key={card.title}
              className="w-1/5 bg-blue-500 text-white text-center p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: 100 }} // Start from the right
              animate={{ opacity: 1, x: 0 }} // Animate to the center
              exit={{ opacity: 0, x: -100 }} // Exit to the left
              transition={{ ease: "easeInOut", duration: 0.5 }} // Transition settings  
            >
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p>{card.description}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Carousel;
