import React from "react";
import {Link} from 'react-router-dom';
import {motion} from "framer-motion"
import Pause from "./Pause"

const Scene2 = () => {
    let audio = new Audio("sound/sample2.wav")
    const start = () => { audio.play() }
    const stop = () => { audio.pause() }

    return (
        setTimeout((start),2000),
        <motion.div
        initial={{x:500}}
        animate={{x:0}}
        exit={{opacity: 0}}
        >
              <Pause/>
            <img src="/img/구름2.jpg"></img>
            <button onClick={start} >play</button>
            <button onClick={stop} >stop</button>
        <Link to="/scene1"><button>이전씬입니다.</button></Link>
        </motion.div>
        
        
    )
}

export default Scene2