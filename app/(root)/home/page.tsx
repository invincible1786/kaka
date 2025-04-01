import React from 'react'
import Image from 'next/image'


const page = () => {

  const Card = ({ text }) => {
    return (
      <div className="card bg-cover bg-center h-50 w-90 relative overflow-hidden rounded-3xl shadow-lg transform transition-transform hover:scale-105">
        <div className="text absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-xl font-semibold p-4">
          {text}
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="cover relative w-full">
        <div className="image w-full overflow-hidden">
            <Image
              src="/His World Missions.jpeg"
              alt="Full Width Image"
              width={1600}
              height={800}
              className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover"
            />
        </div>
      </div>


      <div className="abt max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-4xl mt-20 mb-20">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">About Us</h2>
        <p className="text-lg text-gray-600 leading-relaxed text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, eum similique atque tempore facere repellendus tenetur molestias sint ea sed excepturi cupiditate, perferendis quibusdam accusamus asperiores officiis veritatis aliquam cum!
        </p>
      </div>

      <div className="founders px-6 py-12 bg-gray-100">
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {["/His World Missions.jpeg", "/His World Missions.jpeg", "/His World Missions.jpeg", "/His World Missions.jpeg"].map((src, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-50 rounded-lg overflow-hidden"
            >
              <div className="w-full h-64 overflow-hidden">
                <Image
                  src={src}
                  alt={`Founder ${index + 1}`}
                  width={400}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 w-full bg-opacity-75 bg-gray-900 text-white py-2 transition-all duration-300 opacity-0 hover:opacity-100">
                <p className="text-lg font-semibold">Founder {index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bar">
      
      </div>

      <div className="locations">
      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
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
      </div>
    </div>
    </div>


  )
}

export default page;
