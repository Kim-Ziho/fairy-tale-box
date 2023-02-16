import React from "react";
import { useNavigate , useLocation} from "react-router-dom";
import BackHome from "../modal/BackHomeDrop";
import "./Scene17_test.css";

// 하단은 음성파일
const audio17 = new Audio("sound/17.mp3");
const start = () => {
  setTimeout(() => {
    audio17.play();
  }, 1000);
};


// 하단은 자막
function Change_text(){
  const subtitle = document.getElementById('Text')
  setTimeout(()=>{
    subtitle.innerText = '호랑이가 잡고 있던 동아줄은'
  },1000)
  setTimeout(()=>{
    subtitle.innerText = '중간에 툭 하고 끊어져서, 호랑이가 땅에 떨어져 버렸어요.'
  },3560)
}
const Scene17_test = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const number =  location.state.value;
  console.log(number)
  // 하단은 자막 시작 딜레이
  setTimeout(Change_text)
  // 하단은 페이지 넘어가는 시간
  setTimeout(() => navigate(`/scene18_test`, { state: { value: number } }), 11000);
  // 하단은 오디오 파일 자동재생
  setTimeout(start)

  return (
    <div className="SceneBox">
      <BackHome></BackHome>
        <img src="img/scene17/17-배경.png" className="bgImg" alt="#"></img>
        <img src="img/scene17/17-호랑이.png" className="tiger17" alt="#"></img>
        <div className="hidden"></div>
        <h2 id="Text"> </h2>
    </div>
  );
};

export default Scene17_test;
