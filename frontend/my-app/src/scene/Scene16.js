import React from "react";
import { useNavigate } from "react-router-dom";
import BackHome from "../modal/BackHomeDrop";
import "./Scene16.css";

// 하단은 음성파일
const audio = new Audio("sound/sample.wav");
const start = () => {
  audio.play();
};

// 하단은 자막

const Scene16 = () => {
  const navigate = useNavigate();
  setTimeout(() => navigate(`/scene17`), 10000);

  return (
    <div className="SceneBox">
      <BackHome></BackHome>
        <img src="img/scene16/16-배경.png" className="bgImg16" alt="#"></img>
        <img src="img/scene16/16-구름.png" className="cloud" alt="#"></img>
        <img src="img/scene16/16-오누이.png" className="siblings16" alt="#"></img>
        <img src="img/scene16/16-호랑이.png" className="tiger16" alt="#"></img>
    </div>
  );
};

export default Scene16;
