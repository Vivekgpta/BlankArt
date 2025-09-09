import React from "react";
import { Link } from "react-router-dom";

const AboutJourney = () => {
  return (
    <div className="w-full max-h-full bg-[#ffedf3] flex flex-col lg:flex-row justify-around items-center lg:items-stretch">
      
      {/* Left Side (Image + Name) */}
      <div className="bg-[#ffd6e5] m-6 shadow-black shadow-2xl rounded-4xl w-[90%] lg:w-1/2 h-full p-6">
        <img
          className="w-full rounded-4xl h-64 sm:h-80 lg:h-full object-cover hover:scale-105 transition-all duration-300 ease-in-out"
          src="
https://img.freepik.com/premium-photo/man-wearing-glasses-shirt-that-says-he-is-smiling_984237-62020.jpg"
          alt="journey"
        />
        <div className="mt-4 font-medium italic text-xl sm:text-2xl">
          <h3 className="m-2 text-[#390f0f] flex justify-center">Vivek Gupta</h3>
        </div>
      </div>

      {/* Right Side (Text + Button) */}
      <div className="w-[90%] lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
        <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl font-serif text-[#390f0f] mx-4">
          Every
        </h1>
        <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl font-serif text-[#390f0f] mx-4">
          Masterpiece
        </h1>
        <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl font-serif text-[#390f0f] m-3">
          Has a Beginning –
        </h1>

        <div className="flex flex-col items-center lg:items-start">
          <p className="font-medium text-lg sm:text-xl italic text-[#ff5d8f] m-4">
            Click below to see mine!
          </p>
          <div className="bg-white border-2 border-[#ff5d8f] p-2 mt-4 w-40 sm:w-48 h-12 flex justify-center items-center rounded-4xl hover:bg-[#ff5d8f] hover:scale-105 transition-all duration-300 ease-in-out">
            <Link
              to={"/about"}
              className="text-[#ff5d8f] font-semibold hover:text-white"
            >
              How It All Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutJourney;

