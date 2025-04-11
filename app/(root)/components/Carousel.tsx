'use client';

import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Card = {
  id: number;
  src: string;
  caption: string;
};

const rawCards: Card[] = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  src: '/pexels-pixabay-257643.jpg',
  caption: `Card ${i + 1}`,
}));

const CARD_WIDTH = 360; // card width in px
const VISIBLE_CARDS = 4;
const AUTO_SCROLL_DELAY = 3000; // ms

export default function Carousel() {
  const cards = [...rawCards, ...rawCards.slice(0, VISIBLE_CARDS)];

  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex((prev) => prev + 1);
  }, [isAnimating]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex((prev) => prev - 1);
  }, [isAnimating]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleNext, handlePrev]);

  const handleTransitionEnd = () => {
    setIsAnimating(false);
    if (index >= rawCards.length) setIndex(0);
    if (index < 0) setIndex(rawCards.length - 1);
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, AUTO_SCROLL_DELAY);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <div className="w-full bg-gray-100 py-2 mb-10 relative">
      <div className="w-full mx-auto px-4 relative">
        {/* Arrows (absolute on edges) */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-0 -translate-y-1/2 z-10 bg-black p-3 rounded-full shadow "
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-0 -translate-y-1/2 z-10 bg-black p-3 rounded-full shadow"
        >
          →
        </button>

        {/* Carousel */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{ x: -index * (CARD_WIDTH + 16) }} // 16 = gap-4
            transition={{ type: 'tween', duration: 0.5 }}
            onAnimationComplete={handleTransitionEnd}
            style={{ width: cards.length * (CARD_WIDTH + 16) }}
          >
            {cards.map((card) => (
              <div
                key={card.id + '-' + Math.random()}
                className="flex-shrink-0 bg-white rounded-xl shadow overflow-hidden"
                style={{ width: `${CARD_WIDTH}px` }}
              >
                <div className="relative h-40">
                  <Image
                    src={card.src}
                    alt={card.caption}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3 text-center text-gray-700 font-medium h-[60px]">
                  {card.caption}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
