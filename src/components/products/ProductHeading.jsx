import React from 'react'
import { motion } from "framer-motion";

const ProductHeading = () => {
  return (
    <div>
         <div className="px-2 relative ">
        <motion.div
          className="max-w-full   flex justify-center items-center flex-col"
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.03 }}
        >
          <div className="max-w-full  lg:px-16 px-10    bg-[#fff6f9] flex justify-center items-center flex-col lg:gap-5 gap-2">
            <h1 className="lg:text-6xl text-2xl mt-8  font-serif text-pink-950 font-stretch-50% md:text-6xl font-bold">
              Our Products
            </h1>
            {/* <h1 className="text-6xl font-serif text-[#ff5c8f] md:text-6xl font-bold">
              Vivek
            </h1> */}
            <p className="font-serif lg:text-lg text-sm lg:p-2 text-[#ff5c8f] text-center max-w-xl font-poppins">
            
Discover our beautiful collection of custom art


            </p>
            <hr className="w-1/4 h-1 flex justify-center bg-[#f5c1d1]  border-0 rounded " />

          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProductHeading
