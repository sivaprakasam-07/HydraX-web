const PreOrder = () => {
  return (
    <section className="py-16 bg-black text-white text-center">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-6 tracking-wide">
          Get Your HydraX Now!
        </h2>

        {/* Description */}
        <p className="text-lg opacity-80 mb-8 leading-relaxed">
          Pre-order today and be among the first to experience the future of
          smart hydration.
        </p>

        {/* Pre-Order Button */}
        <button className="bg-white text-black font-bold py-3 px-6 rounded-full shadow-lg border border-gray-300 hover:bg-gray-100 transition transform hover:scale-105">
          Pre-Order Now
        </button>
      </div>
    </section>
  );
};

export default PreOrder;
