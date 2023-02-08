import React from "react";
import { useNavigate } from "react-router-dom";
import BackHome from "../modal/BackHomeModal";
import "./Scene6.css";

// 하단은 음성파일
const audio7_1 = new Audio("sound/7-1.mp3");
const audio7_2 = new Audio("sound/7-2.mp3");
const start1 = () => {
  setTimeout(() => {
    audio7_1.play();
  }, 1000);
};
const start2 = () => {
  setTimeout(() => {
    audio7_2.play();
  }, 10000);
};


// 하단은 자막
function Change_text(){
  const subtitle = document.getElementById('Text')
  setTimeout(()=>{
    subtitle.innerText = '엄마 목소리가 이상해!'
  },1000)
  setTimeout(()=>{
    subtitle.innerText = '목소리라고 말해볼까요? 목소리'
  },3770)
  setTimeout(()=>{
    subtitle.innerText = '내가 구멍으로 살짝 봐볼께!'
  },10000)
}
const Scene7 = () => {
  const navigate = useNavigate();

  // 하단은 자막 시작 딜레이
  setTimeout(Change_text)
  // 하단은 페이지 넘어가는 시간
  const timerpage = setTimeout(() => navigate(`/scene8`), 13000);
  // 하단은 오디오 파일 자동재생
  setTimeout(start1)
  setTimeout(start2)
  return (
    <div className="SceneBox">
      <BackHome></BackHome>
          <img src="img/scene7/7-배경.png" className="bgImg"></img>
          <h2 id="Text"></h2> 
    </div>
  );
};

export default Scene7;
