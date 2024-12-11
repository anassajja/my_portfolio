import React from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationLottie = ({ animationPath, width = "95%" }) => {
  const style = { width };

  return (
    <Lottie 
      animationData={animationPath} // JSON animation data
      loop={true} 
      autoplay={true} 
      style={style} 
    />
  );
};

export default AnimationLottie;
