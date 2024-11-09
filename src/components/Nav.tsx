import React from 'react';
import { IoHome } from "react-icons/io5";
import { GoProject } from "react-icons/go";
import { FaUser } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { MdCall } from "react-icons/md";
import { FaServicestack } from "react-icons/fa";
const Nav = () => {
  return (
    <div className='flex from-purple-700 bg-gradient-to-tr to-pink-500 h-12 lg:px-24 px-[48px] gap-12 lg:gap-32 text-white'>
     <div className="lg:block hidden">
      <h1 className='font-extrabold text-2xl '>Ghaniya khan</h1>
           </div>
     <div className='lg:block hidden'>
        <ul className='flex gap-14 font-extrabold text-white p-2 justify-end px-14 '>
          <li className='cursor-pointer'><a href="#Hero">Home</a></li>
          <li className=' '><a href="#about">About</a></li>
          <li className=''> <a href="#services"> Services </a> </li>
          <li className=''><a href="#skills"> Skills </a></li>
          <li className=''><a href="#project"> Projects </a></li>
          <li className=''><a href="#contact">Contact</a> </li>
        </ul>
      </div>
      <div className='lg:hidden block mt-3'>
        <ul className='flex gap-5 font-extrabold text-white items-center '>
          <li className='hover:text-[#b5d2fd] '><a href="#Hero"><IoHome  className='mt-1'/></a></li>
          <li className=' '><a href="#about"><FaUser className='mt-1'/></a></li>
          <li className=''><a href="#services"><FaServicestack className='mt-1'/></a> </li>
          <li className=''><a href="#skills"><GiSkills className='mt-1' /></a></li>
          <li className=''><a href="#project"><GoProject className='mt-1'/></a></li>
          <li className=''><a href="#contact">< MdCall className='mt-1' /></a></li>
        </ul>
      </div>
    </div>
  )
}
export default Nav
