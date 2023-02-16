import React from "react";
import { useNavigate , useLocation} from "react-router-dom";
import BackHome from "../modal/BackHomeDrop";
import "./Scene18_test.css";

// 하단은 음성파일
const audio18 = new Audio("sound/18.mp3");
const start = () => {
  setTimeout(() => {
    audio18.play();
  }, 1000);
};

// 하단은 자막
function Change_text(){
  const subtitle = document.getElementById('Text')
  setTimeout(()=>{
    subtitle.innerText = '오누이는 동아줄을 타고 마침내 하늘나라에 도착했고,'
  },1000)
  setTimeout(()=>{
    subtitle.innerText = '하늘나라에서 기다리던 엄마와도 다시 만날 수 있었답니다.'
  },5320)
}
const Scene18_test = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const number =  location.state.value;
  console.log(number)
  // 하단은 자막 시작 딜레이
  setTimeout(Change_text)
  // 하단은 페이지 넘어가는 시간
  setTimeout(() => navigate(`/scene19_test`, { state: { value: number } }), 11500);
  // 하단은 오디오 파일 자동재생
  setTimeout(start)
  return (
    <div className="SceneBox">
      <BackHome></BackHome>
        <img src="img/scene18/18-배경.png" className="bgImg" alt="#"></img>   
        <img src="img/scene18/18-오누이.png" className="siblings18" alt="#"></img>   
        <img src="img/scene18/18-엄마.png" className="mother18" alt="#"></img> 
        <h2 id="Text"> </h2>  
        <div className="hidden"></div>
    </div>
  );
};

export default Scene18_test;
