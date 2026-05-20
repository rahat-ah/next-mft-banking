import React from 'react'
import { FaUsers, FaEnvelope, FaPhone } from "react-icons/fa"

function ContactUs() {
  return (
    <section 
      className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              Have questions or need support? Reach out to us anytime, we are here to help.
            </p>
            <div className="flex flex-col gap-4 text-gray-700">
              <p className="flex items-center gap-3"><FaPhone className="text-blue-600"/> +8801816-479636</p>
              <p className="flex items-center gap-3"><FaEnvelope className="text-blue-600"/> mdrahatahmedboss@gmail.com</p>
            </div>
          </div>

          <form className="bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-orange-500 text-white font-medium hover:bg-orange-600 transition mt-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
  )
}

export default ContactUs