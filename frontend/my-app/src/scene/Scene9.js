import React, {useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BackHome from "../modal/BackHomeDrop";
import "./Scene9.css";
import axios from "axios"

// 하단은 음성파일
const audio9 = new Audio("sound/9.mp3");
const start = () => {
  setTimeout(() => {
    audio9.play();
  }, 1000);
};

// 하단은 자막
function Change_text(){
  const subtitle = document.getElementById('Text')
  setTimeout(()=>{
    subtitle.innerText = '바깥에 호랑이가 있어!'
  },1000)
  setTimeout(()=>{
    subtitle.innerText = '으악! 호랑이 손이야!'
  },3320)
  setTimeout(()=>{
    subtitle.innerText = '손이라고 말해볼까요?'
  },6800)
}
const Scene9 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const number =  location.state.value;
  console.log(number)
  // 하단은 자막 시작 딜레이
  setTimeout(Change_text)
  useEffect(() => {
  axios({
      method: "post",
      url: "http://i8c101.p.ssafy.io/api/history",
      data: {
        member_id: 5,
        story_id: 1,
        studyDate: new Date(),
      },
    }).then((res) => {
      const number = res.data;
      setTimeout(
        () =>
          axios({
            method: "get",
            url: `http://192.168.100.245:3001/startrecord?wordname=손&hist_num=${number}&word_id=7`,
          }),
        6300
      );
    });
  }, [])
  // 하단은 페이지 넘어가는 시간
  setTimeout(() => navigate(`/scene10`, { state: { value: number } }), 14800);
  // 하단은 오디오 파일 자동재생
  setTimeout(start)

  return (
    <div className="SceneBox">
      <BackHome></BackHome>
          <img src="img/scene9/9-배경.png" className="bgImg" alt="#"></img>
          <img src="img/scene9/9-오빠.png" className="brother9" alt="#"></img>
          <img src="img/scene9/9-동생.png" className="sister9" alt="#"></img>
          <img src="img/scene9/9-손1.png" className="hand1" alt="#"></img>
          <img src="img/scene9/9-손2.png" className="hand2" alt="#"></img>
          <h1 className="word9">손</h1>
          <div className="popup9"></div>
          <h2 id="Text"> </h2>
    </div>
  );
};

export default Scene9;
