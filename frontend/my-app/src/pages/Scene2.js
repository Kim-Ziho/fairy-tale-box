import React ,{ useState,useEffect } from "react";
import {Link , Navigate, useNavigate} from 'react-router-dom';
import {motion} from "framer-motion"
import Modal from "./Modal.js";
import "./Scene2.css"
import { positions } from "@mui/system";


// 하단은 음성파일
const audio = new Audio("sound/sample.wav")
const start = () => { audio.play() }
const stop = () => {
    audio.pause()
    } 

// 하단은 자막
function timedText() {
    var x = document.getElementById("text");
    setTimeout(() => { x.value = "옛날 옛날에 마음씨 좋은 엄마와 사이좋은 오누이가 살고 있었어요." }, 2000);
    setTimeout(() => { x.value = "어느날, 엄마가 잔칫집에 일을 하러가기 전에 오누이에게 당부를(말) 했어요." }, 4000);
    setTimeout(() => { x.value = "엄마 - “얘들아, 혹시 누군가 문을 열어달라고 하면 엄마말고는 문을 열어 주면 안된단다!”" }, 6000);
    setTimeout(() => { x.value = "오누이 - “네 엄마!" }, 8000);
    } 

const Scene2 = () => {        
    const navigate = useNavigate();
    const [pausemodalOpen, setModalOpen] = useState(false);
    
    useEffect(() => {
        const timersound = setTimeout(() => start(), 1000);
       
      }, []);
      
    const openModal = () => {
        setModalOpen(true)
        stop();
    };
    
    const closeModal = () => {
        setModalOpen(false);
        start();
    };

    
    // 밑은 시작지점
    
    useEffect(() => {
        const timertext = setTimeout(() => timedText(), 1000);
    }, []);
    
    // const timerpage = setTimeout(() => navigate(`/scene2`), 10000);
    
    
    return( 
      <div className="SceneBox">
        <motion.div
        initial={{x:500}}
        animate={{x:0}}
        exit={{opacity: 0}}
        >
        <div className="Homebtn">
            <button onClick={openModal}>홈으로가기</button>
        </div>
        <div  className="bgImg" >
            <img src="img/scene2/2-배경.png"></img>
        
        <div  className="mother2">
             <img src="img/scene2/2-엄마.png"></img>
        </div>
        <div  className="tiger2">
            <img src="img/scene2/2-호랑이.png"></img>   
        </div>
        </div>  
        {/* <input type="text" id="text"></input> */}
        <div id="output"></div>
        <Modal open={pausemodalOpen} close={closeModal} header="해님 달님"> 
        <a href="/home">정말 홈으로 가시겠어요??</a>   
        </Modal>
        </motion.div>
        <style>
        </style>
      </div>
    )

    
        
    
} 


export default Scene2