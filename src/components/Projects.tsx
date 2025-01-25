import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const ProjectList = [{
        title: "Ecommerce",
        description: "A sleek, responsive, and user-friendly eCommerce website for makeup products, built with Next.js and Tailwind CSS. This website will showcase various makeup categories (like Eyes,Lips etc.), each featuring multiple products. Users can view products, add product on cart or remove and plus items from their cart, and see a dynamic cart total.",
        by:"Nextjs , TailwindCSS",
        image : "/ecommerce.jpg",
        Url: "https://e-commerce-sigma-tan.vercel.app/"
    },{
        title: "Resume Builder",
        description: "I Build an Interactive Resume Builder using HTML, CSS, and TypeScript, where users can view your resume as an example and create their own personalized resumes. This project will provide a professional and visually appealing interface, allowing users to easily input their details and generate a polished resume.",
        by:"Html , Css",
        image: "/resume.jpg",
        Url: "https://nextjsblogg-ghaniya-khans-projects.vercel.app/"
    },{
        title: "Nextjs Blog",
        description: "I Develop a Next.js Version History Blog using Next.js and Tailwind CSS, where you document each major version of Next.js (from version 1 to 15). This blog will provide a summary of each version's key features, improvements, and changes, along with a detailed setup guide for installing. The site is fully responsive.",
        by:"Html , Css",
        image: "/nextblog.jpg",
        Url: "https://nextjsblogg-ghaniya-khans-projects.vercel.app/"
    },{
        title: "CountDown Timer",
        description: " I Created a Countdown Timer with essential controls for Start, Stop, and Reset functions using Nextjs and Tailwind css. This timer will allow users to set a specific time and then count down until it reaches zero. The design will include a simple, user-friendly interface that displays the remaining time clearly.",
        by:"Nextjs , TailwindCSS",
        image: "/countdown.jpg",
        Url: "https://countdown-timer-nextjs-six.vercel.app/"
    },{
        title: "Protfolio",
        description: "I Created a Simple Portfolio Website using HTML, CSS, and JavaScript. This portfolio will showcase your personal information, skills, projects, and allow visitors to contact you through a form. The contact form will be connected to Google Sheets to collect submissions automatically.",
        by:"Html , Css",
        image: "/protfoliohtml.jpg",
        Url: "https://ghaniya-khan-portfolio.vercel.app/"
    },{
        title: "Protfolio",
        description: "I Develop a Simple Portfolio Website using Next.js and Tailwind CSS. This portfolio will feature sections for introducing yourself, showcasing my skills. It also include a contact form that allows visitors to reach out to me, with messages sent directly to my email. The portfolio is fully responsive.",
        by:"Nextjs , TailwindCss",
        image: "/protfolionextjs.jpg",
        Url: "https://protfolionextjs.vercel.app/"
    },{
        title: "Authantication",
        description: "Implemented secure authentication for a portfolio website using Auth.js, enabling login via OAuth providers like Google. Managed user sessions with JWT for seamless and secure access. Customized authentication flows and UI for an enhanced user experience.",
        by:"Nextjs , TailwindCss , Authjs",
        image: "/auth.jpg",
        Url: "https://milestone4-assignment-kappa.vercel.app/"
    },{
        title: "Beauty Blog Website",
        description: "Developed a beauty blog website with a focus on user engagement and aesthetics. Integrated a dynamic comment section for interactive discussions, enabling users to share feedback and insights. Ensured a responsive and visually appealing design tailored to the beauty niche.",
        by:"Nextjs , TailwindCss",
        image: "/makeupblog.jpg",
        Url: "https://beautyblog3.vercel.app/"
    },{
        title: "Food website",
        description: "Built a food marketplace website using Sanity.io as the CMS for efficient content management. The platform featured product listings, categories, a cart system, and secure checkout. Enabled dynamic inventory management for sellers through an admin dashboard. Designed for responsiveness and a seamless user experience.",
        by:"Nextjs , TailwindCss , Sanity",
        image: "/image.png",
        Url: "https://hackaton-eight-chi.vercel.app/"
    }
];


const Projects = () => {
  return (
    <div className='pt-16 pb-16' id='project'>
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center bg-gradient-to-t bg-clip-text from-purple-500 to-pink-700 text-transparent mb-[50px]'>My Projects</h1>
        <div className='w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center'>
        {ProjectList.map((project , index ) => (
            <div key={index} className='bg-gradient-to-r from-pink-500 via-purple-600 to-purple-600 animate-gradient-xy p-6 rounded-lg hover:scale-105 transition-all duration-300'>
                <Link href={project.Url}>
                <Image src={project.image} alt='img'   width={300} height={200} className='rounded-lg w-[850px] h-[250px] bg-white'/>
                </Link>
                <h1 className="scroll-m-20 text-[24px] font-semibold tracking-tight first:mt-0 bg-clip-text text-white">{project.title}</h1>
                <p className='text-[12px] text-white'>{project.description}</p>

            </div>
        ))}

        </div>
    </div>
  )
}
export default Projects
