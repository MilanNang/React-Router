import React from 'react'

function About() {
  return (
    <section className="bg-gray-50 py-12 px-4">
    <div className="container mx-auto flex flex-wrap items-center justify-between">
      {/* Text Content */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Lions</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Lions, often referred to as the "King of the Jungle," are among the most majestic and powerful animals on Earth. 
          Known for their golden coats and powerful roars, lions symbolize courage, strength, and leadership.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Native to Africa, with a small population of Asiatic lions in India’s Gir Forest, these social big cats live in 
          groups called prides, showcasing a unique social structure among felines.
        </p>
      </div>

      {/* Image Content */}
      <div className="w-full md:w-1/2">
        <img
        src='https://media.istockphoto.com/id/537356122/photo/curious-lion.jpg?s=612x612&w=0&k=20&c=rDt9NtKwWCj2NN0Pd2ihN4xjgXBAhzuzuvbmmP_H9Nk='
          alt="Lion in the Wild"
          className="rounded-lg shadow-lg w-full"
        />
      </div>
    </div>
  </section>
  )
}

export default About