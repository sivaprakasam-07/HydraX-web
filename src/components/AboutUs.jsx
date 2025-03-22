import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="bg-black py-16 px-6 lg:px-24 text-center text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-6 text-gray-200">About Us</h2>
        <p className="text-lg mb-4 text-gray-400 leading-relaxed">
          At <strong className="text-white">HydraX</strong>, we believe hydration should be
          effortless, smart, and tailored to your lifestyle. Our AI-powered Smart Water
          Bottle 🚀 ensures precise temperature control 🌡️ between 10°C and 50°C, using
          advanced Peltier technology ❄️🔥. With a built-in filtration system 💧 and a
          long-lasting battery 🔋, HydraX delivers fresh, clean water anytime, anywhere.
        </p>
        <p className="text-lg mb-4 text-gray-400 leading-relaxed">
          Our intelligent system 🧠 adapts to your drinking habits & environment 🌎,
          providing personalized hydration reminders ⏰ and instant temperature adjustments.
          Lightweight, portable, and energy-efficient ⚡, HydraX is the perfect companion
          for your health and wellness journey. Say goodbye to lukewarm drinks and
          hydration guesswork—experience the future of hydration with HydraX! 💙
        </p>
      </motion.div>
    </section>
  );
};

export default AboutUs;
