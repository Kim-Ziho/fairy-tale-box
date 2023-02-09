import React from "react";
import { useNavigate } from "react-router-dom";
import BackHome from "../modal/BackHomeDrop";
import "./Scene16.css";

// 하단은 음성파일
const audio = new Audio("sound/sample.wav");
const start = () => {
  audio.play();
};
const stop = () => {
  audio.pause();
};

// 하단은 자막

const Scene16 = () => {
  const navigate = useNavigate();
  const timerpage = setTimeout(() => navigate(`/scene17`), 10000);

  return (
    <div className="SceneBox">
      <BackHome></BackHome>
        <img src="img/scene16/16-배경.png" className="bgImg16"></img>
        <img src="img/scene16/16-구름.png" className="cloud"></img>
        <img src="img/scene16/16-오누이.png" className="siblings16"></img>
        <img src="img/scene16/16-호랑이.png" className="tiger16"></img>
    </div>
  );
};

export default Scene16;
