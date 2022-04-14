import React from 'react'

function Work() {
  return (
    <div name='project' className='w-full md:h-screen text-gray-300 bg-[#141414]'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#b6a891]'>
          Projects
        </p>
        <p className='py-6'># Check out some of my recent projects</p>
      </div>

{/* Container */}

<section className="md:h-auto flex items-center text-gray-600">


{/* cards */}

<div className="container px-5 mx-auto">
<div className="flex flex-wrap -m-4">
<div className="p-4 sm:w-1/2 lg:w-1/3">
    <div className="h-auto border-2 boder-transparent overflow-hidden">
        <div className="p-6  text-[#b6a891]">
            <h1 className="text-2xl font-semibold mb-3">DigiFarm</h1>
            <p className="leading-relaxed mb-3">Digifarm is a Machine Learning based wheat detection telegram bot based on the analysis of images uploaded by the user. It is build using Pytorch and Telegram Python Library. </p>
            <div className="flex items-center flex-wrap ">
                <a href="https://github.com/okieLoki/DigiFarm"className="text-gray-300 inline-flex items-center md:mb-2 lg:mb-0">Repo Link
                </a>
            </div>
        </div>
    </div>
</div>
<div className="p-4 sm:w-1/2 lg:w-1/3">
    <div className="h-auto border-2 boder-transparent overflow-hidden">
        <div className="p-6  text-[#b6a891]">
            <h1 className="text-2xl font-semibold mb-3">Network Scanner</h1>
            <p className="leading-relaxed mb-3">Network Scanner is a simple ARP scanner which can be used to scan for live hosts in a network. It basically returns the MAC address and IP address of the devices of the same network.</p>
            <div className="flex items-center flex-wrap ">
                <a href="https://github.com/okieLoki/network-scanner"className="text-gray-300 inline-flex items-center md:mb-2 lg:mb-0">Repo Link
                </a>
            </div>
        </div>
    </div>
</div>

<div className="p-4 sm:w-1/2 lg:w-1/3">
    <div className="h-auto border-2 boder-transparent overflow-hidden">
        <div className="p-6  text-[#b6a891]">
            <h1 className="text-2xl font-semibold mb-3">MAC Changer</h1>
            <p className="leading-relaxed mb-3">MAC Address refers to a unique identifier that gets assigned to a NIC. It has a 64/48-bit address linked and connected to the network adapter.The MAC Address can exist in a hexadecimal format.</p>
            <div className="flex items-center flex-wrap ">
                <a href="https://github.com/okieLoki/MAC-Address-Changer"className="text-gray-300 inline-flex items-center md:mb-2 lg:mb-0">Repo Link
                </a>
            </div>
        </div>
    </div>
</div>

</div>
</div>
</section>



    </div>
  </div>
  )
}

export default Work