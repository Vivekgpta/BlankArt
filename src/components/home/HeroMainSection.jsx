import React from 'react'
import { Link } from 'react-router-dom'
import Banner from './Banner'
import { motion } from "framer-motion";

const HeroMainSection = () => {
  return (
   <>

     <div className="w-full lg:min-h-screen h-[280px] mt-6  bg-[#fff8f8] flex flex-col items-center justify-center lg:pb-10 overflow-hidden">
      
      {/* Headings */}
      <motion.div
        className="lg:p-4 lg:mb-4 text-center"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3, delay:2.2 }}
      >
        <h1 className="text-5xl relative md:text-8xl font-bold text-pink-950">
          Blank Art <span className="text-[#ff5c8f] relative">With.</span>
        </h1>
        <motion.h2
          className="text-5xl md:text-8xl font-bold text-pink-950"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 3.2, delay: 2.3, ease: "easeOut" }}
        > <h1 className="text-5xl relative md:text-8xl font-bold text-pink-950">
          <span className="text-[#fcfcfc]">Brilliant</span> Mind.</h1>
        </motion.h2>
      </motion.div>

      {/* Tagline */}
      <motion.p
        className="italic text-lg p-2 text-pink-950 relative text-center max-w-xl font-poppins"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3, delay: 2.6 }}
      >
        Where colors come alive and imagination finds its canvas
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 150, delay: 2.9 }}
      >
        <Link
          to="/product"
          className="bg-[#ff5c8f] relative hover:bg-[#ff4076] transition-all w-38 flex justify-center items-center rounded-3xl text-amber-50 h-12 px-8 lg:m-6 shadow-lg hover:shadow-2xl hover:scale-105 duration-300"
        >
          Shop Now
        </Link>
      </motion.div>

      {/* Banner Component */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3.2, delay: 3.2 }}
        className="w-full"
      >
        <Banner />
      </motion.div>
    </div>
   </>
  )
}

export default HeroMainSection
