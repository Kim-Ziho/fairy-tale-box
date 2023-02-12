import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BackHome from "../modal/BackHomeDrop";
import "./Scene16.css";

// 하단은 음성파일
const audio16 = new Audio("sound/16.mp3");
const start = () => {
  setTimeout(() => {
    audio16.play();
  }, 1000);
};

// 하단은 자막
function Change_text(){
  const subtitle = document.getElementById('Text16')
  setTimeout(()=>{
    subtitle.innerText = '그러자, 하늘에서 동아줄이 내려왔고'
  },1000)
  setTimeout(()=>{
    subtitle.innerText = '오누이는 동아줄을 타고, 하늘로 올라갔어요.'
  },4310)
  setTimeout(()=>{
    subtitle.innerText = '이를 본 호랑이도 동아줄을 내려달라고 빌었지요.'
  },7930)
  setTimeout(()=>{
    subtitle.innerText = '그런데 이번에는, 썩은 동아줄이 내려왔어요.'
  },11790)
  setTimeout(()=>{
    subtitle.innerText = '호랑이는 신나게 줄을 타고 올라갔어요.'
  },15780)
}
const Scene16 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const number =  location.state.value;
  console.log(number)
  // 하단은 자막 시작 딜레이
  setTimeout(Change_text)
  // 하단은 페이지 넘어가는 시간
  setTimeout(() => navigate(`/scene17`, { state: { value: number } }), 20000);
  // 하단은 오디오 파일 자동재생
  setTimeout(start)

  return (
    <div className="SceneBox">
      <BackHome></BackHome>
        <img src="img/scene16/16-배경.png" className="bgImg16" alt="#"></img>
        <img src="img/scene16/16-구름.png" className="cloud" alt="#"></img>
        <img src="img/scene16/16-오누이.png" className="siblings16" alt="#"></img>
        <img src="img/scene16/16-호랑이.png" className="tiger16" alt="#"></img>
        <h2 id="Text16"> </h2>
        <div className="hidden16"></div>
        <div className="hidden16-2"></div>
    </div>
  );
};

export default Scene16;
