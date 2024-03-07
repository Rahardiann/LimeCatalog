import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import Footer from "../footer/footer";

const Card = ({ imageSrc, subTitle, description }) => {
    const [showAnimation, setShowAnimation] = useState(false);
    const { ref, inView } = useInView();
  
    useEffect(() => {
      if (inView) {
        setShowAnimation(true);
      }
    }, [inView]);
  
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: showAnimation ? 1 : 0, y: showAnimation ? 0 : 40 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="max-w-sm bg-third rounded overflow-hidden shadow-lg mx-4 my-2"
        style={{ textAlign: 'left' }} // Align content to the left
      >
        <div className="px-6 py-4 mb-8">
          <img src={imageSrc} alt="Card Image" className="w-3/4 mx-auto h-auto mb-4" />
          <div className="text-2xl mt-4 text-center mb-4">{subTitle}</div>
          <p className="text-gray-700 text-center h-14 overflow-y-auto">{description}</p>
    
          <div className="flex justify-center"> {/* Center aligns the child elements */}
            <Link to="/product/view/detail" className="bg-second text-white font-bold py-2 px-4 rounded hover:bg-four">
              View Detail
            </Link>
          </div>
        </div>
      </motion.div>
    );
  };
  
const View = () => {
  const [showAnimation, setShowAnimation] = useState(true);
  const cardsData = [
    {
      imageSrc: "/assets/novel.jpg",
      subTitle: "Bumi - Tere Liye",
      description: "IDR 92.700"
    },
    {
        imageSrc: "/assets/novel.jpg",
        subTitle: "Bumi - Tere Liye",
        description: "IDR 92.700"
      },
      {
        imageSrc: "/assets/novel.jpg",
        subTitle: "Bumi - Tere Liye",
        description: "IDR 92.700"
      },
      {
        imageSrc: "/assets/novel.jpg",
        subTitle: "Bumi - Tere Liye",
        description: "IDR 92.700"
      },
      {
        imageSrc: "/assets/novel.jpg",
        subTitle: "Bumi - Tere Liye",
        description: "IDR 92.700"
      },
      {
        imageSrc: "/assets/novel.jpg",
        subTitle: "Bumi - Tere Liye",
        description: "IDR 92.700"
      },
      {
        imageSrc: "/assets/novel.jpg",
        subTitle: "Bumi - Tere Liye",
        description: "IDR 92.700"
      },
      {
        imageSrc: "/assets/novel.jpg",
        subTitle: "Bumi - Tere Liye",
        description: "IDR 92.700"
      },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 2000); // Ubah angka ini sesuai dengan durasi animasi

    return () => clearTimeout(timer); // Membersihkan timer pada unmount komponen
  }, []);

  return (
    <div className="bg-main min-h-screen relative">
      <Navbar />
      <div className="flex flex-col items-center justify-center px-4 pb-8 pt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Atur posisi awal dan opacity
          animate={{ opacity: 1, y: 0 }} // Animasikan posisi dan opacity
          transition={{ duration: 1, delay: 1, ease: "easeInOut" }} // Atur durasi, delay, dan jenis transisi
          className={`text-center sm:text-left`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold text-center text-black mb-8 animate-fadeInUp">
            Novel
          </h1>
          <p className="text-center text-gray-600 mb-12 animate-fadeInUp">
            A novel is a literary work in the form of prose that has intrinsic elements
          </p>
        </motion.div>
      </div>
      <div className="flex flex-wrap justify-center pt-3 pb-40">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            imageSrc={card.imageSrc} // Meneruskan imageSrc sebagai prop
            subTitle={card.subTitle}
            description={card.description}
          />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default View;
