import { div } from 'framer-motion/client';
import React from 'react'
import {FaYoutube , FaCode , FaDesktop , FaBook} from "react-icons/fa";
const SerList = [
    {
        icon : <FaCode/>,
        skill: "𝐖𝐞𝐛 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭",
        description: "As a skilled web developer, I craft robust, scalable, and efficient web applications that meet your business needs. With expertise in HTML, CSS, and JavaScript, I deliver high-quality solutions that drive results. From e-commerce platforms to custom web applications, I ll help you achieve your online goals."
    },{
        icon : <FaYoutube/>,
        skill: "𝐌𝐚𝐤𝐢𝐧𝐠 𝐓𝐡𝐮𝐦𝐛𝐧𝐚𝐢𝐥",
        description: "As a skilled thumbnail maker, I create eye-catching and engaging thumbnails that capture the essence of your content. My thumbnails are designed to increase click-through rates and drive more traffic to you website. With my expertise, you can elevate your brand s online presence and make a lasting"
    },
    {
        icon :<FaDesktop/>,
        skill: "𝐔𝐈/𝐔𝐗 𝐃𝐞𝐬𝐢𝐠𝐧𝐢𝐧𝐠",
        description: "As a seasoned UI/UX designer, I specialize in creating intuitive and user-centered interfaces that enhance user experience. My designs are tailored to meet your business goals and ensure seamless interactions between your users and your digital products. From wireframing to prototyping, I ll work closely with you to bring your vision to life."
    },
    {
        icon : <FaBook/>,
        skill: "𝐂𝐨𝐧𝐭𝐞𝐧𝐭 𝐖𝐫𝐢𝐭𝐢𝐧𝐠",
        description: "With my content writing services, I produce high-quality, engaging, and informative content that resonates with your target audience. Whether you need blog posts, articles, website content, or social media posts, I ll craft compelling stories that drive results. My content is optimized for SEO, ensuring your brand s online visibility and credibility."
    },

]
const Services = () => {
  return (
    <div className='pt-16 pb-16 mt-[50px] ' id='services'>
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center bg-gradient-to-t bg-clip-text from-purple-500 to-pink-700 text-transparent mb-[50px]'>My Services</h1>
     <div className='w-[80%] mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-12 items-center'>
     {SerList.map((service , index )=>(
       <div key={index} className='bg-gradient-to-r from-pink-500 via-purple-600 to-purple-600 animate-gradient-xy p-6 rounded-lg hover:scale-105 transition-all duration-300'>
          
            <h1 className='text-white text-3xl md:ml-2 md:mb-2'>{service.icon}</h1>
            <h1 className="text-white text-2xl mb-2 font-semibold">{service.skill}</h1>
            <p className='text-white'>{service.description}</p>
           
        </div>
      ))}
     </div>
    </div>
  )
}

export default Services
