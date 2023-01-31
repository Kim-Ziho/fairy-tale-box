import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

const Main = () => {
  return (
    <div className="container">
      <h1 className="mainText txt">🤸🏻‍♀️ 동화상자 🤸🏻‍♂️</h1>
      <div className="buttons">
        <Link to="/home">
          <button className="button1">
            <div className="btnText txt">🖐🏻 동화선택</div>
          </button>
        </Link>
        <Link to="/history">
          <button className="button2">
            <div className="btnText txt">✍🏻 학습기록</div>
          </button>
        </Link>
        <Link to="/home">
          <button className="button3">
            <div className="btnText txt">🤞🏻 로그아웃</div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Main;
