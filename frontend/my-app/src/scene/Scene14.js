import React from "react";
import { useNavigate } from "react-router-dom";
import BackHome from "../modal/BackHomeDrop";
import "./Scene14.css";

// 하단은 음성파일
const audio14 = new Audio("sound/14.mp3");
const start = () => {
  setTimeout(() => {
    audio14.play();
  }, 1000);
};

// 하단은 자막
function Change_text(){
  const subtitle = document.getElementById('Text')
  setTimeout(()=>{
    subtitle.innerText = '이 놈들, 나를 속였겠다? 도끼로 나무를 잘라주지!'
  },1000)
  setTimeout(()=>{
    subtitle.innerText = '호랑이가 도끼로 나무를 쿵쿵 찍고 있어요'
  },5300)
  setTimeout(()=>{
    subtitle.innerText = '나무에서 떨어지지 않게 바닥에 몸을 웅크리세요!'
  },10730)
}
const Scene14 = () => {
  const navigate = useNavigate();
  // 하단은 자막 시작 딜레이
  setTimeout(Change_text)
  // 하단은 페이지 넘어가는 시간
  const timerpage = setTimeout(() => navigate(`/scene15`), 17000);
  // 하단은 오디오 파일 자동재생
  setTimeout(start)
  return (
    <div className="SceneBox">
      <BackHome></BackHome>
      <img src="img/scene14/14-오누이2.png" className="siblings14-2"></img>
      <img src="img/scene14/14-오누이.png" className="siblings14"></img>
      <img src="img/scene14/14-배경1.png" className="bgImg14"></img>
      <img src="img/scene14/14-호랑이.png" className="tiger14"></img>
      <img src="img/scene14/14-호랑이2.png" className="tiger14-2"></img>
      <h2 id="Text"></h2>
    </div>
  );
};

export default Scene14;
