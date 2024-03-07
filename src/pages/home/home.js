import React from 'react';
import Navbar from '../navbar/navbar';


const GradientText = ({ children }) => {
  return (
    <span className="bg-gradient-to-r from-lime-200 via-green-500 to-green-400 text-transparent bg-clip-text animate-fadeIn">{children}</span>
  );
};

const Home = () => {

  
  return (
    <div className="bg-main min-h-screen relative">
      <Navbar />
      <div className="flex flex-col items-center justify-center px-4 pb-52 pt-52"> {/* Tambahkan padding atas untuk memberikan ruang di bawah Navbar */}
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center text-black mb-8 animate-fadeInUp">
          Innovation and style <GradientText>meet</GradientText>
        </h1>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center mb-8 animate-fadeInUp">
          in <span className="text-white" style={{ textShadow: '0 0 6px black, 0 0 6px black, 0 0 6px black, 0 0 6px black' }}>our</span> exclusive collection
        </h1>
        <p className="text-center text-gray-600 mb-12 animate-fadeInUp">
          We are a leading company in turning information and managing information into fortune and profit.
        </p>
        <button className="bg-second hover:bg-lime-200 text-black font-bold py-2 px-8 md:px-16 rounded-3xl shadow-xl animate-fadeInUp">
          Contact us
        </button>
      </div>
    </div>
  );
}

export default Home;
