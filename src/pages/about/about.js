import React from "react";
import Navbar from '../navbar/navbar';



const GradientText = ({ children }) => {
  return (
    <span className="bg-gradient-to-r from-lime-200 via-green-500 to-green-400 text-transparent bg-clip-text animate-fadeIn">{children}</span>
  );
};

const About = () => {

  
  return (
    <div name="aboutus"className="bg-main min-h-screen relative">
      <Navbar />
      <div className="flex flex-col items-center justify-center px-4 pb-52 pt-32 -mt-20"> {/* Tambahkan margin atas negatif untuk menaikkan posisi */}
  <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center text-black mb-8 animate-fadeInUp">
    About us 
  </h1>
  
  <p className="text-center text-gray-600 mb-12 animate-fadeInUp">
    Andes is a company that operates in the field
  </p>
</div>

    </div>
  );
}

export default About;
