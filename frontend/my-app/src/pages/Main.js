import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal.js";
import "./Main.css";

const Main = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="mainContainer">
      <h1 className="mainText txt">🧚🏻‍♀️ 동화상자 🧚🏻‍♂️</h1>
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
        {/* <Link to="/home"> */}
        <button className="button3" onClick={openModal}>
          <div className="btnText txt">🤞🏻 로그아웃</div>
        </button>
        <Modal open={modalOpen} close={closeModal}>
          로그아웃 할래요 로그아웃이요 로그아웃 할래요 로그아웃이요 로그아웃
          할래요 로그아웃이요 로그아웃 할래요 로그아웃이요 로그아웃 할래요
          로그아웃이요 로그아웃 할래요 로그아웃이요 로그아웃 할래요 로그아웃이요
          로그아웃 할래요 로그아웃이요 로그아웃 할래요 로그아웃이요 로그아웃
          할래요 로그아웃이요 로그아웃 할래요 로그아웃이요 로그아웃 할래요
          로그아웃이요 로그아웃 할래요 로그아웃이요 로그아웃 할래요 로그아웃이요
          로그아웃 할래요 로그아웃이요 로그아웃 할래요 로그아웃이요 로그아웃
          할래요 로그아웃이요 로그아웃 할래요 로그아웃이요 로그아웃 할래요
          로그아웃이요 로그아웃 할래요 로그아웃이요 로그아웃 할래요 로그아웃이요
          로그아웃 할래요 로그아웃이요 로그아웃 할래요 로그아웃이요 로그아웃
          할래요 로그아웃이요 로그아웃 할래요 로그아웃이요 로그아웃 할래요
          로그아웃이요 로그아웃 할래요 로그아웃이요 로그아웃 할래요 로그아웃이요
          로그아웃 할래요 로그아웃이요 로그아웃 할래요 로그아웃이요 로그아웃
          할래요 로그아웃이요 로그아웃 할래요 로그아웃이요 로그아웃 할래요
          로그아웃이요 로그아웃 할래요 로그아웃이요 로그아웃 할래요 로그아웃이요
          <footer className="modalFooter">
            <button className="modalButton" onClick={closeModal}>
              로그아웃하기
            </button>
          </footer>
        </Modal>
      </div>
    </div>
  );
};

export default Main;
