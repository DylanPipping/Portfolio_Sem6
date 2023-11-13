import React, {useState} from "react";
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/tailwind.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return(
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-r from-red-500 via-orange-500 via-red-500 to-blue-500 text-[#FF8800]">
            <div>
                <img href='/' src={Logo} alt="Logo" style={{width: '50px'}} />
            </div>

            {/*menu*/}
            <ul className="hidden md:flex">
                <li><a href='/'>Home</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/projects'>Projects</a></li>
            </ul>


            {/*Hamburger*/}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/*Mobile menu*/}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-red-500 via-orange-500 via-red-500 to-blue-500 flex flex-col justify-center items-center'}>
                <li className="py-6 text-4xl"><a href='/'>Home</a></li>
                <li className="py-6 text-4xl"><a href='/about'>About</a></li>
                <li className="py-6 text-4xl"><a href='/projects'>Projects</a></li>
            </ul>

            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                        <a href="/" className="flex justify-between items-center w-full text-[#FF8800]">
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                        <a href="/" className="flex justify-between items-center w-full text-[#FF8800]">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
                        <a href="/" className="flex justify-between items-center w-full text-[#FF8800]">
                            E-mail <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#cd4a4a]">
                        <a href="/" className="flex justify-between items-center w-full text-[#FF8800]">
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar