import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { Link } from 'react-scroll';

function Navbar() {

    const [nav, setNav] = useState(false)
    const handleClick = () => {
        setNav(!nav)
    }
    return (
        <>
            <div className='fixed w-full h-[75px] flex justify-between items-center px-3 bg-black text-white'>
                {/* navbar logo */}
                <div>
                    <img src={Logo} alt="Logo" style={{ width: '50px' }} />
                </div>
                <ul className='hidden md:flex'>
                    <li><Link to='home' smooth={true} duration={500}>Home</Link></li>
                    <li><Link to='about' smooth={true} duration={500}>About</Link></li>
                    <li><Link to='skills' smooth={true} duration={500}>Skills</Link></li>
                    <li><Link to='project' smooth={true} duration={500}>Projects</Link></li>
                    <li><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
                </ul>
                {/* Hamburger menu*/}
                <div onClick={handleClick} className='md:hidden z-10'>
                    {!nav ? <FaBars></FaBars> : <FaTimes></FaTimes>}
                </div>

                {/* mobile view menu */}
                <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='project' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
            </div>
            {/* social media icons */}
            <div className='hidden xl:flex fixed flex-col top-[35%] left-5 text-[#b6a891]'>
                <ul>
                    <li className='w-[60px] h-[60px] flex justify-between items-center bg-gray-800'><a href="https://www.linkedin.com/in/uddeeptaraajkashyap/" className='flex justify-between items-center w-full text-[#b6a891]'><FaLinkedin size={30} /></a></li>
                </ul>
                <ul>
                    <li className='w-[60px] h-[60px] flex justify-between items-center bg-gray-800'><a href="https://github.com/okieLoki" className='flex justify-between items-center w-full text-[#b6a891]'><FaGithub size={30} /></a></li>
                </ul>
                <ul>
                    <li className='w-[60px] h-[60px] flex justlify-between items-center bg-gray-800'><a href="mailto:uddeeptaraajkashyap@gmail.com" className='flex justify-between items-center w-full text-[#b6a891]'><HiOutlineMail size={30} /></a></li>
                </ul>
                <ul>
                    <li className='w-[60px] h-[60px] flex justify-between items-center bg-gray-800'><a href="https://twitter.com/UddeeptaK" className='flex justify-between items-center w-full text-[#b6a891]'><FaTwitter size={30} /></a></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar