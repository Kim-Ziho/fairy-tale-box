import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackHome from "../modal/BackHomeDrop";
import "./Scene1.css";
import axios from "axios";

// 하단은 음성파일 Audio에 음성파일 경로를 넣으면 됩니다.
const audio = new Audio("sound/1.mp3");
const start = () => {
  setTimeout(() => {
    audio.play();
  }, 1000);
};

// 자막
function Change_text() {
  const subtitle = document.getElementById("Text");
  setTimeout(() => {
    subtitle.innerText = "옛날 옛날에 마음씨 좋은 엄마와";
  }, 1000);
  setTimeout(() => {
    subtitle.innerText = "사이좋은 오누이가 살고 있었어요.";
  }, 3500);
  setTimeout(() => {
    subtitle.innerText = "얘들아, 혹시 누군가 문을 열어달라고 하면";
  }, 5500);
  setTimeout(() => {
    subtitle.innerText = "엄마 말고는 문을 열어 주면 안 된단다!";
  }, 10000);
  setTimeout(() => {
    subtitle.innerText = "네, 그럴게요!";
  }, 12800);
  setTimeout(() => {
    subtitle.innerText = "엄마라고 말해볼까요?";
  }, 15050);
}

const Scene1 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    axios({
      method: 'post',
      url: "http://i8c101.p.ssafy.io/api/history",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      },
      data: {
        "story_id": 1,
        "studyDate": new Date()
      }
    })
      .then((res) => {
        const number = res.data
        setTimeout(() => navigate(`/scene2`, { state: { value: number } }), 23120)
        setTimeout(() =>
          axios({
            method: 'get',
            url: `http://localhost:3001/startrecord?wordname=엄마&hist_num=${number}&word_id=1`
          }), 14050
        )
      })
  });

  // 자막 시작 딜레이
  setTimeout(Change_text);

  // 오디오 파일 자동재생
  setTimeout(start);

  return (

    <div className="SceneBox">
      <BackHome></BackHome>
      <img src="img/scene1/1-배경.png" className="bgImg" alt="#"></img>
      <img src="img/scene1/1-엄마.png" className="mother1" alt="#"></img>
      <img src="img/scene1/1-오빠.png" className="brother1" alt="#"></img>
      <img src="img/scene1/1-동생.png" className="sister1" alt="#"></img>
      <h1 className="word1">엄마</h1>
      <div className="popup1"></div>
      <h2 id="Text"> </h2>
    </div>
  );
};

export default Scene1;
