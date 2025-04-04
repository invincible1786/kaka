import React from 'react';

const ProductCard = ({ image="d", name="d", description="d" }) => {
  return (
    <div className="w-90 bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:translate-z-2">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-80 object-cover" />
      </div>
      <div className="p-3">
        <h3 className="text-xl font-semibold text-gray-900 flex justify-center">{name}</h3>
        <p className="text-gray-600 text-center text-sm mt-2 flex justify-center">{description}</p>
      </div>
    </div>

  );
};

const Page = () => {
  const products = [
    { image: '/03.jpg', name: 'Product 1', description: 'This is the first product.' },
    { image: '/p.jpg', name: 'Product 2', description: 'This is the second product.' },
    { image: '/p1.jpg', name: 'Product 3', description: 'This is the third product.' },
    { image: '/p2.jpg', name: 'Product 4', description: 'This is the fourth product.' },
    { image: '/p4.jpg', name: 'Product 4', description: 'This is the fourth product.' },
    { image: '/p5.jpg', name: 'Product 4', description: 'This is the fourth product.' },
    { image: '/p6.jpg', name: 'Product 4', description: 'This is the fourth product.' },
    { image: '/p7.jpg', name: 'Product 4', description: 'This is the fourth product.' },
    { image: '/p9.jpg', name: 'Product 4', description: 'This is the fourth product.' },
    { image: '/p10.jpg', name: 'Product 4', description: 'This is the fourth product.' },
    { image: '/p8.jpg', name: 'Product 4', description: 'This is the fourth product.' }
  ];

  return (
    <>
      <div className="text-4xl font-extrabold text-black text-center p-6 rounded-2xl shadow-lg tracking-wide uppercase">
  Here are the Products produced at our esteemed unit  
</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 min-h-screen mb-15">
        
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </>
  );
};

export default Page;
