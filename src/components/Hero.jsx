import { motion } from "framer-motion";
// import bottleImage from "../assets/hydrax-bottle.png";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white text-center p-6">
      {/* Hero Text */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl"
      >
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          Cooler Hotter Smarter
        </h1>
        <p className="text-lg opacity-80 mb-6">
          Experience the future of hydration with temperature control and smart
          tracking.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-blue-100 transition"
        >
          Order Now
        </motion.button>
      </motion.div>

      {/* Floating Bottle */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="mt-10"
      >
        {/* <img
          src={bottleImage}
          alt="HydraX Bottle"
          className="w-48 md:w-64 mx-auto drop-shadow-lg"
        /> */}
      </motion.div>
    </div>
  );
};

export default Hero;
