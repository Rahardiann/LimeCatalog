import React, { useState } from 'react';
import Navbar from '../navbar/navbar';

const Detail = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['/assets/novel.jpg', '/assets/logonav.png']; // Add more image URLs as needed

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="bg-main min-h-screen relative">
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-wrap items-center pt-40 relative">
          {/* Product Image */}
          <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
            <img src={images[currentImageIndex]} alt="Product" className="w-auto h-auto rounded-lg" />
          </div>

          {/* Navigation Arrows */}
          <button onClick={prevImage} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
            &lt;
          </button>
          <button onClick={nextImage} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
            &gt;
          </button>

          {/* Product Details */}
          <div className="w-full lg:w-1/2 lg:pl-8">
            <h3 className="text-xl font-medium text-gray-600 mb-2">Novel</h3>
            <h2 className="text-6xl font-semibold mb-2">Anaconda ndas sapi</h2>
            <p className="text-lg font-medium text-gray-800 mb-4">Price: $XX.XX</p>
            <h4 className="text-lg font-semibold mb-2">Deskripsi</h4>
            <p className="text-base text-gray-700 mb-6">Product Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla fringilla mi, eu mattis elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
