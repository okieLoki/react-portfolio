import React from 'react'
import { BsCloudDownload } from "react-icons/bs";
import Astro from '../assets/astro.png'
import Mac from '../assets/Macintosh.png'

function Home() {
  return (
    <div name='home' className='w-full h-screen bg-black'>

    {/* container */}

    <div className='flex flex-row items-center h-full justify-around'>

        

    <div className='max-w-[1000px] mx-auto px-10 flex flex-col justify-center items-justify h-full xl:pl-28'>
        <p className='text-[#b6a891] text-xl font-bold'>Hola Amigos! </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-gray-100 py-4'>Uddeepta Kashyap</h1>
        <h2 className='text-3xl sm:text-5xl font-bold text-gray-400 py-4'>A budding full-stack developer.</h2>
        <p className='text-gray-500 py-4 max-w-[700px]'>Someone who loves to code and explore different tech domains &lt;3 </p>
        <div className='bg-[#b6a891] text-black border-2 border-[#b6a891] px-6 py-3 my-2 flex items-center max-w-[225px]  hover:border-[#b6a891] hover:bg-black hover:text-[#b6a891]'>
            <button><a href="https://drive.google.com/file/d/1YwssrF3vLzLcLYS87oyI2zZmfmPvZuSY/view">Download Resume</a></button>
            <BsCloudDownload className='ml-3'/>
        </div>
    </div>

    <div className='hidden lg:flex'>
        <img src={Mac} alt="astro" style={{width: '480px'}} className='mr-60'/>
    </div>

    </div>

    </div>
  )
}

export default Home