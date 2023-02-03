import React from "react";
import { Link } from "react-router-dom";
import taledata from "./taledata.json";
import "./Modal.css";

const ResultModal = (props) => {
  const { open, close } = props;
  const jemok = taledata.map((taleDat) => {
    return (
      <div key={taleDat.id} className="txt">
        {taleDat.tale}
      </div>
    );
  });
  const naeyong = taledata.map((taleDat) => {
    return (
      <div key={taleDat.id} className="txt">
        {taleDat.story}
      </div>
    );
  });

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {jemok[0]}
            해님 달님을 넣고싶은데.
            <button className="headerbutton" onClick={close}>
              &times;
            </button>
          </header>
          <main className="modalMain">
            {naeyong[0]}
            스토리를 넣고싶은데.
          </main>
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
