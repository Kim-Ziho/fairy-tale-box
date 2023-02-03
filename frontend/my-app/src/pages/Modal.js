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
            해님 달님
            <button className="headerbutton" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            {/* {Taledata.story} */}
            나무 위에 올라간 오누이는 하늘에 동아줄을 내려 자신을 살려달라고
            빌었다. 하늘에서 썩은 동아줄, 튼튼한 동아줄을 내려주었는데 오누이는
            튼튼한 동아줄을 타고 하늘로 올라가 여동생은 해가, 오빠는 달이
            되었다. 뒤따라오던 호랑이는 썩은 동아줄을 타고 올라가다가 떨어지고
            말았다.
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
