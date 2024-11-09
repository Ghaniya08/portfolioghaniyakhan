import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaFigma } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const SkillList = [
      {
        title: "Html",
        icon: <FaHtml5/>,
        percentage: "98%"
      },
      {
        title: "CSS",
        icon: <FaCss3Alt/>,
        percentage: "85%"
      },
      {
        title: "Typescript",
        icon: <BiLogoTypescript/>,
        percentage: "85%"
      },
      {
        title: "Javascript",
        icon: <IoLogoJavascript/>,
        percentage: "70%"
      },
      {
        title: "Nextjs",
        icon: < RiNextjsLine />,
        percentage: "70%"
      },
      {
        title: "React",
        icon: <FaReact/>,
        percentage: "50%"
      },
      {
        title: "Figma",
        icon: <FaFigma/>,
          percentage: "75%"
      }, 
      {
        title: "Tailwind Css",
        icon: <RiTailwindCssFill/>,
        percentage: "90%"
      },
]
const Skills = () => {
  return (
    <div className='mt-[100px] mb-[100px]' id='skills'>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center bg-gradient-to-t bg-clip-text from-purple-500 to-pink-700 text-transparent mb-[50px]'>Skills</h1>
      <div className='mt-20  w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center'>
        {SkillList.map((skill , index) => (
          <div key={index} className='p-6 duration-300 from-purple-700 bg-gradient-to-tr to-pink-500 transition-all cursor-pointer text-center rounded-lg bg-gray-100'>
            <h1 className='object-cover mx-auto text-white text-5xl items-center text-center justify-center hover:animate-bounce ml-[80px]'>{skill.icon}</h1>
            <h2 className='text-[15px] font-semibold text-white'>{skill.title}</h2>
            <h1 className='bg-black mt-2 rounded-lg p-2 text-white opacity-40'>{skill.percentage}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
