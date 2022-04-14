import React from 'react';
import Astro from '../assets/astro.png'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#141414] text-gray-300 flex flex-row items-center justify-around'>


            <div className='hidden lg:flex'>
                <img src={Astro} alt="Astro" style={{width:'650px'}} className='animate-bounce xl:pl-28'/>
            </div>

            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#b6a891]'>
                            About Me
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Uddeepta, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>I am a Computer Science Engineeing student at Thapar Institue of Engineering and Technology, Patiala.I like to explore different domains to tech. Being a aspiring software developer, I have my interests in Cyber Security and Mobile App development. Curently I am learning MERN stack for Web development and React Native for App developer.</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default About;