import React from "react";
import Button from "./Button";

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="flex items-center justify-center bg-white pb-2 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 ease-in-out">
      <div className="w-[280px] sm:w-[320px] md:w-[360px]">
        {/* Image */}
        <img
          src={image}
          alt={name}
          className="w-full h-56 sm:h-64 object-cover rounded-t-2xl transition-transform duration-500 hover:scale-105"
        />

        {/* Content */}
        <div className="pt-4 p-3">
          <h3 className="text-base sm:text-lg font-semibold">{name}</h3>
          <p className="text-gray-500 text-sm sm:text-base font-light mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </p>

          {/* Price + Button */}
          <div className="grid grid-cols-2 items-center mt-3 gap-4">
            <p className="text-pink-500 text-xl sm:text-2xl font-bold">
              {price}
            </p>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
