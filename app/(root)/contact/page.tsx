import React from 'react'

function page() {
    return (
<div className="max-w-screen-xl mx-auto p-6 ">
    <div className="text-center font-bold text-4xl text-gray-800 py-12 uppercase">Get In Touch</div>

    <div className="text-center mb-16">
        <div className="text-lg text-gray-600">Let's Start a Conversation</div>
        <div className="text-base text-gray-500 mt-4">
            Feel free to drop an email. Old-Fashioned phone calls work too.
        </div>
        <div className="flex justify-between mt-10">
            <div className="w-full lg:w-1/3 text-left p-6">
                <ul>
                    <li className="mb-4">
                        <p className="text-gray-1000 font-medium">Number: (123) 456-7890</p>
                    </li>
                    <li className="mb-4">
                        <p className="text-gray-1000 font-medium">Email: contact@company.com</p>
                    </li>
                    <li>
                        <p className="text-gray-5xl font-medium">Location: 123 Main St, City, Country</p>
                    </li>
                </ul>
            </div>

            <div className=" lg:w-2/3 p-6">
                <form className=" p-8 rounded-lg shadow-lg space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="first-name" className="block text-gray-700">First Name</label>
                        <input type="text" id="first-name" name="first-name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="last-name" className="block text-gray-700">Last Name</label>
                        <input type="text" id="last-name" name="last-name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="location" className="block text-gray-700">Location</label>
                        <input type="text" id="location" name="location" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="comments" className="block text-gray-700">Comments</label>
                        <textarea id="comments" name="comments" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300">Send</button>
                </form>
            </div>
        </div>
    </div>
</div>

    );
}

export default page
