import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import PreOrder from "./components/PreOrder";

function App() {
  return (
    <div className="bg-gray-50">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <PreOrder />
    </div>
  );
}

export default App;
