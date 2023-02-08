import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import BackHome from "../modal/BackHomeDrop";
import "./Scene11.css";

// 하단은 음성파일
const audio = new Audio("sound/sample.wav");
const start = () => {
  audio.play();
};
const stop = () => {
  audio.pause();
};

// 하단은 자막

const Scene15 = () => {
  const navigate = useNavigate();
  // const timerpage = setTimeout(() => navigate(`/scene2`), 10000);

  return (
    <div className="SceneBox">
      <BackHome></BackHome>
      <div className="bgImg">
        <img src="img/scene11/11.png"></img>
      </div>
      <div id="output"></div>
    </div>
  );
};

export default Scene15;
