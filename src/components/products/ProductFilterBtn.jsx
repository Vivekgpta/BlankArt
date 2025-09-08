import React from "react";

const ProductFilterBtn = () => {
  const FilterOptions = [
    "All Products",
    "Cart",
    "Painting",
    "Sketch",
    "Charcole",
    "Pencil Art",
    "Canvas",
  ];

  return (
    <div className="w-full">
      <div className="mt-4 px-4 sm:px-8 lg:px-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 place-items-center">
          {FilterOptions.map((label, index) => (
            <button
              key={index}
              className="hover:bg-[#ff5d8f] hover:text-white px-4 sm:px-5 py-2 rounded-full 
                         bg-white text-[#ff5d8f] border-2 border-[#ff5d8f] 
                         transition-all duration-300 ease-in-out shadow-md 
                         hover:shadow-lg cursor-pointer text-sm sm:text-base"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFilterBtn;
