import React from "react";
import { motion } from "framer-motion";
import BackHome from "../modal/BackHomeModal";
import "./Scene4.css";

// 하단은 음성파일
const audio = new Audio("sound/sample.wav");
const start = () => {
  audio.play();
};
const stop = () => {
  audio.pause();
};

// 하단은 자막

const Scene4 = () => {

  // const timerpage = setTimeout(() => navigate(`/scene2`), 10000);

  return (
    <div className="SceneBox">
      <BackHome></BackHome>
      <motion.div initial={{ x: 500 }} animate={{ x: 0 }} exit={{ opacity: 0 }}>
        <div className="bgImg">
          <img src="img/scene4/4-배경.png"></img>
          <div className="tiger4">
            <img src="img/scene4/4-호랑이.png"></img>
          </div>
          <div className="rice4">
            <img src="img/scene4/4-떡.png"></img>
          </div>
        </div>
        <div id="output"></div>
      </motion.div>
      <style></style>
    </div>
  );
};

export default Scene4;
