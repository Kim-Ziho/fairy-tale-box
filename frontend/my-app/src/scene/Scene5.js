import React from "react";
import { useNavigate , useLocation} from "react-router-dom";
import BackHome from "../modal/BackHomeDrop";
import "./Scene5.css";
import axios from "axios"

// 음성파일
const audio5_1 = new Audio("sound/5-1.mp3");
const audio5_2 = new Audio("sound/5-2.mp3");
const start1 = () => {
  setTimeout(() => {
    audio5_1.play();
  }, 1000);
};
const start2 = () => {
  setTimeout(() => {
    audio5_2.play();
  }, 16000);
};

// 자막
function Change_text() {
  const subtitle = document.getElementById("Text");
  setTimeout(() => {
    subtitle.innerText = "음, 떡이 아주 맛있군!";
  }, 1000);
  setTimeout(() => {
    subtitle.innerText = "호랑이는 떡을 배불리 먹고서";
  }, 3900);
  setTimeout(() => {
    subtitle.innerText = "약속을 깨고 엄마까지 잡아먹어 버렸어요.";
  }, 5400);
  setTimeout(() => {
    subtitle.innerText = "약속이라고 말해볼까요?";
  }, 9000);
  setTimeout(() => {
    subtitle.innerText = "오호라, 아이들이 기다린다고?";
  }, 16000);
  setTimeout(() => {
    subtitle.innerText = "안 가볼 수 없지!";
  }, 18500);
}

const Scene5 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const number =  location.state.value;
  console.log(number)
  // 자막 시작 딜레이
  setTimeout(Change_text);
  setTimeout(
        () =>
          axios({
            method: "get",
            url: `http://localhost:3001/startrecord?wordname=약속&hist_num=${number}&word_id=4`,
          }),
        8500
      );
  // 페이지 넘어가는 시간
  setTimeout(() => navigate(`/scene6`, { state: { value: number } }), 19700);
  // 오디오 파일 자동재생
  setTimeout(start1);
  setTimeout(start2);
  
  return (
    <div className="SceneBox">
      <BackHome></BackHome>   
        <img src="img/scene5/5.png" className="bgImg5-2" alt="#"></img>
        <img src="img/scene5/5-공격전.png" className="bgImg5" alt="#"></img>  
        <h2 id="Text"> </h2>
        <h1 className="word5">약속</h1>
        <div className="popup5"></div>
    </div>
  );
};

export default Scene5;
