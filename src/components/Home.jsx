import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Premium Plastic Products for Global Markets
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          High-quality plastic storage solutions and protective equipment
        </p>
        <Link
          to="/products"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
        >
          View Our Products
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
          <p className="text-gray-600">
            All products meet international quality standards
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Custom Solutions</h3>
          <p className="text-gray-600">
            Tailored products to meet your specific needs
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Global Shipping</h3>
          <p className="text-gray-600">
            Fast and reliable worldwide delivery
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home