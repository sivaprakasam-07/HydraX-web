import { motion } from "framer-motion";
import Navbar from "./Navbar";
// import bottleImage from "../assets/hydrax-bottle.png";

const Hero = () => {
  return (
    <div id="hero" className="relative">
      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div
        className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] 
        relative flex flex-col items-center justify-center text-white text-center p-6 overflow-hidden"
      >
        {/* Glassmorphism Effect */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[120px] rounded-xl pointer-events-none"></div>

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-72 h-72 bg-purple-500 rounded-full opacity-20 blur-3xl top-1/4 left-1/4 animate-pulse"></div>
          <div className="absolute w-60 h-60 bg-blue-500 rounded-full opacity-20 blur-3xl bottom-1/4 right-1/4 animate-pulse delay-200"></div>
        </div>

        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-purple-500 drop-shadow-xl">
            Cooler. Hotter. Smarter.
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 text-gray-200">
            Redefining hydration with cutting-edge technology and intelligent temperature control.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-xl hover:shadow-2xl hover:from-purple-600 hover:to-blue-500 transition-all duration-300"
          >
            Pre-Order Now
          </motion.button>
        </motion.div>

        {/* Floating Bottle */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="mt-12 relative z-10"
        >
          {/* <img
            src={bottleImage}
            alt="HydraX Bottle"
            className="w-56 md:w-72 mx-auto drop-shadow-2xl"
          /> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
