import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import AWS from '../assets/aws.png';
import Github from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';


const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-r from-red-500 via-orange-500 via-red-500 to-blue-500 text-[#ff8800]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-2xl font-bold inline border-b-4 border-[#ff8800]'>About Me</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-lg font-bold'>
                    <p>Hi, I'm Dylan Pipping, nice to meet you. Feel free to look around</p>
                </div>
            </div>
        </div>
        <div name='skills' className='w-full bg-gradient-to-r from-red-500 via-orange-500 via-red-500 to-blue-500'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-2xl py-1 font-bold inline border-b-4 border-[#ff8800]'>Experience</p>
                    <p className='py-4'>These are the technologies I've worked with.</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#9a0000] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                        <p>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#9a0000] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                        <p>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#9a0000] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Javascript} alt="Javacsript icon" />
                        <p>Javascript</p>
                    </div>
                    <div className='shadow-md shadow-[#9a0000] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactImg} alt="ReactImg icon" />
                        <p>React</p>
                    </div>
                    <div className='shadow-md shadow-[#9a0000] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={AWS} alt="AWS icon" />
                        <p>AWS</p>
                    </div>
                    <div className='shadow-md shadow-[#9a0000] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Github} alt="Github icon" />
                        <p>Github</p>
                    </div>
                    <div className='shadow-md shadow-[#9a0000] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                        <p>Tailwind</p>
                    </div>
                </div>
            </div>
        </div>
        <div name='contact' className='w-full h-screen bg-gradient-to-r from-red-500 via-orange-500 via-red-500 to-blue-500 flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/b5f284fe-e6dd-4e7a-9251-88428248803b" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-2xl font-bold inline border-b-4 border-[#ff8800] text-[#ff8800]'>Contact</p>
                    <p className='text-[#ff8800] py-4'>Submit the form below?</p>
                </div>
                <input className='bg-[#ff7272]' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ff7272]' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#ff7272] p-2' name="message" rows="10" placeholder='Message'></textarea>
                <button className='text-[#ff8800] border-2 border-[#ff8800] hover:bg-[#f18100] hover:border-[#f18100] hover:text-[#d30606] px-4 py-3 my-8 mx-auto flex items-center]'>Submit message</button>
            </form>
        </div>
    </div>
  );
};

export default About