const steps = [
  {
    step: "1",
    title: "Fill the Bottle",
    description: "Add water and choose your preferred temperature.",
  },
  {
    step: "2",
    title: "Set Temperature",
    description: "Control temperature from the HydraX app.",
  },
  {
    step: "3",
    title: "Track Hydration",
    description: "Monitor your daily water intake effortlessly.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row justify-around items-start gap-8">
          {steps.map((step) => (
            <div
              key={step.step}
              className="bg-gray-900 p-6 rounded-lg shadow-lg text-center border border-gray-700 transition hover:shadow-xl"
            >
              <div className="text-4xl font-bold text-gray-400 mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
