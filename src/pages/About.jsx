import React from "react";
// import MotionPathHelper from "gsap-trial/MotionPathHelper";
import { motion } from "framer-motion";
import AboutMeHeading from "../components/about/AboutMeHeading";
import AboutMeCard from "../components/about/AboutMeCard";

const About = () => {
  return (
    <>
    <AboutMeHeading/>
    <AboutMeCard/>
     <div className="w-full min-h-screen flex justify-center items-center bg-[#ffedf3] px-4 sm:px-8 py-12 flex-col">
  <motion.div
    className="w-full max-w-3xl flex justify-center items-center flex-col"
    initial={{ y: 150, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.1 }}
  >
    {/* Heading */}
    <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl p-2 text-pink-950 text-center font-poppins">
      Forever Grateful
    </h1>

    {/* Paragraphs */}
    <p className="m-3 text-pink-950 font-medium text-lg sm:text-xl text-center">
      Forever grateful to the{" "}
      <span className="text-[#ff5c8f]">kind souls who ordered from me</span>{" "}
      when I was just starting out.
    </p>

    <p className="m-3 text-pink-950 font-medium text-lg sm:text-xl text-center">
      When my art was wobbly, messy, and full of baby steps,{" "}
      <span className="text-[#ff5c8f]">you still believed in me.</span>
    </p>

    <p className="m-3 text-pink-950 font-medium text-lg sm:text-xl text-center">
      You're a big part of this journey, and{" "}
      <span className="text-[#ff5c8f]">
        my heart will never forget it.
      </span>
    </p>

    {/* Card */}
    <div className="bg-white shadow-gray-400 shadow-lg w-full sm:w-4/5 flex justify-center text-pink-950 items-center flex-col p-6 sm:p-8 m-8 rounded-3xl">
      <h1 className="text-pink-950 font-serif font-medium font-poppins text-lg sm:text-xl">
        xoxo
      </h1>
      <p className="mt-3 sm:mt-4 text-[#ff5c8f] font-medium text-lg sm:text-xl">
        Rashveen Kaur
      </p>
      <p className="text-sm sm:text-base">(owner of live in paints)</p>
    </div>
  </motion.div>
</div>

    </>
  );
};

export default About;
