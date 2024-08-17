import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import axios from "axios";
import { Link } from "react-router-dom";

const HomeSlider = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("https://api.example.com/photos");
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute right-4 md:right-16 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-white text-4xl "
        onClick={onClick}
      >
        <MdArrowForwardIos />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute left-4 md:left-16 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-white text-4xl"
        onClick={onClick}
      >
        <MdArrowBackIos />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative w-full overflow-hidden">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="h-[600px]">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt={`cover${index}`}
            />
          </div>
        ))}
      </Slider>
      <div className="absolute top-0 left-0 w-full h-[600px] bg-black opacity-40"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center">
        <h1 className=" text-2xl md:text-4xl  capitalize   w-full  md:w-[60%] lg:w-[40%] text-center mx-auto">
          unleash the potential of your programming
        </h1>
        <p className="capitalize tracking-wider  my- w-[70%]  md:w-[60%] lg:w-[40%] my-8  mx-auto">
          our academy offers everything you need to achieve your dreams in the
          field of programming
        </p>
        <button className="capitalize border p-2 rounded bg-button-color text-white tracking-wider hover:bg-white hover:text-custom-color transition duration-300 ease-in-out">
          <Link to="#"> explore all diplomas</Link>
        </button>
      </div>
    </div>
  );
};

export default HomeSlider;
