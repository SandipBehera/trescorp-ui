import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300, // Animation speed between slides (milliseconds)
    autoplay: true, // Enable autoplay
    autoplaySpeed: 20000, // Delay between slides during autoplay (milliseconds)
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div
      className="w-full mx-auto"
      style={{ overflowX: "hidden", overflowY: "hidden" }}
    >
      <Slider {...settings}>
        <div className="relative">
          {/* <img src="../../img/oil-logistic-3.jpg" alt="Slide 1" className="w-full h-lvh md:h-lvh  object-cover" /> */}
          <video
            src="../../video/VIDEO_TRESCORP.mp4" // Update with the correct path to your video file
            className="w-full h-lvh md:h-lvh object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="text-center">
              <h1
                className="text-xs lg:text-2xl mb-2"
                style={{
                  color: "white",
                  letterSpacing: "3.9px",
                  textTransform: "uppercase",
                }}
              >
                Welcome to TresCorp..!
              </h1>
              <p
                className="text-6xl lg:text-4xl font-bold"
                style={{ color: "white" }}
              >
                We connect vital resources to power and build the world
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
        <video
            src="../../video/sample.mp4" // Update with the correct path to your video file
            className="w-full h-lvh md:h-lvh object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="text-center">
              <h1
                className="text-xs lg:text-2xl mb-2"
                style={{
                  color: "white",
                  letterSpacing: "3.9px",
                  textTransform: "uppercase",
                }}
              >
                Welcome to TresCorp..!
              </h1>
              <p
                className="text-6xl lg:text-9xl font-bold"
                style={{ color: "white" }}
              >
                Supply & Trading
              </p>
            </div>
          </div>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Sliders;
