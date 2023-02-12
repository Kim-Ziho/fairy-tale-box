import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BackHome from "../modal/BackHomeDrop";
import "./Scene15.css";

// 하단은 음성파일
const audio15 = new Audio("sound/15.mp3");
const start = () => {
  setTimeout(() => {
    audio15.play();
  }, 1000);
};


// 하단은 자막
function Change_text(){
  const subtitle = document.getElementById('Text')
  setTimeout(()=>{
    subtitle.innerText = '오누이는 올라오는 호랑이를 보며,'
  },1000)
  setTimeout(()=>{
    subtitle.innerText = '무서워 눈을 꼭 감고, 하늘에 빌었어요.'
  },3300)
  setTimeout(()=>{
    subtitle.innerText = '하느님! 동아줄을 내려 주세요!'
  },7660)
  setTimeout(()=>{
    subtitle.innerText = '제발 도와주세요!'
  },10940)
  setTimeout(()=>{
    subtitle.innerText = '동아줄이 내려오도록 손을 머리 위로 만세 해볼까요?'
  },14140)
  setTimeout(()=>{
    subtitle.innerText = '한 번 더 만세!'
  },20230)
  setTimeout(()=>{
    subtitle.innerText = '마지막으로 만세!'
  },24020)
}
const Scene15 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const number =  location.state.value;
  console.log(number)
  // 하단은 자막 시작 딜레이
  setTimeout(Change_text)
  // 하단은 페이지 넘어가는 시간
  setTimeout(() => navigate(`/scene16`, { state: { value: number } }), 30020);
  // 하단은 오디오 파일 자동재생
  setTimeout(start)
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
      <h2 id="Text"> </h2>
    </div>
  );
};

export default Scene15;
