import React ,{ useState } from "react";
import {Link , Navigate, useNavigate} from 'react-router-dom';
import {motion} from "framer-motion"
import Pause from "./Pause"

const Scene1 = () => {
    const audio = new Audio("sound/sample.wav")
    const start = () => { audio.play() }
    const stop = () => { audio.pause() }
    
    let text = "안녕"
    let navigate = useNavigate();



    function next(){
        navigate("/scene2")
    }

    setTimeout(()=>{
        next()
    },2000)

    return(
        
        <motion.div
        initial={{x:500}}
        animate={{x:0}}
        exit={{opacity: 0}}
        >
            <Pause/>
        <h1>{text}</h1>
        <img src="img/구름1.jpg"></img>
        <button onClick={start} >play</button>
        <button onClick={stop} >stop</button>
        <Link to = "/scene2">
            <button>
                다음 씬입니다
            </button>
        </Link>
        </motion.div>
        
        
    )

    
        
    
} 


export default Scene1