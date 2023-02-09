import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import taledata from "./taledata.json";
import histdata from "./historydata.json";
import axios from "axios";
import "./ResultModal.css";

const ResultModal = (props) => {
  const { open, close } = props;
  const [histdet, setHistdets] = useState([]);
  const [historydetails, setHistorydetails] = useState([]);

  const jemok = taledata.map((taleDat) => {
    return (
      <div key={taleDat.id} className="txt">
        {taleDat.tale}
      </div>
    );
  });
  const score = histdata.map((histDat) => {
    return (
      <div key={histDat.id} className="txt">
        {histDat.score}
      </div>
    );
  });

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section id="ResultBg">
          <header>
            {jemok[0]}
            <button className="headerbutton" onClick={close}>
              &times;
            </button>
          </header>
          <main className="modalMain modalMainScore">{score[0]}옳지잘한다</main>
          <footer className="modalFooter">
            <Link to="/home">
              <button className="footerButton">👈🏻 홈으로 돌아가기</button>
            </Link>
            <div></div>
            <Link to="/home">
              <button className="footerButton">👉🏻 다음동화 학습하기</button>
            </Link>
            <div></div>
            <Link to="/history">
              <button className="footerButton">📝 학습기록 살펴보기</button>
            </Link>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default ResultModal;
