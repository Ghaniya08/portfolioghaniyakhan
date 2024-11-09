"use client";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";


const clientReviews = [
    {
        cname : "Sarah Jenkins",
        star: "",
        description: `“Working with Ghaniya was an absolute pleasure! The project was completed ahead of schedule. Ghaniya’s communication skills and technical expertise truly set them apart.”`,
    },
    {
        cname : "Michael Rodriguez",
        star: "",
        description: `“Ghaniya went above and beyond to deliver outstanding results for our project. Not only were they professional and efficient, . I look forward to working together again!”`,
    },
    {
        cname : "Emma Liu",
        star: "",
        description: `“I’m thrilled with the work Ghaniya did for us! They were responsive, talented, and very knowledgeable. The project was a success, and we couldn’t have done it without Ghaniya’s expertise. 5 stars!”`,
    },
    {
        cname : "David Thompson",
        star: "",
        description: `“Ghaniya delivered exactly what we were looking for. The quality of work was exceptional. I highly recommend Ghaniya to anyone needing top-notch skills and a reliable professional.”`,
    },
    {
        cname : "Linda Perez",
        star: "",
        description: "“Im happier with Ghaniya’s work. They were attentive, adaptable, and really brought our vision to life. The project ran smoothly from start to finish, and the results exceeded our expectations!”",
    },
]
const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1
    }
  };

const Slider = () => {
  return (
   <div id='reviews'>
          <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center bg-gradient-to-t bg-clip-text from-purple-500 to-pink-700 text-transparent mb-[50px]'>Client Reviews</h1>
     <Carousel arrows={true} autoPlay={true} autoPlaySpeed={5000} infinite responsive={responsive} className='lg:mx-28 mx-0'>
        {clientReviews.map((reviews , index) => (
            <div key={index} className='rounded-md  overflow-hidden m-4  from-purple-700 bg-gradient-to-tr to-pink-500 transition-all '>
              <div className='p-6 w-[350px] text-white'>
              <h1><FaQuoteLeft className='text-2xl'/></h1>
              <h1>{reviews.cname}</h1>
              <p>{reviews.description}</p> 
              </div>
            </div>
        ))}
    </Carousel>
   </div>
  )
}

export default Slider
