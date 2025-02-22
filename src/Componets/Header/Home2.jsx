import React from 'react'

function Home2() {
  return (
    <>
    <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: 'url(lion18.avif)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-center text-white relative z-10">
          <h2 className="text-4xl font-bold py-20">Experience the Wild Beauty of Lions</h2>
          <p className="text-lg">Embark on an unforgettable safari adventure where you can encounter lions up close in their natural habitat.</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">About Lions</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Lions are magnificent creatures, often referred to as the "King of the Jungle". Found primarily in Africa, they are known for their powerful roars and majestic presence.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">Gallery</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <img src="lion34.jpg" alt="Lion 1" className=" rounded-lg shadow-lg" />
            <img src="lion11.jpg" alt="Lion 2" className="rounded-lg shadow-lg" />
            <img src="lion13.jpg" alt="Lion 3" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 text-white py-16 px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6">Contact Us</h3>
          <p className="text-lg mb-4">We would love to hear from you! Feel free to reach out with any questions or inquiries about your safari adventure.</p>
          <a href="mailto:info@lionsafari.com" className="bg-yellow-500 text-white py-3 px-6 rounded-lg hover:bg-yellow-600 transition">
            Email Us
          </a>
        </div>
      </section>
      </>
  )
}

export default Home2