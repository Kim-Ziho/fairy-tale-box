import React from "react";
import { useNavigate } from "react-router-dom";
import BackHome from "../modal/BackHomeDrop";
import "./Scene15.css";

// 하단은 음성파일
const audio = new Audio("sound/15.mp3");
const start = () => {
  audio.play();
};


// 하단은 자막

const Scene15 = () => {
  const navigate = useNavigate();
  setTimeout(() => navigate(`/scene16`), 21000);

  return (
    <div className="SceneBox">
      <BackHome></BackHome>
      <img src="img/scene15/15-만세2.png" className="cheer6" alt="#"></img>
      <img src="img/scene15/15-만세1.png" className="cheer5" alt="#"></img>
      <img src="img/scene15/15-만세2.png" className="cheer4" alt="#"></img>
      <img src="img/scene15/15-만세1.png" className="cheer3" alt="#"></img>
      <img src="img/scene15/15-만세2.png" className="cheer2" alt="#"></img>
      <img src="img/scene15/15-만세1.png" className="cheer" alt="#"></img>
      <img src="img/scene15/15-기도.png" className="bgImg15" alt="#"></img>
      <img src="img/scene15/15-동아줄.png" className="rope" alt="#"></img>
    </div>
  );
};

export default Scene15;
