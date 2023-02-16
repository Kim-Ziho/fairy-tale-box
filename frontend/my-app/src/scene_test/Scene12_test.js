import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BackHome from "../modal/BackHomeDrop";
import "./Scene12_test.css";

// 하단은 음성파일
const audio12 = new Audio("sound/12.mp3");
const start = () => {
  setTimeout(() => {
    audio12.play();
  }, 1000);
};

// 하단은 자막
function Change_text(){
  const subtitle = document.getElementById('Text')
  setTimeout(()=>{
    subtitle.innerText = '찾았다! 나무 위에 있구나!'
  },1000)
  setTimeout(()=>{
    subtitle.innerText = '호랑이는 나무 위에 올라가려 했지만,'
  },2730)
  setTimeout(()=>{
    subtitle.innerText = '나무에 오르기 어려웠어요.'
  },5742)
  setTimeout(()=>{
    subtitle.innerText = '그 모습을 본 동생이 말했어요.'
  },8742)
  setTimeout(()=>{
    subtitle.innerText = '하하하, 손에 참기름을 바르고 올라오면 쉽지!'
  },11280)
}

const Scene12_test = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const number =  location.state.value;
  console.log(number)
  // 하단은 자막 시작 딜레이
  setTimeout(Change_text)
  // 하단은 페이지 넘어가는 시간
  setTimeout(() => navigate(`/scene14_test`, { state: { value: number } }), 17000);
  // 하단은 오디오 파일 자동재생
  setTimeout(start)
  return (
    <div className="SceneBox">
      <BackHome></BackHome>
          <img src="img/scene12/12-배경.png" className="bgImg" alt="#"></img>
          <img src="img/scene12/12-오누이.png" className="siblings12" alt="#"></img>
          <img src="img/scene12/12-호랑이.png" className="tiger12" alt="#"></img>
          <h2 id="Text"> </h2>
    </div>
  );
};

export default Scene12_test;
