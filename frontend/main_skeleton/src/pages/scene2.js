import React from "react";
import {Link} from 'react-router-dom';
import {motion} from "framer-motion"

const scene2 = () => {
    let audio = new Audio("sound/sample2.wav")
    const start = () => { audio.play() }
    (function firststart() {
        audio.play()
    })();
    return (
        <motion.div
        initial={{x:500}}
        animate={{x:0}}
        exit={{opacity: 0}}
        >
            <img src="/img/구름2.jpg"></img>
        </motion.div>
    )
}

export default scene2