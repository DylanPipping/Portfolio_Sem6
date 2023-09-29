import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-gradient-to-r from-red-500 via-orange-500 via-red-500 to-blue-500'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#FF8800]'>My name is</p>
        <h1 className='text-2xl sm:text-5xl font-bold text-[#FF8800]'>Dylan Pipping</h1>
        <h2 className='text-lg sm:text-3xl font-bold text-[#FF8800]'>I'm a Media Designer with an added passion for Game Design</h2>
        <p className='text-[#ff8800] py-4 max-w-[700px]'>
        To know more about me or do you have an interest in the project I made or participated in? Follow one of the to links below.
        </p>
        <div className='flex space-x-3'>
          <button className='bg-[#d30606] text-[#ff8800] group border-2 border-[#ff8800] px-6 py-3 my-2 flex items-center hover:bg-[#e13c3c] hover:border-[#ff8850]'>About Me <span className='group-hover:translate-x-2 duration-300 md:transform-none'><HiArrowNarrowRight className='ml-3' /></span></button>
          <button className='bg-[#d30606] text-[#ff8800] border-2 border-[#ff8800] px-6 py-3 my-2 flex items-center hover:bg-[#e13c3c] hover:border-[#ff8850]'>Projects <span className='group-hover:translate-x-1 duration-300 md:transform-none'><HiArrowNarrowRight className='ml-3' /></span></button>
        </div>
      </div>

    </div>
  )
}

export default Home