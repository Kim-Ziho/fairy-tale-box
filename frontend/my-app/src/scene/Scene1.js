import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import BackHome from "../modal/BackHomeModal";
import "./Scene1.css";

// 하단은 음성파일 Audio에 음성파일 경로를 넣으면 됩니다.
const audio = new Audio("sound/1.mp3");
const start = () => {
  setTimeout(() => {
    audio.play();
  }, 1000);
};

// 하단은 자막 수정해서 사용할 것.
function Change_text(){
  const subtitle = document.getElementById('Text')
  setTimeout(()=>{
    subtitle.innerText = '옛날옛날에 마음씨 좋은 엄마와'
  },1000)
  setTimeout(()=>{
    subtitle.innerText = '사이좋은 오누이가 살고 있었어요'
  },2000)
  setTimeout(()=>{
    subtitle.innerText = '얘들아, 혹시 누군가 문을 열어달라고 하면'
  },3000)
  setTimeout(()=>{
    subtitle.innerText = "엄마말고는 문을 열어 주면 안된단다!"
  },4000)
  setTimeout(()=>{
    subtitle.innerText = "네, 엄마"
  },5000)
}

const Scene1 = () => {
  const navigate = useNavigate();
  
  // 하단은 자막 시작 딜레이
  setTimeout(Change_text)
  // 하단은 페이지 넘어가는 시간
  // const timerpage = setTimeout(() => navigate(`/scene2`), 7000);
  // 하단은 오디오 파일 자동재생
  setTimeout(start)
  
  return (

    <div className="SceneBox">
      <BackHome></BackHome>
      <motion.div initial={{ x: 500 }} animate={{ x: 0 }} exit={{ opacity: 0 }}>
        <div >
          <img src="img/scene1/1-배경.png" className="bgImg"></img>
          <div className="mother1">
            <img src="img/scene1/1-엄마.png"></img>
          </div>
          <div className="brother1">
            <img src="img/scene1/1-오빠.png"></img>
          </div>
          <div className="sister1">
            <img src="img/scene1/1-동생.png"></img>
          </div>
          <h2 id="Text"></h2>
        </div>
        <div id="output"></div>
      </motion.div>
      <style></style>
    </div>
  );
};

export default Scene1;
