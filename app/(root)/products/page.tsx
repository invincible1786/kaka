import React from 'react';
import Image from 'next/image';

const ProductCard = ({ image = "d", name = "d", description = "d" }) => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="relative h-60 sm:h-72 lg:h-80">
        <Image 
          src={image} 
          alt={name} 
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 text-center">{name}</h3>
        <p className="text-gray-600 text-center text-sm mt-2">{description}</p>
      </div>
    </div>
  );
};

const Page = () => {
  const products = [
    { image: '/03.jpg', name: 'Hydraulic trailor', description: '' },
    { image: '/p.jpg', name: 'Twin Dust bin hanging', description: '' },
    { image: '/p1.jpg', name: 'Garbage container Dumper type', description: '' },
    { image: '/p2.jpg', name: 'Stainless steel water tanker', description: '' },
    { image: '/p4.jpg', name: 'Rickshaw rehra', description: '' },
    { image: '/p5.jpg', name: 'Dumper placer', description: '' },
    { image: '/p6.jpg', name: 'Cattle lifter', description: '' },
    { image: '/p7.jpg', name: 'Garbage Container', description: '' },
    { image: '/p9.jpg', name: 'Aluminium tiltable tower extension ladder', description: '' },
    { image: '/p10.jpg', name: 'Sky lift', description: '' },
    { image: '/p8.jpg', name: 'Mobile toilet', description: '' }
  ];

  return (
    <div className="max-w-full overflow-x-hidden px-4 sm:px-6"> 
      <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-black text-center p-4 sm:p-6 rounded-2xl shadow-lg tracking-wide uppercase mx-2 sm:mx-4 mb-4">
       The Products We Manufacture
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 p-2 sm:p-6 mx-auto max-w-[2000px]">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Page;
