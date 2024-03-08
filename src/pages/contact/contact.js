import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { motion } from "framer-motion";

const GradientText = ({ children }) => {
  return (
    <span className="bg-gradient-to-r from-lime-200 via-green-500 to-green-400 text-transparent bg-clip-text animate-fadeIn">
      {children}
    </span>
  );
};

const Contact = () => {
  return (
    <div name="aboutus" className="bg-main min-h-screen relative">
      <Navbar />

      <div className="flex flex-col md:flex-row  px-4 pb-8 pt-32 -mt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
          className={`text-left md:w-1/2 md:pr-10`}
        >
          <div className="mr-auto pb-8">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold  text-black mb-8 animate-fadeInUp">
              Contact us
            </h1>
            <h1 className="text-xl font-bold  text-black mb-20 lg:ml-4 animate-fadeInUp">
              Leave us Messages
            </h1>
            <div className="flex flex-col w-4/5 h-1/2 px-4 ">
              <input
                type="text"
                placeholder="Your Name"
                className=" bg-five focus:outline-none focus:border-green-500 mb-4 rounded px-4 py-2 w-full"
              />
              <input
                type="email"
                placeholder="Your Email"
                className=" bg-five  focus:outline-none focus:border-green-500 mb-4 rounded px-4 py-2 w-full"
              />
              <input
                type="text"
                placeholder="Subject"
                className=" bg-five  focus:outline-none focus:border-green-500 mb-4 rounded px-4 py-2 w-full"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className=" bg-five  focus:outline-none focus:border-green-500 rounded px-4 py-2 w-full"
              ></textarea>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
          className={`md:w-1/2 md:pr-10`}
        >
          <div
            className="w-full"
            style={{
              position: "relative",
              overflow: "hidden",
              paddingTop: "100%",
            }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.4872453819476!2d112.772832976084!3d-7.299024992708595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa5a72e83879%3A0x47a3ec4e8d7e8f7e!2sCV%20Sujawe%20Ininnawa!5e0!3m2!1sid!2sid!4v1695426290753!5m2!1sid!2sid"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
