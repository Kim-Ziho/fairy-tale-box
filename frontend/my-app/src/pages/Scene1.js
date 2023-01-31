import React ,{ useState } from "react";
import {Link , Navigate, useNavigate} from 'react-router-dom';
import {motion} from "framer-motion"
import Pause from "./Pause"

const audio = new Audio("sound/sample.wav")
const start = () => { audio.play() }
const stop = () => {
     audio.pause()
    } 

setTimeout(start,2000)

const Scene1 = () => {
    
    return(
        
        <motion.div
        initial={{x:500}}
        animate={{x:0}}
        exit={{opacity: 0}}
        >
        <Pause/>
        {/* <img src="img/구름1.jpg"></img> */}
        <Link to = "/scene2">
            <button>
                다음 씬입니다
            </button>
        </Link>
        <button onClick={stop}>제발</button>
        <button onClick={start}>다시</button>
        </motion.div>
    )

    
        
    
} 


export default Scene1