import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import BackHome from "../modal/BackHomeModal";
import "./Scene9.css";

// 하단은 음성파일
const audio9 = new Audio("sound/9.mp3");
const start = () => {
  setTimeout(() => {
    audio9.play();
  }, 1000);
};

// 하단은 자막
function Change_text(){
  const subtitle = document.getElementById('Text')
  setTimeout(()=>{
    subtitle.innerText = '바깥에 호랑이가 있어!'
  },1000)
  setTimeout(()=>{
    subtitle.innerText = '으악! 호랑이 손이야!'
  },3320)
  setTimeout(()=>{
    subtitle.innerText = '손이라고 말해볼까요? 손!'
  },6800)
}
const Scene9 = () => {
  const navigate = useNavigate();
  // const timerpage = setTimeout(() => navigate(`/scene2`), 10000);

  // 하단은 자막 시작 딜레이
  setTimeout(Change_text)
  // 하단은 페이지 넘어가는 시간
  const timerpage = setTimeout(() => navigate(`/scene10`), 14800);
  // 하단은 오디오 파일 자동재생
  setTimeout(start)

  return (
    <div className="SceneBox">
      <BackHome></BackHome>
      <motion.div>
        <div>
          <img src="img/scene9/9-배경.png" className="bgImg"></img>
          <div>
            <img src="img/scene9/9-오빠.png" className="brother9"></img>
          </div>
          <div>
            <img src="img/scene9/9-동생.png" className="sister9"></img>
          </div>
          <div>
            <img src="img/scene9/9-손1.png" className="hand1"></img>
          </div>
          <div>
            <img src="img/scene9/9-손2.png" className="hand2"></img>
          </div>
          <h2 id="Text"></h2>
        </div>
        <div id="output"></div>
      </motion.div>
      <style></style>
    </div>
  );
};

export default Scene9;
