import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import BackHome from "../modal/BackHomeModal";
import "./Scene3.css";

// 하단은 음성파일
const audio = new Audio("sound/3.mp3");
const start = () => {
  setTimeout(() => {
    audio.play();
  }, 1000);
};

// 자막
function Change_text() {
  const subtitle = document.getElementById("Text");
  setTimeout(() => {
    subtitle.innerText = "어흥, 떡 하나 주면 안 잡아먹지!";
  }, 1000);
  setTimeout(() => {
    subtitle.innerText = "떡이라고 말해볼까요?";
  }, 3800);
}

const Scene3 = () => {
  const navigate = useNavigate();

  // 자막 시작 딜레이
  setTimeout(Change_text);
  // 페이지 넘어가는 시간
  setTimeout(() => navigate(`/scene4`), 11610);
  // 오디오 파일 자동재생
  setTimeout(start);

  return (
    <div className="SceneBox">
      <BackHome></BackHome>
      <motion.div>
        <div>
          <img src="img/scene3/3-배경.png" className="bgImg"></img>
          <div>
            <img src="img/scene3/3-호랑이.png"className="tiger3"></img>
          </div>
          <h2 id="Text"></h2>
        </div>
        <div id="output"></div>
      </motion.div>
      <style></style>
    </div>
  );
};

export default Scene3;
