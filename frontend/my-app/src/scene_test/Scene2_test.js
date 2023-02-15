import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BackHome from "../modal/BackHomeDrop";
import "./Scene2_test.css";
import axios from "axios";

// 음성파일
const audio = new Audio("sound/2.mp3");
const start = () => {
  setTimeout(() => {
    audio.play();
  }, 1000);
};

// 자막
function Change_text() {
  const subtitle = document.getElementById("Text");
  setTimeout(() => {
    subtitle.innerText = "일을 마친 엄마가 집으로 돌아가고 있었는데,";
  }, 1000);
  setTimeout(() => {
    subtitle.innerText = "갑자기 사나운 호랑이 한 마리가 나타났어요.";
  }, 3900);
  setTimeout(() => {
    subtitle.innerText = "호랑이라고 말해볼까요?";
  }, 8000);
}

const Scene2_test = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const number = location.state.value;
  console.log(number);
  // 자막 시작 딜레이
  setTimeout(Change_text);

 setTimeout(
        () =>
          axios({
            method: "get",
            url: `http://localhost:3001/startrecord?wordname=호랑이&hist_num=${number}&word_id=2`,
          }),
        7500
      );
  // 페이지 넘어가는 시간
  setTimeout(() => navigate(`/scene6_test`, { state: { value: number } }), 16050);
  // 오디오 파일 자동재생
  setTimeout(start);

  return (
    <div className="SceneBox">
      <BackHome></BackHome>
      <img src="img/scene2/2-배경.png" className="bgImg" alt="#"></img>
      <img src="img/scene2/2-엄마.png" className="mother2" alt="#"></img>
      <img src="img/scene2/2-호랑이.png" className="tiger2" alt="#"></img>
      <img src="img/scene2/2-나무.png" className="tree" alt="#"></img>
      <h1 className="word2">호랑이</h1>
      <div className="popup2"></div>
      <h2 id="Text"> </h2>
      {/* <div>number</div> */}
    </div>
  );
};

export default Scene2_test;
