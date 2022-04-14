import React from 'react';
import Astro from '../assets/astro.png'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-black text-gray-300 flex flex-row items-center justify-around'>


            <div className='hidden lg:flex'>
                <img src={Astro} alt="Astro" style={{width:'650px'}} className='xl:pl-28'/>
            </div>

            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#b6a891]'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Uddeepta, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolor, odit, officiis ducimus recusandae minus consequuntur quis asperiores, consectetur quidem hic nobis eaque rem harum. Minus facere eligendi repellat vero sint iure magnam. Rerum? Lorem ipsum dolor.</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default About;