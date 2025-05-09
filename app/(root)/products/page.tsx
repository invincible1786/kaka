'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, description, index }) => {
  return (
    <motion.div
      className="w-full bg-white rounded-2xl shadow-lg overflow-hidden transform hover:shadow-2xl"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          type: 'tween',
          ease: 'easeOut',
          duration: 0.8,
          delay: index * 0.08,
        },
      }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="relative h-60 sm:h-72 lg:h-80 px-0 py-30">
        <Image
          src={image}
          alt={name}
          fill
          className={`${name === 'Tractor operated shrub cutter' || name === 'Truck fitted water tanker' ? 'object-contain' : 'object-cover'}`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 text-center">{name}</h3>
        <p className="text-gray-600 text-center text-sm mt-2">{description}</p>
      </div>
    </motion.div>
  );
};

const Page: React.FC = () => {
  const products = [
    { image: '/03.jpg', name: 'Hydraulic trailor', description: '' },
    { image: '/p.jpg', name: 'Twin Dust bin hanging', description: '' },
    { image: '/p1.jpg', name: 'Garbage container Dumper type', description: '' },
    { image: '/p2.jpg', name: 'Stainless steel water tanker', description: '' },
    { image: '/p4.jpg', name: 'Rickshaw rehra', description: '' },
    { image: '/p5.jpg', name: 'Dumper placer', description: '' },
    { image: '/p6.jpg', name: 'Cattle lifter', description: '' },
    { image: '/p7.jpg', name: 'Garbage Container', description: '' },
    { image: '/p9.jpg', name: 'Aluminium tiltable tower extension ladder', description: '' },
    { image: '/p10.jpg', name: 'Sky lift', description: '' },
    { image: '/p8.jpg', name: 'Mobile toilet', description: '' },
    { image: '/P11.jpg', name: 'Truck fitted water tanker', description: '' },
    { image: '/P12.jpg', name: 'Tractor operated shrub cutter', description: '' },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-200">
      <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-500 text-center p-4 sm:p-6 rounded-b-2xl shadow-lg tracking-wide uppercase bg-white">
        The Products We Manufacture
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-8 mx-auto container">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Page;
