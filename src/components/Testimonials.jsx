const testimonials = [
  {
    name: "John Doe",
    review: "HydraX keeps my water perfectly cool all day. I love it!",
  },
  {
    name: "Jane Smith",
    review: "The temperature control feature is a game changer for me.",
  },
  {
    name: "Mark Wilson",
    review: "Hydration tracking has helped me stay on top of my goals.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-12">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 transition hover:shadow-xl"
            >
              <p className="text-lg italic text-gray-300 mb-4">
                "{testimonial.review}"
              </p>
              <h3 className="text-xl font-bold text-white">
                {testimonial.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
