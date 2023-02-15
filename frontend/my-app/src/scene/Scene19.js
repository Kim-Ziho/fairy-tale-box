import React from "react";
import {useNavigate,useLocation} from "react-router-dom";
import BackHome from "../modal/BackHomeDrop";
import "./Scene19.css";

// 하단은 음성파일
const audio19 = new Audio("sound/19.mp3");

const start = () => {
  setTimeout(() => {
    console.log('d')
    audio19.play();
  }, 1000);
};

// 하단은 자막
function Change_text(){
  const subtitle = document.getElementById('Text')
  setTimeout(()=>{
    subtitle.innerText = '이렇게 해서, 하늘로 올라간 귀여운 동생은 해님이,'
  },1000)
  setTimeout(()=>{
    subtitle.innerText = '씩씩한 오빠는 달님이 되었답니다.'
  },5020)
}

const Scene19 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const number =  location.state.value;
  console.log(number)

  setTimeout(start)
  setTimeout(Change_text)
  setTimeout(() => navigate(`/Result`, { state: { value: number } }), 9000);
  
  return (
    
    <div className="SceneBox">
      <BackHome></BackHome>
        <img src="img/scene19/19.png" className="bgImg" alt="#"></img>
        <h2 id="Text"> </h2>  
    </div>
  );
};

export default Scene19;
