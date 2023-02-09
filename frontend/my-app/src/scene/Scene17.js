import React from "react";
import { useNavigate } from "react-router-dom";
import BackHome from "../modal/BackHomeDrop";
import "./Scene17.css";

// 하단은 음성파일
const audio = new Audio("sound/sample.wav");
const start = () => {
  audio.play();
};

// 하단은 자막

const Scene17 = () => {
  const navigate = useNavigate();
  const timerpage = setTimeout(() => navigate(`/scene18`), 10000);

  return (
    <div className="SceneBox">
      <BackHome></BackHome>
        <img src="img/scene17/17-배경.png" className="bgImg"></img>
        <img src="img/scene17/17-호랑이.png" className="tiger17"></img>
        <div className="hidden"></div>
    </div>
  );
};

export default Scene17;
