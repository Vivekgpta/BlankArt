import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons for hamburger/close

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full shadow-pink-100 shadow-xl bg-white">
      <div className="flex justify-between items-center h-20 px-4 lg:px-8">
        {/* Logo */}
        <div className="text-pink-950">
          <h1 className="text-2xl lg:text-4xl font-extrabold">BlankArt</h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex h-12 items-center text-pink-950 shadow-lg gap-10 px-8 rounded-4xl bg-white">
          <Link className="hover:text-[#ff5c8f]" to={"/"}>Home</Link>
          <Link className="hover:text-[#ff5c8f]" to={"/product"}>Product</Link>
          <Link className="hover:text-[#ff5c8f]" to={"/about"}>About</Link>
          <Link className="hover:text-[#ff5c8f]" to={"/contact"}>Contact</Link>
        </div>

        {/* Cart + Login */}
        <div className="hidden lg:flex items-center gap-4">
          <Link>
            <img
              className="h-8"
              src="https://live-in-paints.vercel.app/images/cart-filled.webp"
              alt="cart"
            />
          </Link>
          <div className="text-[#ff5c8f] border-2 px-3 rounded-3xl">
            <Link to={"/contact"}>LogIn</Link>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-pink-950"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="flex flex-col gap-4 px-6 py-4 bg-[#ffedf3] lg:hidden">
          <Link onClick={() => setOpen(false)} className="hover:text-[#ff5c8f]" to={"/"}>Home</Link>
          <Link onClick={() => setOpen(false)} className="hover:text-[#ff5c8f]" to={"/product"}>Product</Link>
          <Link onClick={() => setOpen(false)} className="hover:text-[#ff5c8f]" to={"/about"}>About</Link>
          <Link onClick={() => setOpen(false)} className="hover:text-[#ff5c8f]" to={"/contact"}>Contact</Link>

          {/* Cart + Login for mobile */}
          <div className="flex items-center gap-4 mt-2">
            <Link>
              <img
                className="h-8"
                src="https://live-in-paints.vercel.app/images/cart-filled.webp"
                alt="cart"
              />
            </Link>
            <div className="text-[#ff5c8f] border-2 px-3 rounded-3xl">
              <Link to={"/contact"}>LogIn</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
