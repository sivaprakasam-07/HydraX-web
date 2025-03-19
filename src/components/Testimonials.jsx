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
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <p className="text-lg italic text-gray-600 mb-4">
                  "{testimonial.review}"
                </p>
                <h3 className="text-xl font-bold text-blue-600">{testimonial.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  