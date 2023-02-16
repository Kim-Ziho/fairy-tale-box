import React from "react";
import { useNavigate , useLocation} from "react-router-dom";
import BackHome from "../modal/BackHomeDrop";
import "./Scene7_test.css";
import axios from "axios";

// 하단은 음성파일
const audio7_1 = new Audio("sound/7-1.mp3");
const audio7_2 = new Audio("sound/7-2.mp3");
const start1 = () => {
  setTimeout(() => {
    audio7_1.play();
  }, 1000);
};
const start2 = () => {
  setTimeout(() => {
    audio7_2.play();
  }, 10000);
};


// 하단은 자막
function Change_text(){
  const subtitle = document.getElementById('Text')
  setTimeout(()=>{
    subtitle.innerText = '엄마 목소리가 이상해!'
  },1000)
  setTimeout(()=>{
    subtitle.innerText = '목소리라고 말해볼까요?'
  },3770)
  setTimeout(()=>{
    subtitle.innerText = '내가 구멍으로 살짝 봐볼게!'
  },10000)
}
const Scene7_test = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const number =  location.state.value;
  console.log(number)
  // 하단은 자막 시작 딜레이
  setTimeout(Change_text)
  setTimeout(
        () =>
          axios({
            method: "get",
            url: `http://localhost:3001/startrecord?wordname=목소리&hist_num=${number}&word_id=6`,
          }),
        3270
      );
  // 하단은 페이지 넘어가는 시간
  setTimeout(() => navigate(`/scene8_test`, { state: { value: number } }), 13000);
  // 하단은 오디오 파일 자동재생
  setTimeout(start1)
  setTimeout(start2)
  return (
    <div className="SceneBox">
      <BackHome></BackHome>
          <img src="img/scene7/7-배경.png" className="bgImg" alt="#"></img>
          <h1 className="word7">목소리</h1>
          <div className="popup7"></div>
          <h2 id="Text"> </h2> 
    </div>
  );
};

export default Scene7_test;
