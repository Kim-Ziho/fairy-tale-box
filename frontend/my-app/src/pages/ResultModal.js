import React from "react";
import { Link } from "react-router-dom";
import Taledata from "./taledata.json";
import "./Modal.css";

const ResultModal = (props) => {
  const { open, close } = props;

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {Taledata.tale}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>{Taledata.story}</main>
          <footer className="modalFooter">
            <Link to="/home">
              <button className="modalButton">👈🏻 홈으로 돌아가기</button>
            </Link>
            <div></div>
            <Link to="/home">
              <button className="modalButton">👉🏻 다음동화 학습하기</button>
            </Link>
            <div></div>
            <Link to="/history">
              <button className="modalButton">📝 학습기록 살펴보기</button>
            </Link>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default ResultModal;
