
const PricingSection = () => {
  return (
    <div className="w-full lg:w-80 bg-gray-100 p-6 rounded-lg mt-8 lg:mt-0 lg:ml-8">
      <div className="bg-blue-100 text-blue-800 p-2 rounded-full text-center mb-4">50% OFF</div>
      <div className="text-2xl font-bold">$153.99</div>
      <div className="text-gray-600 line-through mb-4">$391.99</div>

      <ul className="text-gray-700 mb-6">
        <li className="mb-2">48 hours on-demand video</li>
        <li className="mb-2">6 Articles</li>
        <li className="mb-2">8 Downloadable resources</li>
        <li className="mb-2">Mobile access</li>
      </ul>

      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Add to Cart
      </button>

      <button className="w-full mt-4 bg-white text-blue-600 border border-blue-600 py-2 rounded hover:bg-gray-200">
        Buy Now
      </button>

      <div className="text-center text-gray-500 text-sm mt-4">
        30-Day money-back guarantee
      </div>
    </div>
  );
};

export default PricingSection;
