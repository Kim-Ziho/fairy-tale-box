import React from "react";
import { useNavigate , useLocation} from "react-router-dom";
import BackHome from "../modal/BackHomeDrop";
import "./Scene8.css";

// 하단은 음성파일
const audio8 = new Audio("sound/8.mp3");
const start = () => {
  setTimeout(() => {
    audio8.play();
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
  setTimeout(()=>{
    subtitle.innerText = '호랑이와 눈이 마주쳤어요!'
  },12710)
  setTimeout(()=>{
    subtitle.innerText = '큰일 났다!'
  },15690)
  setTimeout(()=>{
    subtitle.innerText = '오빠, 왜 그래?'
  },17170)
}


const Scene8 = () => {
  function moveimg() {
    const hole = document.querySelector(".hole")
    document.addEventListener("mousemove", (e) => { // mousemove이벤트를 이용해 움
  
      // 마우스의 좌표는 clientX와 clientY를 이용해 알수 있다. -> 브라우저 window의 좌표값 위치를 전달한다.
  
      // pageX, pageY와는 다름.
      const mouseX = e.clientX;
  
      const mouseY = e.clientY;
  
      hole.style.left = mouseX + 'px';
  
      hole.style.top = mouseY + 'px';
      
      console.log(mouseX,mouseY)
      
      // if( mouseX<100){
      //   navigate('/scene9')
      // }
  });
  }
  const navigate = useNavigate();
  // const location = useLocation();
  // const number =  location.state.value;
  // console.log(number)
  // 하단은 자막 시작 딜레이
  setTimeout(Change_text)
  // 하단은 페이지 넘어가는 시간
  // setTimeout(() => navigate(`/scene9`), 19000);
  // 하단은 오디오 파일 자동재생
  setTimeout(start)
  setTimeout(moveimg,3000)
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
