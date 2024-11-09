import Image from 'next/image'
import React from 'react'
import imgg from "../../public/imgg.jpg"
const About = () => {
  return (
    <div  className='justify-center lg:px-0 px-6 items-center mt-[100px] mb-[130px]' id='about'>
      <div >
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center bg-gradient-to-t bg-clip-text from-purple-500 to-pink-700 text-transparent mb-[50px]'>About Me</h1>
      <div className='lg:w-[800px] lg:ml-[280px] lg:h-[350px] rounded-lg  inset-0 bg-gradient-to-r from-pink-500 via-purple-600 to-purple-600 animate-gradient-xy  border'>
             <section className="text-white body-font">
  <div className="container px-5 mx-auto flex flex-col">
    <div className="mx-auto">
      <div className="flex flex-col sm:flex-row ">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="w-20 h-20 mt-5 rounded-full inline-flex items-center justify-center bg-gray-200">
            <Image src={imgg} alt="" className='w-20  h-20 rounded-full'/>
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-1 text-white text-lg">
             Ghaniya Khan
            </h2>
            <div className="lg:w-12 lg:h-1 bg-white mt-1 rounded mb-2 " />
            <p className="lg:text-base text-[13px]">
            Developer with expertise in frontend and UI/UX. Exploring Next.js and cloud computing, driven to make an impact in tech.
            </p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-white -mb-9 sm:border-t-0 border-t  sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed lg:text-lg text-[13px] text-white ">
            Hey everyone, I'm Ghaniya Khan, a 17-year-old developer with a passion for technology and a solid foundation in both frontend and backend development, along with UI/UX design. I'm skilled in HTML, CSS, JavaScript, and TypeScript, and currently exploring Next.js and React. I'm driven to grow, especially in cloud computing and AI, with a goal to become a cloud engineer. I enjoy collaborating on projects and sharing knowledge, aiming to make a positive impact in tech while learning and mentoring others.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
      </div>
    </div>
  )
}

export default About
