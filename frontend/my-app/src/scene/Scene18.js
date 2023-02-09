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
  setTimeout(() => navigate(`/scene19`), 10000);

  return (
    <div className="SceneBox">
      <BackHome></BackHome>
        <img src="img/scene18/18-배경.png" className="bgImg" alt="#"></img>   
        <img src="img/scene18/18-오누이.png" className="siblings18" alt="#"></img>   
        <img src="img/scene18/18-엄마.png" className="mother18" alt="#"></img>   
    </div>
  );
};

export default Scene18;
