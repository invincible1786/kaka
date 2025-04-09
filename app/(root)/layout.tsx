import React from 'react'
import Link from 'next/link';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 bg-black z-50 shadow-md">
        <div className="navbar flex items-center justify-between py-2 px-3 md:px-8">
          <div className="flex items-center">
            <img 
              src="/WhatsApp Image 2025-04-01 at 16.03.32_454a8442.jpg" 
              alt="Logo" 
              className="h-[50px] w-[100px] min-w-[100px] rounded-2l invert mr-10 mt-5" 
            />
          </div>
          
          <div className="flex items-center">
            <ul className="flex items-center space-x-8 md:space-x-20 mr-4 md:mr-10 font-bold text-white text-sm sm:text-base lg:text-lg xl:text-l">
              <Link href="/"><li className="hover:text-blue-500">Home</li></Link>
              <Link href="/products"><li className="hover:text-blue-500">Products</li></Link>
              <Link href="/contact"><li className="hover:text-blue-500 ">Contact</li></Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="bg-white">{children}</div>

        <footer className="bg-gray-800 text-white py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Footer Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {/* Company Info */}
              <div className="text-center md:text-left space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Kakar Fabricators</h2>
                <div className="space-y-2">
                  <p className="text-sm sm:text-base hover:underline cursor-pointer">Contact Us</p>
                  <p className="text-sm sm:text-base">Email - kakar.fabricators@gmail.com</p>
                  <p className="text-sm sm:text-base">Contact - 9417436641</p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="text-center md:text-left space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold">Quick Links</h3>
                <ul className="space-y-2">
                  <Link href="/">
                    <li className="text-sm sm:text-base hover:underline cursor-pointer">Home</li>
                  </Link>
                  <Link href="/products">
                    <li className="text-sm sm:text-base hover:underline cursor-pointer">Products</li>
                  </Link>
                  <Link href="/contact">
                    <li className="text-sm sm:text-base hover:underline cursor-pointer">Contact Us</li>
                  </Link>
                </ul>
              </div>

              {/* Services */}
              <div className="text-center md:text-left space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold">Our Services</h3>
                <ul className="space-y-2">
                  <li className="text-sm sm:text-base hover:underline cursor-pointer">Custom Manufacturing Solution</li>
                  <li className="text-sm sm:text-base hover:underline cursor-pointer">Quality Control and Testing</li>
                  <li className="text-sm sm:text-base hover:underline cursor-pointer">Eco Friendly Manufacturing Processes</li>
                  <li className="text-sm sm:text-base hover:underline cursor-pointer">Precision Engineering</li>
                  <li className="text-sm sm:text-base hover:underline cursor-pointer">Product Development</li>
                </ul>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="pt-8 border-t border-gray-700">
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex items-center space-x-4 text-sm sm:text-base">
                  <span className="hover:underline cursor-pointer">Terms Of Use</span>
                  <span className="hidden sm:inline">|</span>
                  <span className="hover:underline cursor-pointer">Privacy Policy</span>
                  <span className="hidden sm:inline">|</span>
                  <span className="hover:underline cursor-pointer">Disclaimer</span>
                </div>
              </div>
              <div className="text-center mt-4 text-sm sm:text-base">
                <p>&copy; 2025 Kakar Fabricators. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default layout;