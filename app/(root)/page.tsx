import React from 'react'
import Image from 'next/image'
import Carousel from './components/Carousel';

const page = () => {

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
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-white">
          Where Innovation meets
          <br />
          <span className="block mt-2">Excellence</span>
        </h1>
      </div>
    </div>
  </div>
</div>

      <div className="abt max-w-2xl mx-auto p-6 mt-20 mb-10 ">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-gray-700 mb-4">About Us</h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-500 leading-relaxed text-center">
        At Kakar Fabricators, we forge excellence through unwavering commitment to hard work, superior quality, innovative solutions, and punctual delivery on every project.
        </p>
      </div>

      <div className="flex m-auto justify-center items-center bg-gray-500 w-90 rounded-3xl p-3">
    <p className="font-bold text-white text-xl">In Business since July - 1977</p>
</div>

      <div className="founders px-6 py-8 bg-white">
        <div className="text-center mb-8">
          <h3 className="text-4xl font-bold text-gray-500 tracking-wide uppercase">Founders</h3>
        </div>
  <div className="mt-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
    {[
      { src: "/FO2-removebg-preview (1).png", name: "Shri Malik Natha Ram Kakar" },
      { src: "/FO1-removebg-preview.png", name: "Shri Kasturi Lal Kakar" },
      { src: "/His World Missions.jpeg", name: "Mr Aman Kakar" },
    ].map((item, index) => (
      <div
      key={index}
      className="relative flex flex-col items-center text-center transform transition duration-300 bg-white rounded-2xl overflow-hidden"
    >
      <div className="w-full h-[400px] overflow-hidden rounded-2xl">
        <Image
          src={item.src}
          alt={`Founder ${index + 1}`}
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="w-full h-14 mt-2 bg-opacity-75 text-black py-2">
        <p className="text-lg font-semibold text-gray-500">{item.name}</p>
      </div>
    </div>

    ))}
  </div>
</div>

      <div className="bar">
      
      

      <div className="locations text-center py-8">
    <h2 className="text-3xl font-bold text-gray-500 tracking-wide uppercase">Locations We Cater To</h2>
      </div>
    </div>
   

<main className="h-60 mt-5 flex items-center justify-center bg-gray-100">
<Carousel />
</main>
</div>
  )
}

export default page;
