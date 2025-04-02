import React from 'react'
import Link from 'next/link';

const layout = ( {children} : { children: React.ReactNode}) => {
  return (
    <div className="cursor-grab">
    <div className="cursor-grab">
    <div className="navbar flex justify-between py-4 px-8">
        <div className="flex items-center">

            <img src="/WhatsApp Image 2025-04-01 at 16.03.32_454a8442.jpg" alt="Logo" className="h-15 w-30 rounded-2l invert mr-5" />
        </div>
        
        <div className="flex">
            <ul className="flex space-x-20 mt-5 mr-10">
            <Link href="/home"><li className="hover:text-blue-500">Home</li> </Link>
            <Link href="/products"><li className="hover:text-blue-500">Products</li></Link>
            <Link href="/contact"><li className="hover:text-blue-500">Contact Us</li></Link>
            </ul>
        </div>
    </div>
</div>

    <div className="bg-white">
    {children}
    </div>
    <div className="footer bg-gray-800 text-white py-10 ">
  <div className="container mx-auto px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="left space-y-4">
      <h2 className="text-2xl font-semibold">Kakar Fabricators</h2>
      <p className="text-sm hover:underline ">Contact Us </p>
      <p className="text-sm">Email - kakar.fabricators@gmail.com</p>
      <p className="text-sm">contact - 9417436641</p>
    </div>

    <div className="mid space-y-4">
      <p className="text-lg font-semibold">Quick Links</p>
      <ul className="space-y-2">
      <Link href="/home"><li className="text-sm hover:underline mt-5">Home</li></Link>
      <Link href="/products"><li className="text-sm hover:underline mt-5">Products</li></Link>
      <Link href="/contact"><li className="text-sm hover:underline mt-5">Contact Us</li></Link>
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
      <li className="text-sm hover:text-blue-500 "></li>
      <li className="text-sm hover:text-blue-500 "></li>
      <li className="text-sm hover:text-blue-500 "></li>
      <li className="text-sm hover:text-blue-500 "></li>
    </ul>
  </div>

  <div className="bottomcenter mt-8 text-center text-sm">
    <p className="mb-2">
      <span className="hover:underline cursor-pointer">Terms Of Use</span> | 
      <span className="hover:underline cursor-pointer"> Privacy Policy</span> | 
      <span className="hover:underline cursor-pointer"> Disclaimer</span>
    </p>
    <p>&copy; 2025 Company Name. All rights reserved.</p>
  </div>
</div>
  </div>

  )
}

export default layout;
