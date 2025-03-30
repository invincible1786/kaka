import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className="container">
        <div className="image ">
      <div className="image w-full">
      <Image
        src="/His World Missions.jpeg"  // Ensure the image is placed in the 'public' folder
        alt="Full Width Image"
        width={1600} // You can adjust the width to your preferred size
        height={800} // Adjust the height to maintain aspect ratio
        className="w-full h-auto"  // Full width, automatic height scaling
      />
    </div>
    </div>
        <div className="abt">
            <h2></h2>
            <p></p></div>
        <div className="values">
        <Image
        src="/His World Missions.jpeg"  
        alt="Full Width Image"
        width={1600} 
        height={800} 
        className="w-full h-auto" 
      />
        </div>
        <div className="locations">
  <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
    <div className="card bg-cover bg-center h-64 relative overflow-hidden rounded-lg shadow-lg transform transition-transform hover:scale-105">
      <div className="pic h-full w-full">
        <div className="text absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-xl font-semibold p-4">
          Your Text Here
        </div>
      </div>
    </div>
  </div>
</div>


    </div> 
  ) 
}
 
export default page;
