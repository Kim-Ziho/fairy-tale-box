import React from "react";
import { useNavigate } from "react-router-dom";
import BackHome from "../modal/BackHomeModal";
import "./Scene13.css";

// 하단은 음성파일
const audio13 = new Audio("sound/13.mp3");
const start = () => {
  setTimeout(() => {
    audio13.play();
  }, 1000);
};

// 하단은 자막
function Change_text(){
  const subtitle = document.getElementById('Text')
  setTimeout(()=>{
    subtitle.innerText = '오호라, 참기름을 발라보자!'
  },1000)
  setTimeout(()=>{
    subtitle.innerText = '호랑이가 못 올라오도록 나무에 참기름을 바르세요.'
  },4580)
  setTimeout(()=>{
    subtitle.innerText = '호랑이는 참기름 때문에 계속 미끄러져요.'
  },14320)
}

const Scene13 = () => {
  const navigate = useNavigate();
  // const timerpage = setTimeout(() => navigate(`/scene2`), 10000);
  // 하단은 자막 시작 딜레이
  setTimeout(Change_text)
  // 하단은 페이지 넘어가는 시간
  // const timerpage = setTimeout(() => navigate(`/scene12`), 17000);
  // 하단은 오디오 파일 자동재생
  setTimeout(start)
  return (
    <div className="SceneBox">
      <BackHome></BackHome>  
          <img src="img/scene13/13-배경2.png" className="bgImg13-2"></img>   
          <img src="img/scene13/13-배경1.png" className="bgImg13"></img>   
          <img src="img/scene13/13-기름병.png" className="oil"></img>   
          <img src="img/scene13/13-호랑이.png" className="tiger13"></img>   
          <h2 id="Text"></h2> 
    </div>
  );
};

export default Scene13;
