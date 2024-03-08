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
        <div name="aboutus" className="bg-main min-h-screen relative">
          <Navbar />
      
          <div className="flex flex-col md:flex-row items-center justify-center px-4 pb-52 pt-32 -mt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
              className={`text-left md:w-1/2 md:pr-10`}
            >
              <div className="mr-auto">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center text-black mb-20 animate-fadeInUp">
                  Contact us 
                </h1>
                <form  className="w-full max-w-lg mx-auto">
                    <div className="mb-4">
                        <div className="flex flex-wrap -mx-3">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <input type="text" name="name"  className="form-input" placeholder="Your Name" required />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <input type="email" name="email"  className="form-input" placeholder="Your Email" required />
                        </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <input type="text" name="subject"  className="form-input" placeholder="Subject" required />
                    </div>
                    <div className="mb-4">
                        <textarea name="message"   className="form-textarea" rows="5" placeholder="Message" required></textarea>
                    </div>
                    <div className="mb-4" >
                        Loading...
                    </div>
                    <div className="mb-4 text-red-500" >
                        Error! Something went wrong.
                    </div>
                    <div className="mb-4 text-green-500" >
                        Your message has been sent. Thank you!
                    </div>
                    <div className="text-center">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send Message</button>
                    </div>
                    </form>
              </div>
            </motion.div>
      
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
              className={`md:w-1/2 md:pr-10`}
            >
              <div className="w-full  ml-auto"> {/* Menjadikan lebar penuh */}
                <iframe className="w-full h-screen md:h-96" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.4872453819476!2d112.772832976084!3d-7.299024992708595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa5a72e83879%3A0x47a3ec4e8d7e8f7e!2sCV%20Sujawe%20Ininnawa!5e0!3m2!1sid!2sid!4v1695426290753!5m2!1sid!2sid" frameBorder="0" allowFullScreen></iframe>
              </div>
            </motion.div>
          </div>
          <Footer/>
        </div>
      );
      
      
      
}

export default About;
