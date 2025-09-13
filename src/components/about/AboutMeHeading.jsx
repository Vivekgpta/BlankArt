import React from "react";
import { motion } from "framer-motion";

const AboutMeHeading = () => {
  return (
    <div className="bg-[#fefaf7] py-12">
      <motion.div
        className="flex flex-col items-center justify-center px-6 md:px-16 text-center"
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.1 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-pink-950 font-bold leading-snug">
          Hi, I am founder of Blank Art,
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#ff5c8f] font-bold mt-2">
          Vivek
        </h1>

        <hr className="w-24 h-1 bg-[#f5c1d1] border-0 rounded my-6" />

        <p className="font-serif text-base sm:text-lg md:text-xl text-[#ff5c8f] max-w-xl">
          "Living in my delusional little colourful world ✨"
        </p>
      </motion.div>
    </div>
  );
};

export default AboutMeHeading;

