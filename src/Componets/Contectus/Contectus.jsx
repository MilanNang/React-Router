import React from 'react'

function Contectus() {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">Contact Us</h2>
        <p className="text-center text-gray-600 mb-8">
          Have questions about your visit to the lion safari? We'd love to hear from you. Fill out the form below and we’ll get back to you soon.
        </p>

        {/* Contact Form */}
        <form className="bg-white shadow-md rounded-lg p-8">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Write your message here..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-bold py-3 rounded-lg hover:bg-yellow-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contectus
