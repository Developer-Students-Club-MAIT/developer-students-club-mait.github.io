import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/animations/robo_animation.js";

const RoboAnimations = () => {
  const buttonStyle = {
    display: "block",
    margin: "10px auto",
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="robo-animation">
      <Lottie
        options={defaultOptions}
        width={"100%"}
        // width={500}
      />
    </div>
  );
};

export default RoboAnimations;