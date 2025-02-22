import React from 'react'


function Home() {
  return (
    
    <div className='my-3'>
        <div className='flex '>
            <img className='py-3 my-2 max-h-[500px] max-w-[500px] hover:border-[2px] border-black' src='lion55.jpeg'></img>
            <div className='border-[2px] px-[20px] border-black flex justify-between items-end my-[100px] mx-[50px]'>
                <div className="text-center mb-10">
                    <h1 className="text-5xl font-extrabold text-yellow-800 mb-4">Lioness - Queen of the Jungle</h1>
        
                    <p className="text-lg text-yellow-700">
                        Learn more about lionesses, their habits, and their roles in the pride.
                    </p>
                </div>
            </div>

        </div>
         <div className='flex flex-row-reverse'>    
            <img className='py-3  my-2 max-h-[500px] max-w-[500px] hover:border-[2px] border-black' src='lion2.jpg'></img>
            <div className="max-h-3 my-[110px] mx-[30px] flex flex-wrap  justify-center gap-8 mb-10">
            <div className="border-[2px] px-[20px] border-black bg-yellow-100 p-6 text-center rounded-lg shadow-md w-60">
                <h2 className="text-2xl font-bold text-yellow-800">Population</h2>
                <p className="text-yellow-700 text-lg">620</p>
            </div>
            <div className="border-[2px] px-[20px] border-black bg-yellow-100 p-6 text-center rounded-lg shadow-md w-60">
                <h2 className="text-2xl font-bold text-yellow-800">Pride Size</h2>
                <p className="text-yellow-700 text-lg">10 - 20</p>
            </div>
            <div className="border-[2px] px-[20px] border-black bg-yellow-100 p-6 text-center rounded-lg shadow-md w-60">
                <h2 className="text-2xl font-bold text-yellow-800">Lifespan</h2>
                <p className="text-yellow-700 text-lg">10 - 14 years</p>
            </div>
        </div>
        </div>
        
        <div className=' flex'>
            <img className='py-3 my-2 max-h-[500px] max-w-[500px] hover:border-[2px] border-black' src='lion78.jpg'></img>
            <div className="w-full md:w-1/2 my-[40px] mx-[50px] border-[2px] px-[20px] border-black">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview</h2>
                <p className="text-gray-700 leading-relaxed">
                    The Asiatic Lion (<i>Panthera leo persica</i>) is a lion subspecies found only in the Gir Forest of Gujarat, India. 
                    Unlike their African cousins, Asiatic lions are slightly smaller with a less developed mane.
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-4">
                    <li><span className="font-semibold">Location:</span> Gir Forest National Park, Gujarat, India</li>
                    <li><span className="font-semibold">Population:</span> Approximately 650 in the wild</li>
                    <li><span className="font-semibold">Habitat:</span> Dry deciduous forests, scrublands, and savannahs</li>
                    <li><span className="font-semibold">Diet:</span> Carnivorous – deer, antelope, wild boar</li>
                </ul>
            </div>
        </div>
        <div className='flex justify-end'>
            <img className='py-3 my-2 max-h-[500px] max-w-[500px] hover:border-[2px] border-black' src='lion45.jpg'></img>
            <div className=" mx-[20px] mt-10 border-[2px] px-[20px] border-black">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Conservation Efforts</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                         <h3 className="text-xl font-semibold text-gray-800">Protected Areas</h3>
                        <p className="text-gray-700 mt-2">
                            The Gir Forest National Park is the primary habitat for the Asiatic lion. It provides a safe haven and supports 
                              their population growth.
                        </p>
                    </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800">Community Involvement</h3>
                <p className="text-gray-700 mt-2">
                    Local communities and conservation programs work together to minimize human-lion conflicts and protect their habitat.
                </p>
            </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Global Awareness</h3>
            <p className="text-gray-700 mt-2">
                International organizations and wildlife enthusiasts raise awareness and funding to support Asiatic lion conservation.
            </p>
        </div>
    </div>
  </div>
    </div>
 </div>
 
  )
}

export default Home

