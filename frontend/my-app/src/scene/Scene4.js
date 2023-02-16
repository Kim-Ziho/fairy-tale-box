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
let time4 = 0
const Scene4 = () => {
  function moveimg4() {
    const rice4 = document.querySelector(".rice4")
    window.source.onmessage = function (event) {
      window.pose = JSON.parse(event.data);


      // 마우스의 좌표는 clientX와 clientY를 이용해 알수 있다. -> 브라우저 window의 좌표값 위치를 전달한다.

      // pageX, pageY와는 다름.
      // const mouseX = e.clientX;

      // const mouseY = e.clientY;

      // console.log(mouseX,mouseY)

      // if( rightWristX<200 && time4 === 0){
      //   rice4.animate([
      //     { transform: 'translateY(0)' },
      //     { transform: 'translateY(-30%)' }
      //   ],{
      //     duration:2000,
      //     fill:'forwards'
      //   })
      // time4 += 1
      // }
    };
  }
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
  setTimeout(moveimg4, 7000)
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
