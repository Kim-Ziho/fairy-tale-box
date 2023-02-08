import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import BackHome from "../modal/BackHomeModal";
import "./Scene2.css";

// 음성파일
const audio = new Audio("sound/2.mp3");
const start = () => {
  setTimeout(() => {
    audio.play();
  }, 1000);
};

// 자막
function Change_text() {
  const subtitle = document.getElementById("Text");
  setTimeout(() => {
    subtitle.innerText = "일을 마친 엄마가 집으로 돌아가고 있었는데,";
  }, 1000);
  setTimeout(() => {
    subtitle.innerText = "갑자기 사나운 호랑이 한 마리가 나타났어요";
  }, 3900);
  setTimeout(() => {
    subtitle.innerText = "호랑이라고 말해볼까요?";
  }, 8000);
}

const Scene2 = () => {
  const navigate = useNavigate();

   // 자막 시작 딜레이
   setTimeout(Change_text);
   // 페이지 넘어가는 시간
   setTimeout(() => navigate(`/scene3`), 16050);
   // 오디오 파일 자동재생
   setTimeout(start);

  return (
    <div className="SceneBox">
      <BackHome></BackHome>
      <motion.div>
        <div>
          <img src="img/scene2/2-배경.png" className="bgImg"></img>
          <div>
            <img src="img/scene2/2-엄마.png" className="mother2"></img>
          </div>
          <div >
            <img src="img/scene2/2-호랑이.png" className="tiger2"></img>
          </div>
          <div>
            <img src="img/scene2/2-나무.png" className="tree"></img>
          </div>
          <h2 id="Text"></h2>
        </div>
        <div id="output"></div>
      </motion.div>
      <style></style>
    </div>
  );
};

export default Scene2;
