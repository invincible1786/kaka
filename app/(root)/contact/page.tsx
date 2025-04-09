'use client';
import React from 'react'

const page = () => {
    return (
        <div className="max-w-screen-xl mx-auto p-4 sm:p-6">
            <div className="text-center font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-800 py-8 sm:py-12 uppercase">
                Get In Touch
            </div>

            <div className="text-center mb-12 sm:mb-16">
                <div className="text-base sm:text-lg text-black">Let&apos;s Start a Conversation</div>
                <div className="text-sm sm:text-base text-black mt-4">
                    Feel free to drop an email. Old-Fashioned phone calls work too.
                </div>
                <div className="flex flex-wrap justify-center mt-8 sm:mt-10">
                    <div className="w-full sm:w-2/3 lg:w-1/2 xl:w-1/3 p-4 sm:p-6">
                        <ul className="space-y-4 sm:space-y-6">
                            <li className="flex transition-transform duration-300 ease-in-out transform hover:scale-105 bg-blue-900 text-white p-3 sm:p-4 rounded-lg shadow-md justify-center">
                                <p className="text-base sm:text-xl lg:text-2xl break-words">Number: 9417436641</p>
                            </li>
                            <li className="flex justify-center transition-transform duration-300 ease-in-out transform hover:scale-105 bg-blue-900 text-white p-3 sm:p-4 rounded-lg shadow-md">
                                <p className="text-base sm:text-xl lg:text-2xl break-words">Email: kakar.fabricators@gmail.com</p>
                            </li>
                            <li className="flex justify-center transition-transform duration-300 ease-in-out transform hover:scale-105 bg-gray-400 text-white p-3 sm:p-4 rounded-lg shadow-md">
                                <p className="text-base sm:text-xl lg:text-2xl break-words">Location: 123 Main St, City, Country</p>
                            </li>
                        </ul>
                        
                        <button
                            onClick={() => window.open('https://forms.gle/wR8JfQmukqwNqMC4A', '_blank')}
                            className="w-full sm:w-auto mt-6 bg-blue-900 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300 text-sm sm:text-base"
                        >
                            Contact Us Form
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page