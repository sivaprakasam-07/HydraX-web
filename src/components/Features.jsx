const features = [
  {
    title: "Temperature Control",
    description: "Adjust the temperature between 10°C and 50°C.",
    icon: "🌡️",
  },
  {
    title: "Hydration Analysis",
    description: "Monitors water intake trends and provides smart insights.",
    icon: "💧",
  },
  {
    title: "User Adaption",
    description: "Learns your hydration habits for a personalized experience.",
    icon: "🔄",
  },
  {
    title: "Environmental Adaption",
    description:
      "Automatically adjusts water temperature based on surroundings.",
    icon: "🌎",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Why HydraX?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg text-center shadow-md hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
