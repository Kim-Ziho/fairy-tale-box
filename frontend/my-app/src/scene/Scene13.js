import React from "react";
import { useNavigate , useLocation} from "react-router-dom";
import BackHome from "../modal/BackHomeDrop";
import "./Scene13.css";

// 하단은 음성파일
const audio13 = new Audio("sound/13.mp3");
const start = () => {
  setTimeout(() => {
    audio13.play();
  }, 1000);
};

// 하단은 자막
function Change_text(){
  const subtitle = document.getElementById('Text')
  setTimeout(()=>{
    subtitle.innerText = '오호라, 참기름을 발라보자!'
  },1000)
  setTimeout(()=>{
    subtitle.innerText = '호랑이가 못 올라오도록 나무에 참기름을 바르세요.'
  },4580)
  setTimeout(()=>{
    subtitle.innerText = '호랑이는 참기름 때문에 계속 미끄러져요.'
  },14320)
}

const Scene13 = () => {
  function moveimg() {
    const oil = document.querySelector(".oil")
    document.addEventListener("mousemove", (e) => { // mousemove이벤트를 이용해 움
  
      // 마우스의 좌표는 clientX와 clientY를 이용해 알수 있다. -> 브라우저 window의 좌표값 위치를 전달한다.
  
      // pageX, pageY와는 다름.
      const mouseX = e.clientX;
  
      const mouseY = e.clientY;
  
      oil.style.left = mouseX + 'px';
  
      oil.style.top = mouseY + 'px';
      
      // console.log(mouseX,mouseY)
      
  });
  }
  const navigate = useNavigate();
  const location = useLocation();
  const number =  location.state.value;
  console.log(number)
  // 하단은 자막 시작 딜레이
  setTimeout(Change_text)
  // 하단은 페이지 넘어가는 시간
  setTimeout(() => navigate(`/scene14`, { state: { value: number } }), 21000);
  // 하단은 오디오 파일 자동재생
  setTimeout(start)
  setTimeout(moveimg,5000)

  return (
    <div className="SceneBox">
      <BackHome></BackHome>  
          <img src="img/scene13/13-배경2.png" className="bgImg13-2" alt="#"></img>   
          <img src="img/scene13/13-배경1.png" className="bgImg13" alt="#"></img>   
          <img src="img/scene13/13-기름병.png" className="oil" alt="#"></img>   
          <img src="img/scene13/13-호랑이.png" className="tiger13" alt="#"></img>   
          <h2 id="Text"> </h2> 
    </div>
  );
};

export default Scene13;
