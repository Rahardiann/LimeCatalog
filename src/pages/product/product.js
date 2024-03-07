import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { motion } from "framer-motion";
import { FaTruck, FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const Card = ({ title, subTitle, description }) => {
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
        style={{textAlign: 'left'}} // Align content to the left
      >
        <div className="px-6 py-4 mb-8">
          <div className="font-bold text-four text-7xl mt-8 mb-8">{title}</div>
          <div className="text-2xl mt-4 mb-4">{subTitle}</div>
          <p className="text-gray-700 text-base h-24 overflow-y-auto">{description}</p>
          <hr className="border-t-2 border-gray-800 mt-2 mx-auto" />
          <Link to="/product/view" className="text-black hover:text-gray-300 font-bold mt-4">View</Link>
        </div>
      </motion.div>
    );
};

const Products = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const cardsData = [
    {
      title: "1",
      subTitle: "Novel",
      description: "A novel is a literary work in the form of prose that has intrinsic elements"
    },
    {
      title: "2",
      subTitle: "Novel",
      description: "Package books are an infrastructure of a that is ready to be used to create conditions and an atmosphere for active learning."
    },
    {
      title: "3",
      subTitle: "Novel",
      description: " Kami siap membantu Anda dengan proses refund yang mudah dan cepat"
    },
    {
      title: "4",
      subTitle: "Novel",
      description: " tim kami siap membantu Anda sepanjang waktu, memberikan keamanan dan kenyamanan dalam setiap transaksi dan kebutuhan pelanggan."
    },
    {
      title: "5",
      subTitle: "Novel",
      description: " tim kami siap membantu Anda sepanjang waktu, memberikan keamanan dan kenyamanan dalam setiap transaksi dan kebutuhan pelanggan."
    },
    {
      title: "6",
      subTitle: "Novel",
      description: " tim kami siap membantu Anda sepanjang waktu, memberikan keamanan dan kenyamanan dalam setiap transaksi dan kebutuhan pelanggan."
    },
    {
        title: "6",
        subTitle: "Novel",
        description: " tim kami siap membantu Anda sepanjang waktu, memberikan keamanan dan kenyamanan dalam setiap transaksi dan kebutuhan pelanggan."
      },
      {
        title: "6",
        subTitle: "Novel",
        description: " tim kami siap membantu Anda sepanjang waktu, memberikan keamanan dan kenyamanan dalam setiap transaksi dan kebutuhan pelanggan."
      }

  ];

  const displayedCards = showMore ? cardsData : cardsData.slice(0, 4);

  return (
    <div className="bg-main min-h-screen relative">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Atur posisi awal dan opacity
        animate={{ opacity: 1, y: 0 }} // Animasikan posisi dan opacity
        transition={{ duration: 1, delay: 1, ease: "easeInOut" }} // Atur durasi, delay, dan jenis transisi
        className={`text-center sm:text-left`}
      >
        <div className="flex flex-col md:flex-row md:justify-center md:items-start pt-40  ">
          <h1 className="text-5xl font-bold mb-4 mx-auto  text-center md:text-left">
            Our Product
          </h1>
          <p
            className="text-xl md:mt-0 mt-4 mx-auto text-center md:text-left"
            style={{ maxWidth: "350px" }}
          >
            Relentless innovation, unlimited solutions. We are here to make your
            digital vision and mission come true.
          </p>
        </div>
      </motion.div>
      <div className="flex flex-wrap justify-center pt-40">
        {displayedCards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            subTitle={card.subTitle}
            description={card.description}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8 pb-28">
        <button onClick={handleShowMore} className="bg-four hover:bg-second text-white font-bold py-2 px-4 rounded">
          {showMore ? <FaAngleUp/> : <FaAngleDown/>}
        </button>
      </div>
      <Footer/>
    </div>
  );
};

export default Products;
