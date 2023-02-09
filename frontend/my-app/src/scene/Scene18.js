import React from "react";
import { useNavigate } from "react-router-dom";
import BackHome from "../modal/BackHomeDrop";
import "./Scene18.css";

// 하단은 음성파일
const audio = new Audio("sound/sample.wav");
const start = () => {
  audio.play();
};

// 하단은 자막

const Scene18 = () => {
  const navigate = useNavigate();
  const timerpage = setTimeout(() => navigate(`/scene19`), 10000);

  return (
    <div className="SceneBox">
      <BackHome></BackHome>
        <img src="img/scene18/18-배경.png" className="bgImg"></img>   
        <img src="img/scene18/18-오누이.png" className="siblings18"></img>   
        <img src="img/scene18/18-엄마.png" className="mother18"></img>   
    </div>
  );
};

export default Scene18;
