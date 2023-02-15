import React from "react";
import { useNavigate , useLocation} from "react-router-dom";
import BackHome from "../modal/BackHomeDrop";
import "./Scene10_test.css";
import axios from "axios";


// 하단은 음성파일
const audio10_1 = new Audio("sound/10-1.mp3");
const audio10_2 = new Audio("sound/10-2.mp3");
const start = () => {
  setTimeout(() => {
    audio10_1.play();
  }, 1000);
};
const start2 = () => {
  setTimeout(() => {
    audio10_2.play();
  }, 13500);
};

// 하단은 자막
function Change_text(){
  const subtitle = document.getElementById('Text')
  setTimeout(()=>{
    subtitle.innerText = '어서 나가서 우물 옆 나무 위에 숨어버리자!'
  },1000)
  setTimeout(()=>{
    subtitle.innerText = '나무라고 말해 볼까요?'
  },5960)
  setTimeout(()=>{
    subtitle.innerText = '오누이는 나무 위로 올라갔어요.'
  },13500)
}
const Scene10_test = () => {
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
            url: `http://localhost:3001/startrecord?wordname=나무&hist_num=${number}&word_id=8`,
          }),
        6300
      );
  // 하단은 페이지 넘어가는 시간
  setTimeout(() => navigate(`/scene11_test`, { state: { value: number } }), 17000);
  // 하단은 오디오 파일 자동재생
  setTimeout(start)
  setTimeout(start2)

  return (
    <div className="SceneBox">
      <BackHome></BackHome>
          <img src="img/scene10/10-배경.png" className="bgImg" alt="#"></img>
          <img src="img/scene10/10-오누이.png" className="siblings" alt="#"></img>
          <h1 className="word10">나무</h1>
          <div className="popup10"></div>
          <h2 id="Text"> </h2>
    </div>
  );
};

export default Scene10_test;
