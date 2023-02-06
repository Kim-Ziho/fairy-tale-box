import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import BackHome from "../modal/BackHomeModal";
import "./Scene10.css";
import { positions } from "@mui/system";

// 하단은 음성파일
const audio = new Audio("sound/sample.wav");
const start = () => {
  audio.play();
};
const stop = () => {
  audio.pause();
};

// 하단은 자막
function timedText() {
  var x = document.getElementById("text");
  setTimeout(() => {
    x.value = "옛날 옛날에 마음씨 좋은 엄마와 사이좋은 오누이가 살고 있었어요.";
  }, 2000);
  setTimeout(() => {
    x.value =
      "어느날, 엄마가 잔칫집에 일을 하러가기 전에 오누이에게 당부를(말) 했어요.";
  }, 4000);
  setTimeout(() => {
    x.value =
      "엄마 - “얘들아, 혹시 누군가 문을 열어달라고 하면 엄마말고는 문을 열어 주면 안된단다!”";
  }, 6000);
  setTimeout(() => {
    x.value = "오누이 - “네 엄마!";
  }, 8000);
}

const Scene2 = () => {
  const navigate = useNavigate();
  const [pausemodalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const timersound = setTimeout(() => start(), 1000);
  }, []);

  // 밑은 시작지점

  useEffect(() => {
    const timertext = setTimeout(() => timedText(), 1000);
  }, []);

  // const timerpage = setTimeout(() => navigate(`/scene2`), 10000);

  return (
    <div className="SceneBox">
      <BackHome></BackHome>
      <motion.div initial={{ x: 500 }} animate={{ x: 0 }} exit={{ opacity: 0 }}>
        <div className="bgImg">
          <img src="img/scene10/10-배경.png"></img>
          <div className="siblings">
            <img src="img/scene10/10-오누이.png"></img>
          </div>
        </div>
        {/* <input type="text" id="text"></input> */}
        <div id="output"></div>
      </motion.div>
      <style></style>
    </div>
  );
};

export default Scene2;
