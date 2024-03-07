import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import { motion } from "framer-motion";
import { FaTruck, FaCreditCard, FaUndo, FaHeadset } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer'; // Mengimpor useInView dari react-intersection-observer
import Footer from "../footer/footer";

const GradientText = ({ children }) => {
  return (
    <span className="bg-gradient-to-r from-lime-200 via-green-500 to-green-400 text-transparent bg-clip-text animate-fadeIn">
      {children}
    </span>
  );
};

const Card = ({ title, description }) => {
  const [showAnimation, setShowAnimation] = useState(false); // Mengatur state untuk mengontrol apakah animasi harus dimulai atau tidak
  const { ref, inView } = useInView(); // Menggunakan useInView hook untuk mendeteksi apakah Card terlihat di viewport

  useEffect(() => {
    if (inView) {
      setShowAnimation(true); // Mengatur showAnimation menjadi true saat Card terlihat di viewport
    }
  }, [inView]);

  // Fungsi untuk memilih ikon berdasarkan judul
  const selectIcon = (title) => {
    switch (title) {
      case "Fast Delivery":
        return <FaTruck className="mx-auto text-center text-white rounded-full bg-black p-4" size={98} />;
      case "Secure Payment":
        return <FaCreditCard className="mx-auto text-center text-white rounded-full bg-black p-4" size={98} />;
      case "Easy Refund":
        return <FaUndo className="mx-auto text-center text-white rounded-full bg-black p-4" size={98} />;
      case "24/7 Service":
        return <FaHeadset className="mx-auto text-center text-white rounded-full bg-black p-4" size={98} />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      ref={ref} // Menetapkan ref untuk digunakan oleh useInView hook
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: showAnimation ? 1 : 0, y: showAnimation ? 0 : 40 }} // Mengatur animasi berdasarkan showAnimation
      transition={{ duration: 0.5, delay: 0.5 }}
      className="max-w-sm bg-third rounded overflow-hidden shadow-lg mx-4 my-2 "
    >
      <div className="px-6 py-4 mb-8">
        {selectIcon(title)}
        <div className="font-bold text-xl text-center mt-8 mb-8">{title}</div>
        <p className="text-gray-700 text-base text-center h-24 overflow-y-auto">{description}</p>
      </div>
    </motion.div>
  );
};

const Home = () => {
  const [showAnimation, setShowAnimation] = useState(true);
 

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 2000); // Ubah angka ini sesuai dengan durasi animasi

    return () => clearTimeout(timer); // Membersihkan timer pada unmount komponen
  }, []);

  return (
    <div className="bg-main min-h-screen relative">
      <Navbar />
      <div className="flex flex-col items-center justify-center px-4 pb-64 pt-52">
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Atur posisi awal dan opacity
          animate={{ opacity: 1, y: 0 }} // Animasikan posisi dan opacity
          transition={{ duration: 1, delay: 1, ease: "easeInOut" }} // Atur durasi, delay, dan jenis transisi
          className={`text-center sm:text-left`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center text-black mb-8 animate-fadeInUp">
            Innovation and style <GradientText>meet</GradientText>
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center mb-8 animate-fadeInUp">
            in{" "}
            <span
              className="text-white"
              style={{
                textShadow:
                  "0 0 6px black, 0 0 6px black, 0 0 6px black, 0 0 6px black",
              }}
            >
              our
            </span>{" "}
            exclusive collection
          </h1>
          <p className="text-center text-gray-600 mb-12 animate-fadeInUp">
            We are a leading company in turning information and managing
            information into fortune and profit.
          </p>
          <div className="text-center">
            {/* Menetapkan div yang berisi tombol berada di tengah */}
            <button className="bg-second hover:bg-lime-200 text-black font-bold py-2 px-8 md:px-16 rounded-3xl shadow-xl animate-fadeInUp">
              Contact us
            </button>
          </div>
        </motion.div>
      </div>
      <motion.div
          initial={{ opacity: 0, y: 20 }} // Atur posisi awal dan opacity
          animate={{ opacity: 1, y: 0 }} // Animasikan posisi dan opacity
          transition={{ duration: 1, delay: 1, ease: "easeInOut" }} // Atur durasi, delay, dan jenis transisi
          className={`text-center sm:text-left`}
        >
      <div className="flex flex-col md:flex-row md:justify-center md:items-start pb-40">
        <h1 className="text-5xl font-bold mb-4 mx-auto  text-center md:text-left">Why Choosing Us?</h1>
        <p className="text-xl md:mt-0 mt-4 mx-auto text-center md:text-left" style={{ maxWidth: "350px" }}>
          At Andes, we understand that you have choices when it comes to our
          products and services. Here's why we believe we stand out from the
          crowd
        </p>
      </div>
      </motion.div>

      <div className="flex flex-wrap justify-center pb-40">
        <Card
          title="Fast Delivery"
          description="kami menjamin pengiriman yang efisien dan cepat, sehingga Anda dapat menikmati produk kami tanpa menunggu terlalu lama."
          
        />
        <Card
          title="Secure Payment"
          description="kami menyediakan opsi pembayaran yang aman dan nyaman bagi pelanggan kami."
        />
        <Card
          title="Easy Refund"
          description=" Kami siap membantu Anda dengan proses refund yang mudah dan cepat"
        />
        <Card
          title="24/7 Service"
          description=" tim kami siap membantu Anda sepanjang waktu, memberikan keamanan dan kenyamanan dalam setiap transaksi dan kebutuhan pelanggan."
        />
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
