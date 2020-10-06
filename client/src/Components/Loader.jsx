import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/animations/loader.js";

const Loader = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
      <div className="loader__container">
    <div className="loader">
      <Lottie
        options={defaultOptions}
        // width={300}
        // width={500}
      />
    </div>
    </div>
  );
};

export default Loader;