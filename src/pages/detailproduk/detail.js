import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

const Detail = () => {
  const [images, setImages] = useState({
    img1: "/assets/hedset.png",
    img2: "/assets/hedset4.jpg",
    img3: "/assets/hedset2.jpeg",
    img4: "/assets/hedset3.jpg",
  });

  const [activeImg, setActiveImage] = useState(images.img1);

  const [amount, setAmount] = useState(1);

  return (
    <div className="bg-main min-h-screen relative">
      <Navbar />
      <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center pt-40 pb-40">
        <div className="flex flex-col gap-6 lg:w-3/4">
          <img
            src={activeImg}
            alt=""
            className="w-full h-full sm:mx-auto xl:ml-auto aspect-square object-cover rounded-xl"
            style={{ maxWidth: "600px", maxHeight: "600px" }} // Set max width and max height
          />
        </div>
        {/* ABOUT */}
        <div className="flex flex-col mx-auto gap-4 lg:w-2/4">
          <div>
            <span className=" text-gray-500 font-semibold">IT</span>
            <h1 className="text-5xl font-bold">Headphone</h1>
            <h6 className="text-2xl font-semibold mt-4">IDR 8.700.000</h6>
            <h1 className="text-xl font-bold mt-4">Deskripsi</h1>
          </div>
          <h1 className="text-gray-700 font-bold">Nine microphones total:</h1>

          <p className="text-gray-700">- Apple-designed dynamic drive</p>
          <p className="text-gray-700">- Active Noise Cancellation</p>
          <p className="text-gray-700">- Transparency mode</p>
          <p className="text-gray-700">
            - Personalized Spatial Audio with dynamic head tracking1
          </p>
          <div className="flex flex-row gap-3 h-24">
            <img
              src={images.img1}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img1)}
            />
            <img
              src={images.img2}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img2)}
            />
            <img
              src={images.img3}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img3)}
            />
            <img
              src={images.img4}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img4)}
            />
          </div>
        </div>
      </div>
      

      <Footer />
    </div>
  );
};

export default Detail;
