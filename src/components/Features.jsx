const features = [
    {
      title: "Temperature Control",
      description: "Adjust the temperature between 10°C and 50°C.",
      icon: "🌡️",
    },
    {
      title: "Hydration Tracking",
      description: "Track daily water intake and set reminders.",
      icon: "📊",
    },
    {
      title: "Adaptive Intelligence",
      description: "AI-powered temperature recommendations.",
      icon: "🤖",
    },
    {
      title: "Long Battery Life",
      description: "Up to 48 hours of continuous usage.",
      icon: "🔋",
    },
  ];
  
  const Features = () => {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Why HydraX?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-blue-50 p-6 rounded-lg text-center shadow-md hover:shadow-xl transition"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  