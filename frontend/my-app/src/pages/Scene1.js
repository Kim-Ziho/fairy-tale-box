import React ,{ useState,useEffect } from "react";
import {Link , Navigate, useNavigate} from 'react-router-dom';
import {motion} from "framer-motion"
import Modal from "./Modal.js";

// 하단은 음성파일
const audio = new Audio("sound/sample.wav")
const start = () => { audio.play() }
const stop = () => {
    audio.pause()
    } 
// 하단은 자막
// function timedText() {
//     var x = document.getElementById("text");
//     setTimeout(() => { x.value = "옛날 옛날에 마음씨 좋은 엄마와 사이좋은 오누이가 살고 있었어요." }, 2000);
//     setTimeout(() => { x.value = "어느날, 엄마가 잔칫집에 일을 하러가기 전에 오누이에게 당부를(말) 했어요." }, 4000);
//     setTimeout(() => { x.value = "엄마 - “얘들아, 혹시 누군가 문을 열어달라고 하면 엄마말고는 문을 열어 주면 안된단다!”" }, 6000);
//     setTimeout(() => { x.value = "오누이 - “네 엄마!" }, 8000);
//     } 

let timeoutID;

function setOutput(outputContent) {
  document.querySelector('#output').textContent = outputContent;
}

function delayedMessage() {
  setOutput('');
  timeoutID = setTimeout(setOutput, 2*1000, '너무 느려요!');
}

function clearMessage() {
  clearTimeout(timeoutID);
}



const Scene1 = () => {        
    const navigate = useNavigate();
    const [pausemodalOpen, setModalOpen] = useState(false);
    
    useEffect(() => {
        const timersound = setTimeout(() => start(), 1000);
       
      }, []);

    const startTime = Date.now()
      
    const openModal = () => {
        clearTimeout(timeoutID);
        setModalOpen(true)
        stop();
    };
    
    const closeModal = () => {
        setModalOpen(false);
        start();
        // setTimeout(timeoutID,stopTime)
    };

    
    // 밑은 시작지점
    
    // useEffect(() => {
    //     const timertext = setTimeout(() => timedText(), 1000);
    // }, []);
    
    // const timerpage = setTimeout(() => navigate(`/scene2`), 3000);
    

    return( 
        <motion.div
        initial={{x:500}}
        animate={{x:0}}
        exit={{opacity: 0}}
        >  
        {/* <img src="img/구름1.jpg"></img> */}
        <Link to = "/scene2">
            <button>
                다음 씬입니다
            </button>
        </Link>
        {/* <input type="text" id="text"></input> */}
        <button onClick={openModal}>일시정지</button>
        <button onClick={delayedMessage}>2초 뒤 메시지 표시</button>
        {startTime}
        <div id="output"></div>
        <Modal open={pausemodalOpen} close={closeModal} header="해님 달님"> 
        <a href="/home">홈으로</a>   
        </Modal>
        </motion.div>
    )

    
        
    
} 


export default Scene1