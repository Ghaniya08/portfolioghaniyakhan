import React from 'react'

const Contact = () => {
  return (
    <div className=''>
      <div className='flex flex-col justify-center items-center text-purple-700' id='contact'>
      <section className=" body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
    <div className="text-center mb-10">
    <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center bg-gradient-to-t bg-clip-text from-purple-500 to-pink-700 text-transparent'>Contact Me</h1>
      <div className="flex justify-center">
        <div className="w-16 h-1 rounded-full bg-myverydarkpink inline-flex" />
      </div>
    </div>
      <p className="lg:w-2/3 text-purple-700 mx-auto leading-relaxed text-base">
      Interested in joining our team? Send us a message! Feel free to ask any questions or share your thoughts on customizing our website. Id love to hear your feedback!
      </p>
    </div>
    <form  >
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className=" -m-2">
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm ">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gradient-to-r from-pink-500 via-purple-600 to-purple-600 animate-gradient-xy   rounded border  text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-myverydarkpink">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gradient-to-r from-pink-500 via-purple-600 to-purple-600 animate-gradient-xy   rounded border  text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-myverydarkpink"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gradient-to-r from-pink-500 via-purple-600 to-purple-600 animate-gradient-xy   rounded border  text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white  bg-gradient-to-r from-pink-500 via-purple-600 to-purple-600 animate-gradient-xy border-0 py-2 px-8 focus:outline-none hover:bg-myverydarkpink/70 rounded text-lg">
           Send Message
          </button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t  text-center">
          <a className="text-purple-700 cursor-pointer">ghaniyaakhann08@gmail.com</a>
          <p className="leading-normal my-5 text-purple-700">
            Follow me
            <br />
            For more updates 
          </p>
        </div>
      </div>
    </div>
        </form>
  </div>
</section>

      </div>
    </div>
  )
}

export default Contact
