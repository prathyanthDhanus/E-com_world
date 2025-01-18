import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-12">
        <div className="container mx-auto px-4 text-center md:text-left grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Transform Your Space with E-com_World
            </h1>
            <p className="text-lg mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <button className="bg-customYellow text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-500">
              Shop Now
            </button>
          </div>
          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="https://via.placeholder.com/500x400"
              alt="e-com"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </header>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Category Cards */}
          {["Living Room", "Bedroom", "Dining", "Office"].map((category) => (
            <div
              key={category}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 text-center"
            >
              <img
                src={`https://via.placeholder.com/150?text=${category}`}
                alt={category}
                className="w-full h-32 object-cover rounded-md mb-4"
              />
              <h3 className="font-semibold">{category}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product Cards */}
            {[1, 2, 3].map((product) => (
              <div
                key={product}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 text-center"
              >
                <img
                  src={`https://via.placeholder.com/200?text=Product+${product}`}
                  alt={`Product ${product}`}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="font-semibold mb-2">Product {product}</h3>
                <p className="text-gray-700 mb-4">$99.99</p>
                <button className="bg-customYellow text-black font-semibold px-4 py-2 rounded-md hover:bg-yellow-500">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-6">
            Subscribe to our newsletter for the latest offers and updates.
          </p>
          <form className="flex flex-col md:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full md:w-1/3"
            />
            <button className="bg-customYellow text-black font-semibold px-6 py-2 rounded-md hover:bg-yellow-500">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
