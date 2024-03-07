import React from "react";
import Navbar from '../navbar/navbar';
import Footer from "../footer/footer";
import { motion } from "framer-motion";


const GradientText = ({ children }) => {
  return (
    <span className="bg-gradient-to-r from-lime-200 via-green-500 to-green-400 text-transparent bg-clip-text animate-fadeIn">{children}</span>
  );
};

const About = () => {

  
  return (
    <div name="aboutus"className="bg-main min-h-screen relative">
      <Navbar />
      
      <div className="flex flex-col items-center justify-center px-4 pb-52 pt-32 -mt-4"> {/* Tambahkan margin atas negatif untuk menaikkan posisi */}
      <motion.div
          initial={{ opacity: 0, y: 20 }} // Atur posisi awal dan opacity
          animate={{ opacity: 1, y: 0 }} // Animasikan posisi dan opacity
          transition={{ duration: 1, delay: 1, ease: "easeInOut" }} // Atur durasi, delay, dan jenis transisi
          className={`text-center sm:text-left`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center text-black mb-8 animate-fadeInUp">
            About us 
          </h1>
          
          <p className="text-center text-gray-600  animate-fadeInUp">
            Andes is a company that operates in the field of trading goods (educational) and services (information
          </p>
          <p className="text-center text-gray-600 mb-12 animate-fadeInUp">
            management) which is supported by today's technological advances.
          </p>
     
          <div class="flex flex-col md:flex-row md:justify-center md:items-start pb-40">
              <img src="assets/image.jpeg" alt="Deskripsi Gambar" class="w-full max-w-lg animate-fadeInUp mr-20 rounded-lg" />
              <div class="md:flex md:flex-col md:justify-start md:items-start mt-20 md:mt-40">
                  <p class="text-lg mx-auto text-center md:text-left md:mx-0 mb-0 md:max-w-none md:w-80 mb-4">
                      Vision
                  </p>
                  <p class="text-sm mx-auto text-center md:text-left md:mx-0 mb-9 md:max-w-none md:w-80 mt-auto">
                     To become a leading company in charging information
                  </p>
                  <p class="text-lg mx-auto text-center md:text-left md:mx-0 mb-0 md:max-w-none md:w-80 mb-4">
                      Mission
                  </p>
                  <p class="text-sm mx-auto text-center md:text-left md:mx-0 md:max-w-none md:w-80 mt-auto">
                     Manage information to become luck and frofitable
                  </p>
              </div>
          </div>


      </motion.div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
