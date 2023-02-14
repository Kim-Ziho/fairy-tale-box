import React from "react";
import { useNavigate , useLocation} from "react-router-dom";
import BackHome from "../modal/BackHomeDrop";
import "./Scene3.css";
import axios from "axios";

// 하단은 음성파일
const audio = new Audio("sound/3.mp3");
const start = () => {
  setTimeout(() => {
    audio.play();
  }, 1000);
};

// 자막
function Change_text() {
  const subtitle = document.getElementById("Text");
  setTimeout(() => {
    subtitle.innerText = "어흥, 떡 하나 주면 안 잡아먹지!";
  }, 1000);
  setTimeout(() => {
    subtitle.innerText = "떡이라고 말해볼까요?";
  }, 3800);
}

const Scene3 = () => {
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
            url: `http://localhost:3001/startrecord?wordname=떡&hist_num=${number}&word_id=3`,
          }),
        3300
      );
  // 페이지 넘어가는 시간
  setTimeout(() => navigate(`/scene4`, { state: { value: number } }), 11610);
  // 오디오 파일 자동재생
  setTimeout(start);

  return (
    <div className="SceneBox">
      <BackHome></BackHome>  
        <img src="img/scene3/3-배경.png" className="bgImg" alt="#"></img>       
        <img src="img/scene3/3-호랑이.png"className="tiger3" alt="#"></img>
        <h2 id="Text"> </h2>
        <h1 className="word3">떡</h1>
        <div className="popup3"></div>
        <div className="hidden"></div>
    </div>
  );
};

export default Scene3;
