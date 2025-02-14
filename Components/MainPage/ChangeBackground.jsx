import React, { useEffect, useState } from "react";
import ParagraphText from "../Ficher/ParagraphText";
import PinkBtn from "../Ficher/PinkBtn";

const ChangeBackground = () => {
  const images = [
    "https://img.freepik.com/free-vector/collection-gradient-o-logo-templates_23-2148881311.jpg?t=st=1739526044~exp=1739529644~hmac=3e25e3033478c690b4608f6fec055bf8d4dd60b12c8bdd719edc343f4b7fb4e6&w=1480",
    "https://img.freepik.com/vettori-premium/logo-della-lettera-v_663638-642.jpg?w=1800",
    "https://img.freepik.com/free-vector/gradient-e-logo-template-set_23-2148893792.jpg?t=st=1739526242~exp=1739529842~hmac=5ee8c8ffb1186c823bcdb99286b0c7f4c8efa680275a4b6a6d4d4d13e1fed717&w=1480",
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-gray-100">
      <div
        className="w-full h-24 lg:h-screen flex items-center justify-center text-white text-xl font-bold transition-all duration-1000"
        style={{
          backgroundImage: `url(${images[index]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <PinkBtn>شما هم شروع کنید !</PinkBtn>
      </div>
    </div>
  );
};

export default ChangeBackground;
