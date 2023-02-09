import React from "react";
import { useNavigate } from "react-router-dom";
import BackHome from "../modal/BackHomeDrop";
import "./Scene19.css";

// 하단은 음성파일
const audio = new Audio("sound/sample.wav");
const start = () => {
  audio.play();
};

// 하단은 자막

const Scene19 = () => {
  const navigate = useNavigate();

  return (
    <div className="SceneBox">
      <BackHome></BackHome>
        <img src="img/scene19/19.png" className="bgImg" alt="#"></img>
    </div>
  );
};

export default Scene19;
