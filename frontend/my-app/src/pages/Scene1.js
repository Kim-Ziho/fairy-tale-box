import React ,{ useState } from "react";
import {Link , Navigate, useNavigate} from 'react-router-dom';
import {motion} from "framer-motion"
import Modal from "./Modal.js";


const Scene1 = () => {        
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
        // 밑은 시작지점
        setTimeout(start,3000)
        setTimeout(timedText,2000)

    const [pausemodalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
        stop();
        clearTimeout(timedText)
    };
    const closeModal = () => {
        setModalOpen(false);
        start();
    };
    

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
        <input type="text" id="text"></input>
        <button onClick={openModal}>일시정지</button>
      
        <Modal open={pausemodalOpen} close={closeModal} header="Modal heading">
        
      </Modal>
        </motion.div>
    )

    
        
    
} 


export default Scene1