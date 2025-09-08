import React, { useState } from "react";

const products = [
  {
    title: "Paintings & Sketchings",
    price: "₹299",
    img: "/HomeImage/img01.jpg",
  },
  {
    title: "Custom Illustrations",
    price: "₹499",
    img: "https://i.pinimg.com/1200x/89/c5/1b/89c51b8fcd5283f547d9850a1d064aad.jpg",
  },
  {
    title: "Cute Bookmarks",
    price: "₹99",
    img: "https://i.pinimg.com/1200x/c5/64/da/c564da179b192a3bd09afeb75fa29bbd.jpg",
  },
  {
    title: "Wallet Cards",
    price: "₹199",
    img: "https://i.pinimg.com/1200x/79/b3/f5/79b3f59058d979ff543ad36b870a6ab9.jpg",
  },
  {
    title: "Business Cards",
    price: "₹199",
    img: "https://i.pinimg.com/736x/c4/59/f0/c459f0cfd10b8a79459cc14e1ff4d861.jpg",
  },
  {
    title: "Tile Frames",
    price: "₹599",
    img: "https://i.pinimg.com/1200x/20/8c/0e/208c0e660ea15d133311efafd4bc6da7.jpg",
  },
];

const Menu = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX - 90, y: e.clientY + 8 });
  };

  return (
    <div className="px-4 md:px-8 m-4 md:m-6">
      {products.map((product, index) => (
        <div
          key={index}
          className="py-4 border-b flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 font-serif"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setHoveredProduct(product)}
          onMouseLeave={() => setHoveredProduct(null)}
        >
          {/* Text content */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
            <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              {product.title}
            </h1>
            <p className="font-medium text-gray-700">
              Starts from {product.price}
            </p>
          </div>

          {/* Floating image (desktop only) */}
          {hoveredProduct?.title === product.title && (
            <img
              src={product.img}
              alt={product.title}
              className="hidden md:block fixed w-40 h-48 object-cover rounded-lg shadow-lg shadow-pink-300 pointer-events-none transition-transform duration-150"
              style={{
                left: position.x - 10,
                top: position.y + 180,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Menu;
