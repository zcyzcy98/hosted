import React from 'react';

const products = [
  {
    id: 1,
    name: 'Premium Shoe Box',
    description: 'Durable plastic shoe storage box with clear view panel',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=500',
    features: ['Stackable', 'Clear front panel', 'Dust-proof', 'Easy assembly']
  },
  {
    id: 2,
    name: 'Safety Helmet',
    description: 'High-impact resistant protective helmet',
    images: [
      'https://images.unsplash.com/photo-1601726653156-efb91e97b10b?auto=format&fit=crop&w=500',
      'https://images.unsplash.com/photo-1542276801-a55c5791426d?auto=format&fit=crop&w=500',
      'https://images.unsplash.com/photo-1590153739137-2c91f5171700?auto=format&fit=crop&w=500'
    ],
    features: [
      'Impact resistant',
      'Adjustable fit',
      'Ventilated',
      'UV protected',
      'Multiple color options',
      'ANSI Z89.1 certified',
      'Comfortable padding'
    ]
  },
  {
    id: 3,
    name: 'Storage Container',
    description: 'Multi-purpose storage container with secure lid',
    image: 'https://images.unsplash.com/photo-1584727638096-042c45049ebe?auto=format&fit=crop&w=500',
    features: ['Waterproof', 'Stackable', 'Multiple sizes', 'Secure lock']
  }
];

function Products() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const nextImage = (productId) => {
    if (productId === 2) { // Safety Helmet
      setCurrentImageIndex((prev) => 
        prev === products[1].images.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {product.id === 2 ? (
              // Safety Helmet with multiple images
              <div className="relative">
                <img
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  className="w-full h-64 object-cover cursor-pointer"
                  onClick={() => nextImage(product.id)}
                />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                  Click to view more
                </div>
              </div>
            ) : (
              // Other products with single image
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
            )}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="space-y-2">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products