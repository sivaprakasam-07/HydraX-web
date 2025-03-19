import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full h-16 bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center max-h-16">
        {/* HydraX Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="src/assets/hydrax-logo.png"
            alt="HydraX Logo"
            className="w-24 h-30  object-contain cursor-pointer"
          />
          <span className="text-2xl font-bold text-blue-600"></span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-semibold">
          <li>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="hover:text-blue-600 cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-blue-600 cursor-pointer"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="features"
              smooth={true}
              duration={500}
              className="hover:text-blue-600 cursor-pointer"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="how-it-works"
              smooth={true}
              duration={500}
              className="hover:text-blue-600 cursor-pointer"
            >
              How It Works
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              smooth={true}
              duration={500}
              className="hover:text-blue-600 cursor-pointer"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="preorder"
              smooth={true}
              duration={500}
              className="hover:text-blue-600 cursor-pointer"
            >
              Pre-Order
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
            <li className="border-b">
              <Link
                to="hero"
                smooth={true}
                duration={500}
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="border-b">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li className="border-b">
              <Link
                to="features"
                smooth={true}
                duration={500}
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
            </li>
            <li className="border-b">
              <Link
                to="how-it-works"
                smooth={true}
                duration={500}
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </Link>
            </li>
            <li className="border-b">
              <Link
                to="testimonials"
                smooth={true}
                duration={500}
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </Link>
            </li>
            <li className="border-b">
              <Link
                to="preorder"
                smooth={true}
                duration={500}
                className="block px-4 py-3 text-gray-700 hover:bg-blue-50 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Pre-Order
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
