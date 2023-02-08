import React, { useState } from "react";
import { Link } from "react-router-dom";
import taledata from "../data/taledata.json";
import Dropdown from "./Dropdown";
import "./BackHomeDrop.css";

const BackHome = () => {
  const [view, setView] = useState(false);
  // const [modalOpen, setModalOpen] = useState(false);
  //   const openDrop = () => {
  //     setView(true);
  //   };
  //   const closeDrop = () => {
  //     setView(false);
  //   };

  return (
    // <div>
    <ul
      onClick={() => {
        setView(!view);
      }}
    >
      {" "}
      반가워요, nickname 님!
      {view ? "⌃" : "⌄"}
      {view && <Dropdown />}
    </ul>

    /* <button className="backHomeBtn txt" onClick={openDrop}>
        👈🏻 그만하기
      </button>
      <BackHomeModal open={view} close={closeDrop} header="홈으로가기">
        인자그만놀고 홈으로 돌아갈까요?
        <footer className="modalFooter"></footer>
      </BackHomeModal> */
    /* </div> */
  );
};

export default BackHome;
