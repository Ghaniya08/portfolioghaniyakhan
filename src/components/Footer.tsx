import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='from-purple-700 bg-gradient-to-tr to-pink-500'>
      <footer className="text-white  body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <span className="ml-3 text-xl text-white">Ghaniya Khan</span>
    </a>
    <span className="inline-flex gap-12 text-2xl sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
    <a href="https://pk.linkedin.com/in/ghaniya-khan-138919308"> <FaLinkedin /></a>
    <a href="https://github.com/Ghaniya08"><FaGithubSquare /></a> 
    <a href="https://instagram.com/ghaniya08"><FaInstagramSquare/></a>
    <a href="https://www.facebook.com/profile.php?id=61554662968933&mibextid=ZbWKwL"><FaFacebookSquare/></a>
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer
