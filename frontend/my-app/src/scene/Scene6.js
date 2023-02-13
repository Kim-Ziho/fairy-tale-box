import React, {useEffect} from "react";
import { useNavigate , useLocation} from "react-router-dom";
import BackHome from "../modal/BackHomeDrop";
import "./Scene6.css";
import axios from "axios"

// 음성파일
const audio6_1 = new Audio("sound/6-1.mp3");
const audio6_2 = new Audio("sound/6-2.mp3");
const start1 = () => {
  setTimeout(() => {
    audio6_1.play();
  }, 1000);
};
const start2 = () => {
  setTimeout(() => {
    audio6_2.play();
  }, 14000);
};

// 자막
function Change_text() {
  const subtitle = document.getElementById("Text");
  setTimeout(() => {
    subtitle.innerText = "호랑이는 엄마가 입던 옷을 입고";
  }, 1000);
  setTimeout(() => {
    subtitle.innerText = "오누이가 있는 집을 찾아갔어요.";
  }, 3900);
  setTimeout(() => {
    subtitle.innerText = "집이라고 말해볼까요?";
  }, 6500);
  setTimeout(() => {
    subtitle.innerText = "얘들아, 엄마 왔다!";
  }, 14000);
}

const Scene6 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const number =  location.state.value;
  console.log(number)
  // 자막 시작 딜레이
  setTimeout(Change_text);
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
            url: `http://192.168.100.245:3001/startrecord?wordname=집&hist_num=${number}&word_id=5`,
          }),
        6000
      );
    });
  }, []);
  // 페이지 넘어가는 시간
  setTimeout(() => navigate(`/scene7`, { state: { value: number } }), 17000);
  // 오디오 파일 자동재생
  setTimeout(start1);
  setTimeout(start2);

  return (
    <div className="SceneBox">
      <BackHome></BackHome>
        <img src="img/scene6/6-배경.png" className="bgImg" alt="#"></img> 
        <img src="img/scene6/6-호랑이.png" className="tiger6" alt="#"></img>
        <h1 className="word6">집</h1>
        <div className="popup6"></div>
        <h2 id="Text"> </h2>
   </div>
  );
};

export default Scene6;
