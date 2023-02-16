import React from "react";
import { useNavigate , useLocation} from "react-router-dom";
import BackHome from "../modal/BackHomeDrop";
import "./Scene8_test.css";

// 하단은 음성파일
const audio8_1 = new Audio("sound/8-1.mp3");
const audio8_2 = new Audio("sound/8-2.mp3");
const start = () => {
  setTimeout(() => {
    audio8_1.play();
  }, 1000);
};
// 하단은 자막
function Change_text(){
  const subtitle = document.getElementById('Text')
  setTimeout(()=>{
    subtitle.innerText = '구멍 사이에 있는 호랑이를 찾으세요!'
  },2118)
  setTimeout(()=>{
    subtitle.innerText = '여기? 저기? 호랑이가 어디에 있을까요?'
  },6632)
}

var op_count=1;
var settime_func;
function fade_out(){
  const hole = document.querySelector(".hole")
  op_count=op_count-0.4;
  hole.style.opacity=op_count;
  settime_func = setTimeout(fade_out,1000);
  if(op_count<0){
    clearTimeout(settime_func);
  }
}


const Scene8 = () => {
  function moveimg() {
    let done = 0;
    const hole = document.querySelector(".hole")
    window.source.onmessage = function(event) {
      window.pose = JSON.parse(event.data);
      let mouseX = window.pose.nose.x * window.innerWidth;
      let mouseY = window.pose.nose.y * window.innerHeight;
  
      // 마우스의 좌표는 clientX와 clientY를 이용해 알수 있다. -> 브라우저 window의 좌표값 위치를 전달한다.
      
      // pageX, pageY와는 다름.
      if (done === 0) {
        hole.style.left = mouseX + 'px';
        hole.style.top = mouseY + 'px';
      }
      
      if( window.pose.nose.x < 0.25 && window.pose.nose.y < 0.25 && done === 0 ){
        done = 1;
        const subtitle = document.getElementById('Text')
        audio8_1.pause()
        audio8_2.play()
        fade_out()
        setTimeout(()=>{
          subtitle.innerText = '호랑이와 눈이 마주쳤어요!'
        },1000)
        setTimeout(()=>{
          subtitle.innerText = '큰일 났다!'
        },3000)
        setTimeout(()=>{
          subtitle.innerText = '오빠, 왜 그래?'
        },5000)
        setTimeout(() => navigate(`/scene9`, { state: { value: number } }), 8000);
      }
    };
  }
  const navigate = useNavigate();
  const location = useLocation();
  const number =  location.state.value;
  console.log(number)
  // 하단은 자막 시작 딜레이
  setTimeout(Change_text)
  // 하단은 페이지 넘어가는 시간
  // setTimeout(() => navigate(`/scene9`), 19000);
  // 하단은 오디오 파일 자동재생
  setTimeout(start)
  setTimeout(moveimg,5000)
  return (
    <div className="SceneBox">
      <BackHome></BackHome>
          <img src="img/scene8/8-배경.png" className="bgImg" alt="#"></img>
          <img src="img/scene8/8-구멍.png" alt="#" className="hole"></img>
          <h2 id="Text"> </h2>
    </div>
  );
};

export default Scene8;
