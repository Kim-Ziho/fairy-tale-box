import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BackHome from "../modal/BackHomeDrop";
import "./Scene11.css";

// 하단은 음성파일
const audio11 = new Audio("sound/11.mp3");
const start = () => {
  setTimeout(() => {
    audio11.play();
  }, 1000);
};

// 하단은 자막
function Change_text(){
  const subtitle = document.getElementById('Text')
  setTimeout(()=>{
    subtitle.innerText = '호랑이가 우물에 비친 오누이를 보았어요'
  },1000)
  setTimeout(()=>{
    subtitle.innerText = '얘들아, 거긴 어떻게 들어갔니?'
  },4730)
  setTimeout(()=>{
    subtitle.innerText = '오누이는 어느 쪽에 있을까요?'
  },8742)
  setTimeout(()=>{
    subtitle.innerText = '오른쪽 왼쪽으로 움직이며 오누이를 찾아보세요'
  },10742)
}


const Scene11_test = () => {
  function movewell(){

    const well = document.querySelector(".well");
    let center = {
        x : well.getBoundingClientRect().left + (well.clientWidth/2),
        y : well.getBoundingClientRect().top + (well.clientHeight/2)
    }
  
    window.addEventListener('resize', ()=>{
        center = {
            x : well.getBoundingClientRect().left + (well.clientWidth/2),
            y : well.getBoundingClientRect().top + (well.clientHeight/2)
        }
        console.log('실행');
    })
    document.addEventListener("mousemove", (e) => {
    const x = center.x - e.clientX;
    const y = center.y - e.clientY;
    
    const radian = Math.atan2(y, x);
    const degree = (radian * 180 / Math.PI).toFixed(0);
    well.style.transform = 'translate(-50%, -50%) rotate(' + degree + 'deg)';
  
    // console.log(x,y)
    
  })}
  const navigate = useNavigate();
  const location = useLocation();
  const number =  location.state.value;
  console.log(number)
  // 하단은 자막 시작 딜레이
  setTimeout(Change_text)
  // 하단은 페이지 넘어가는 시간
  setTimeout(() => navigate(`/scene12_test`, { state: { value: number } }), 18000);
  // 하단은 오디오 파일 자동재생
  setTimeout(start)
  setTimeout(movewell,11000)
  return (
    <div className="SceneBox">
      <BackHome></BackHome>
          <img src="img/scene11/11-우물.png" className="well" alt="#"></img>
          <img src="img/scene11/11-배경.png" className="bgImg" alt="#"></img>
          <h2 id="Text"> </h2>
          <div className="hidden"></div>
    </div>
  );
};

export default Scene11_test;
