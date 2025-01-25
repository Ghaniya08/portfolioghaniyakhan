"use client"
import Image from 'next/image'
import React from 'react'
import home from "../../public/home.png"
import Typewriter from 'typewriter-effect'
const Hero = () => {
  return (
    <div className='mb-[135px] lg:mt-[140px]' id='Hero'>
     <div className='lg:flex lg:px-[250px] lg:gap-[50px] px-6 '>
     <div >
        <Image src={home} alt='homepage' width={800} height={800} className=' w-[400px] h-[300px] block lg:hidden'/>
      </div>
     <div className='lg:mt-[50px] -mt-2'>
        <h1 className='scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-5xl bg-gradient-to-t bg-clip-text from-purple-500 to-pink-700 text-transparent'>Ghaniya Khan</h1>
        <h1 className="scroll-m-20 pb-2 text-xl font-semibold tracking-tight first:mt-0 bg-gradient-to-t bg-clip-text from-purple-500 to-pink-700 text-transparent">
            <Typewriter
            options={
                {
                    strings: ['Web Developer' , 'UI/UX designer' , 'Graphic Designer'],
                    autoStart:true,
                    loop:true
                }
            }/>
        </h1>
        <p className='lg:w-[400px] lg:text-[15px] text-[10px] font-semibold bg-gradient-to-t bg-clip-text from-purple-500 to-pink-700 text-transparent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos in dicta enim sequi voluptate nesciunt provident non dolores consectetur magnam nihil, animi necessitatibus maiores deleniti tempore sed vero eos possimus.</p>
      </div>
      <div >
        <Image src={home} alt='homepage' width={800} height={800} className=' w-[400px] h-[300px] lg:block hidden'/>
      </div>
     </div>
     <div className='lg:mt-[20px] mt-2  text-center'>
     <a href=" https://github.com/Ghaniya08">
     <button className='rounded-xl bg-gradient-to-t from-purple-700 to-pink-600 lg:w-[150px] lg:h-[50px] w-[100px] h-[40px] lg:text-[15px] text-[10px] mr-4'>Explore My work</button>
     </a>
     <a href="https://pk.linkedin.com/in/ghaniya-khan-138919308"> 
     <button className='rounded-xl bg-gradient-to-t from-purple-700 to-pink-600 lg:w-[150px] lg:h-[50px] w-[100px] h-[40px] lg:text-[15px] text-[10px] ml-4'>Lets Contact</button>
     </a>
     </div> 
    </div>
  )
}
export default Hero
