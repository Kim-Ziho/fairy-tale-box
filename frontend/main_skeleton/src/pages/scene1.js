import React from "react";
import {Link , Navigate, useNavigate} from 'react-router-dom';
import {motion} from "framer-motion"


const scene1 = () => {
    let audio = new Audio("sound/sample.wav")
    const start = () => { audio.play() }
    const stop = () => { audio.pause() }
    
    
         
    return(
        
        <motion.div
        initial={{x:500}}
        animate={{x:0}}
        exit={{opacity: 0}}
        >
        <img src="img/구름1.jpg"></img>
        <button onClick={start} >play</button>
        <button onClick={stop} >stop</button>
        
        </motion.div>
        
        
    )

    
        
    
} 


export default scene1