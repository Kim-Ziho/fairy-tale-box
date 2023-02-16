import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BackHome from "../modal/BackHomeDrop";
import "./Scene4.css";

// 음성파일
const audio = new Audio("sound/4.mp3");
const start = () => {
  setTimeout(() => {
    audio.play();
  }, 1000);
};

// 자막
function Change_text() {
  const subtitle = document.getElementById("Text");
  setTimeout(() => {
    subtitle.innerText = "엄마는 얼른 떡을 꺼내 호랑이에게 주었어요.";
  }, 1000);
  setTimeout(() => {
    subtitle.innerText = "팔을 들어 호랑이에게 떡을 주세요.";
  }, 5500);
}

function moveimg4() {
  const rice4 = document.querySelector(".rice4");
  rice4.animate([
    { transform: 'translateY(0)' },
    { transform: 'translateY(-30%)' }
  ],{
    duration:2000,
    fill:'forwards'
  })
}

const Scene4 = () => {
  let done = 0;
  const navigate = useNavigate();
  const location = useLocation();
  const number = location.state.value;
  console.log(number)
  // 자막 시작 딜레이
  setTimeout(Change_text);
  // 페이지 넘어가는 시간
  setTimeout(() => navigate(`/scene5`, { state: { value: number } }), 17400);
  // 오디오 파일 자동재생
  setTimeout(start);
  setTimeout(window.source.onmessage = function (event) {
    window.pose = JSON.parse(event.data);
    if (window.pose.right_wrist.y < window.pose.nose.y && window.pose.right_wrist.accur > 0.3 && window.pose.nose.accur > 0.3 && done === 0) {
      done = 1;
      moveimg4();
    };
  }, 7000)
  return (
    <div className="SceneBox">
      <BackHome></BackHome>
      <img src="img/scene4/4-배경.png" className="bgImg" alt="#"></img>
      <img src="img/scene4/4-호랑이.png" className="tiger4" alt="#"></img>
      <img src="img/scene4/4-떡.png" className="rice4" alt="#"></img>
      <h2 id="Text"> </h2>
      <div className="hidden"></div>
    </div>
  );
};

export default Scene4;
