import React from 'react'
import Image from 'next/image'


const page = () => {

  const products = [
    { image: '/03.jpg', name: 'Product 1', description: 'This is the first product.' },
    { image: '/p.jpg', name: 'Product 2', description: 'This is the second product.' },
    { image: '/p1.jpg', name: 'Product 3', description: 'This is the third product.' },
    { image: '/p2.jpg', name: 'Product 4', description: 'This is the fourth product.' }
  ]
  const Card = ({ text }) => {
    return (
      
      <div className="card bg-cover bg-center h-48 w-72 relative rounded-3xl overflow-hidden shadow-lg transform transition-transform hover:scale-105">
      <div className="text absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-xl font-semibold p-4">
        {text}
      </div>
    </div>
    );
  };

  return (
    <div className="container">
      <div className="cover relative w-full">
  <div className="image w-full overflow-hidden relative">
    <Image
      src="/pexels-pixabay-257643.jpg"
      alt="Full Width Image"
      width={1600}
      height={800}
      className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover"
    />
    <div className="absolute inset-0 flex items-center justify-center text-white">
      <h1 className="text-3xl sm:text-4xl md:text-5xl">Where Innovation meets Excellence</h1>
    </div>
  </div>
</div>

      <div className="abt max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-4xl mt-20 mb-10">
        <h2 className="text-5xl font-semibold text-center text-gray-800 mb-4">About Us</h2>
        <p className="text-2xl text-black leading-relaxed text-center">
        At Kakar Fabricators, we forge excellence through unwavering commitment to hard work, superior quality, innovative solutions, and punctual delivery on every project.
        </p>
      </div>

      <div className="founders px-6 py-12 bg-white">
  <div className="mt-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
    {[
      { src: "/His World Missions.jpeg", name: "Shri Malak Natha Ram Kakar" },
      { src: "/His World Missions.jpeg", name: "Kasturi Lal Kakar" },
      { src: "/His World Missions.jpeg", name: "Aman Kakar" },
    ].map((item, index) => (
      <div
      key={index}
      className="relative flex flex-col items-center text-center transform transition duration-300 bg-white hover:scale-105 hover:shadow-xl hover:bg-gray-50 rounded-2xl overflow-hidden"
    >
      <div className="w-full h-90 overflow-hidden rounded-2xl">
        <Image
          src={item.src}
          alt={`Founder ${index + 1}`}
          width={400}
          height={256}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="w-full h-14 mt-2 bg-opacity-75 text-black py-2">
        <p className="text-lg font-semibold">{item.name}</p>
      </div>
    </div>

    ))}
  </div>
</div>

      <div className="bar">
      
      </div>

      <div className="locations">
      <div className="cards flex gap-6 p-6 overflow-x-auto flex-nowrap">
        <Card text="Your Text Here" />
        <Card text="Another Text Here" />
        <Card text="Another Text Here" />
        <Card text="Another Text Here" />
        <Card text="Another Text Here" />
        <Card text="Another Text Here" />
        <Card text="Another Text Here" />
        <Card text="Another Text Here" />
        <Card text="Another Text Here" />
        <Card text="Another Text Here" />
        <Card text="Another Text Here" />
        <Card text="Another Text Here" />
        <Card text="Another Text Here" />
      </div>
    </div>
    </div>


  )
}

export default page;
