import React from 'react'

const layout = ( {children} : { children: React.ReactNode}) => {
  return (
    <div className="cursor-grab">
    <div className=" navbar flex justify-end py-4 px-8">
    <div className="flex">
        <ul className="flex space-x-20 mt-5 mr-10">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">Products</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact Us</li>
        </ul>
    </div>

    </div>
    {children}

    <div className="footer bg-gray-800 text-white py-10 ">
  <div className="container mx-auto px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="left space-y-4">
      <h2 className="text-2xl font-semibold">Company Name</h2>
      <p className="text-sm hover:underline cursor-pointer">Contact Us</p>
      <p className="text-sm">email</p>
      <p className="text-sm">contact</p>
    </div>

    <div className="mid space-y-4">
      <p className="text-lg font-semibold">Quick Links</p>
      <ul className="space-y-2">
        <li className="text-sm hover:underline cursor-pointer">Home</li>
        <li className="text-sm hover:underline cursor-pointer">About</li>
        <li className="text-sm hover:underline cursor-pointer">Products</li>
        <li className="text-sm hover:underline cursor-pointer">Contact Us</li>
      </ul>
    </div>

    <div className="right space-y-4">
      <p className="text-lg font-semibold">Our Services</p>
      <ul className="space-y-2">
        <li className="text-sm hover:underline cursor-pointer">services</li>
        <li className="text-sm hover:underline cursor-pointer">services</li>
        <li className="text-sm hover:underline cursor-pointer">services</li>
        <li className="text-sm hover:underline cursor-pointer">services</li>
        <li className="text-sm hover:underline cursor-pointer">services</li>
      </ul>
    </div>
  </div>

  <div className="apps space-y-4">
    <ul className="flex space-x-10 justify-center mt-8">
      <li className="text-sm hover:text-blue-500 cursor-pointer">insta</li>
      <li className="text-sm hover:text-blue-500 cursor-pointer">insta</li>
      <li className="text-sm hover:text-blue-500 cursor-pointer">insta</li>
      <li className="text-sm hover:text-blue-500 cursor-pointer">insta</li>
    </ul>
  </div>

  <div className="bottomcenter mt-8 text-center text-sm">
    <p className="mb-2">
      <span className="hover:underline cursor-pointer">Terms Of Use</span> | 
      <span className="hover:underline cursor-pointer"> Privacy Policy</span> | 
      <span className="hover:underline cursor-pointer"> Disclaimer</span>
    </p>
    <p>&copy; 2023 Company Name. All rights reserved.</p>
  </div>
</div>
  </div>

  )
}

export default layout;
