import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BackHome from "../modal/BackHomeDrop";
import "./Scene14_test.css";

// 하단은 음성파일
const audio14 = new Audio("sound/14.mp3");
const start = () => {
  setTimeout(() => {
    audio14.play();
  }, 1000);
};

// 하단은 자막
function Change_text(){
  const subtitle = document.getElementById('Text')
  setTimeout(()=>{
    subtitle.innerText = '이놈들, 나를 속였겠다? 도끼로 나무를 잘라주지!'
  },1000)
  setTimeout(()=>{
    subtitle.innerText = '호랑이가 도끼로 나무를 쿵쿵 찍고 있어요.'
  },5300)
  setTimeout(()=>{
    subtitle.innerText = '나무에서 떨어지지 않게 바닥에 몸을 웅크리세요!'
  },10730)
}
const Scene14_test = () => {
  function moveimg() {
    const siblings14 = document.querySelector(".siblings14")
    const siblings14_2 = document.querySelector(".siblings14-2")
    document.addEventListener("mousemove", (e) => { // mousemove이벤트를 이용해 움
  
      // 마우스의 좌표는 clientX와 clientY를 이용해 알수 있다. -> 브라우저 window의 좌표값 위치를 전달한다.
  
      // pageX, pageY와는 다름.
      // const mouseX = e.clientX;
  
      const mouseY = e.clientY;
        
      // console.log(mouseY)
      
      if( mouseY>540 ){
        siblings14.animate([
          { opacity : 1 },
          { opacity : 0 }
        ],{
          duration:1000,
          fill:'forwards'
        })
        siblings14_2.animate([
          { opacity : 0 },
          { opacity : 1 }
        ],{
          duration:1000,
          fill:'forwards'
        })

        // navigate('/scene9')
      }
    });
  }
  const navigate = useNavigate();
  const location = useLocation();
  const number =  location.state.value;
  console.log(number)
  // 하단은 자막 시작 딜레이
  setTimeout(Change_text)
  // 하단은 페이지 넘어가는 시간
  setTimeout(() => navigate(`/scene15_test`, { state: { value: number } }), 19000);
  // 하단은 오디오 파일 자동재생
  setTimeout(start)
  setTimeout(moveimg,13000)
  return (
    <div className="SceneBox">
      <BackHome></BackHome>
      <img src="img/scene14/14-오누이2.png" className="siblings14-2" alt="#"></img>
      <img src="img/scene14/14-오누이.png" className="siblings14" alt="#"></img>
      <img src="img/scene14/14-배경1.png" className="bgImg14" alt="#"></img>
      <img src="img/scene14/14-호랑이.png" className="tiger14" alt="#"></img>
      <img src="img/scene14/14-호랑이2.png" className="tiger14-2" alt="#"></img>
      <h2 id="Text"> </h2>
    </div>
  );
};

export default Scene14_test;
