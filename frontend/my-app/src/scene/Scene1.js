import React from "react";
import { motion } from "framer-motion";
import BackHome from "../modal/BackHomeModal";
import "./Scene1.css";

// 하단은 음성파일
const audio = new Audio("sound/sample.wav");
const start = () => {
  audio.play();
};
const stop = () => {
  audio.pause();
};

// 하단은 자막 수정해서 사용할 것.
function Change_text(){
  const subtitle = document.getElementById('Text')
  setTimeout(()=>{
    subtitle.innerText = '옛날옛날에 엄마와'
  },1000)
  setTimeout(()=>{
    subtitle.innerText = '사이좋은 오누이가 살았어요'
  },2000)
}

const Scene1 = () => {
  // 하단은 자막 시작 딜레이
  setTimeout(Change_text,1000)
  // const timerpage = setTimeout(() => navigate(`/scene2`), 10000);

  return (

    <div className="SceneBox">
      <BackHome></BackHome>
      <motion.div initial={{ x: 500 }} animate={{ x: 0 }} exit={{ opacity: 0 }}>
        <div className="bgImg">
          <img src="img/scene1/1-배경.png"></img>
          <div className="mother1">
            <img src="img/scene1/1-엄마.png"></img>
          </div>
          <div className="brother1">
            <img src="img/scene1/1-오빠.png"></img>
          </div>
          <div className="sister1">
            <img src="img/scene1/1-동생.png"></img>
          </div>
          <h2 id="Text">''</h2>
        </div>
        <div id="output"></div>
      </motion.div>
      <style></style>
    </div>
  );
};

export default Scene1;
