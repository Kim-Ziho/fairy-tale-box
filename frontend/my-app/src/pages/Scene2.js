import React, {useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import {motion} from "framer-motion"
import Modal from "./Modal";


let audio = new Audio("sound/sample2.wav")
    const start = () => { audio.play() }
    const stop = () => { audio.pause() }




const Scene2 = () => {
    
    const [pausemodalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
        stop();
        // clearTimeout(timedText)
    };
    const closeModal = () => {
        setModalOpen(false);
        start();
    };
    return (
        setTimeout((start),2000),
        <motion.div
        initial={{x:500}}
        animate={{x:0}}
        exit={{opacity: 0}}
        >
             
            <img src="/img/구름2.jpg"></img>
            <button onClick={start} >play</button>
            <button onClick={stop} >stop</button>
        <Link to="/scene1"><button>이전씬입니다.</button></Link>
        <button onClick={openModal}>일시정지</button>
        <Modal open={pausemodalOpen} close={closeModal} header="해님 달님">
        <a href="/home">홈으로</a>
        </Modal>
        </motion.div>
        
        
    )
}

export default Scene2