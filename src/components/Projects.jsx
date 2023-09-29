import React from 'react'
import WhatTheKana from '../assets/Projects/Kana.png'
import Frontyr from '../assets/Projects/frontyr.jpg'
import MyEasy from '../assets/Projects/Huistijl.jpg'
import Kosen from '../assets/Projects/1.png'
import KindRegards from '../assets/Projects/owl.png'
import Alfheim from '../assets/Projects/3.jpg'
import Character from '../assets/Projects/4.jpg'
import Endgame from '../assets/Projects/gun.png'

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-[#ff8800] bg-gradient-to-r from-red-500 via-orange-500 via-red-500 to-blue-500'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-2xl font-bold inline border-b-4 text-[#ff8800] border-[#ff8800]'>Projects</p>
                <p className='py-6'>// Check out some of the projects I've done and/or contributed on.</p>
            </div>
{/*Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* Card item */}
                <div style={{backgroundImage: `url(${WhatTheKana})`}} className='shadow-lg shadow-[#9a0000] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-lg font-bold text-[#d30606] tracking-wider'>
                            WhatTheKana?
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#d30606] text-[#ff8800] font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#D30606] text-[#ff8800] font-bold text-lg'>Project</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Frontyr})`}} className='shadow-lg shadow-[#9a0000] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-lg font-bold text-[#d30606] tracking-wider'>
                            Frontyr
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#d30606] text-[#ff8800] font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#D30606] text-[#ff8800] font-bold text-lg'>Project</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Card item */}
                <div style={{backgroundImage: `url(${MyEasy})`}} className='shadow-lg shadow-[#9a0000] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-lg font-bold text-[#d30606] tracking-wider'>
                            MyEasyWebshop
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#d30606] text-[#ff8800] font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#D30606] text-[#ff8800] font-bold text-lg'>Project</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Kosen})`}} className='shadow-lg shadow-[#9a0000] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-lg font-bold text-[#d30606] tracking-wider'>
                            Kosen
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#d30606] text-[#ff8800] font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#D30606] text-[#ff8800] font-bold text-lg'>Project</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Card item */}
                <div style={{backgroundImage: `url(${KindRegards})`}} className='shadow-lg shadow-[#9a0000] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-lg font-bold text-[#d30606] tracking-wider'>
                            KindRegards
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#d30606] text-[#ff8800] font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#D30606] text-[#ff8800] font-bold text-lg'>Project</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Alfheim})`}} className='shadow-lg shadow-[#9a0000] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-lg font-bold text-[#d30606] tracking-wider'>
                            Alfheim Personal Project
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#d30606] text-[#ff8800] font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#D30606] text-[#ff8800] font-bold text-lg'>Project</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Card item */}
                <div style={{backgroundImage: `url(${Character})`}} className='shadow-lg shadow-[#9a0000] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-lg font-bold text-[#d30606] tracking-wider'>
                            3D Character Model
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#d30606] text-[#ff8800] font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#D30606] text-[#ff8800] font-bold text-lg'>Project</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Endgame})`}} className='shadow-lg shadow-[#9a0000] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-lg font-bold text-[#d30606] tracking-wider'>
                            Endgame Personal Project
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#d30606] text-[#ff8800] font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#D30606] text-[#ff8800] font-bold text-lg'>Project</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects