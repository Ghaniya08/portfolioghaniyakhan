"use client"
import Image from 'next/image'
import React from 'react'
import home from "../../public/home.png"
import Typewriter from 'typewriter-effect'
import { PiButterflyLight } from "react-icons/pi";
import AnimationComp from './AnimationComp'

const Hero = () => {
  return (
    <div className='mb-[135px] lg:mt-[140px]' id='Hero'>
     <AnimationComp size={800} rotation={-72}>
        <PiButterflyLight className='size-16 text-pink-700/80 animate-bounce lg:block hidden'/>
      </AnimationComp>
      <AnimationComp size={770} rotation={-35}>
        <PiButterflyLight className='size-12 text-pink-700 animate-bounce lg:block hidden'/>
      </AnimationComp>
      <AnimationComp size={590} rotation={98}>
        <PiButterflyLight className='size-8 text-pink-700/20 animate-bounce lg:block hidden'/>
      </AnimationComp>
      <AnimationComp size={430} rotation={-14}>
        <PiButterflyLight className='size-8 text-pink-700/20 animate-bounce lg:block hidden'/>
      </AnimationComp>
      <AnimationComp size={440} rotation={79}>
        <PiButterflyLight className='size-5 text-pink-700 animate-bounce lg:block hidden'/>
      </AnimationComp>
      <AnimationComp size={530} rotation={180}>
        <PiButterflyLight className='size-10 text-pink-700 animate-bounce lg:block hidden'/>
      </AnimationComp>
      <AnimationComp size={780} rotation={148}>
        <PiButterflyLight className='size-14 text-pink-700 animate-bounce lg:block hidden'/>
      </AnimationComp>
      <AnimationComp size={420} rotation={105}>
        <div className='size-[14px] bg-pink-700/30 rounded-full lg:block hidden '/>
      </AnimationComp>
      <AnimationComp size={520} rotation={0}>
        <div className='size-[10px] bg-pink-700/30 rounded-full lg:block hidden '/>
      </AnimationComp>
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
     <div className='lg:-mt-[380px] mt-7  text-center'>
      <button className='rounded-xl bg-gradient-to-t from-purple-700 to-pink-600 lg:w-[150px] lg:h-[50px] w-[100px] h-[40px] lg:text-[15px] text-[10px] mr-4'>Explore My work</button>
      <button className='rounded-xl bg-gradient-to-t from-purple-700 to-pink-600 lg:w-[150px] lg:h-[50px] w-[100px] h-[40px] lg:text-[15px] text-[10px] ml-4'>Lets Contact</button>
     </div> 
    </div>
  )
}
export default Hero
