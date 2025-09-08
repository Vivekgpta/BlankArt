import React from 'react'
import { motion } from "framer-motion";

const ContactUsHeading = () => {
  return (
    <div className="bg-[#ffedf3] w-full py-16">
      <motion.div
        className="flex flex-col items-center justify-center gap-6 px-4 md:px-16"
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.1 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-pink-950 text-center">
          Get In Touch
        </h1>

        <p className="text-lg sm:text-xl font-poppins text-[#ff5c8f] text-center max-w-2xl">
          "Let's create something beautiful together ✨"
        </p>

        <hr className="w-1/4 md:w-1/6 h-1 bg-[#f5c1d1] border-0 rounded" />
      </motion.div>
    </div>
  )
}

export default ContactUsHeading
