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
          <Modal
              open={modalOpen}
              close={closeModal}
              header="해님달님 헤더잖아"
            >
              한국의 대표적인 전래동화 중 하나. 넓게 보면 신화로도 볼 수 있으며,
              줄여서 해님달님이라고도 불린다. 원래는 한국의 해와 달의 기원
              신화였던 ...
              <button>hi</button>
              </Modal>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Main;
