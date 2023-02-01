import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Pause.css";
import Modal from "./PauseModal.js";

function Header(props) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="pause">
        <button onClick={openModal}>일시 정지</button>
        <Modal open={modalOpen} close={closeModal} header="해님 달님">
          {/* Modal.js <main> {props.children} </main>에 내용이 입력된다. */}
          <Link to="/home">
            <button>홈으로 가기</button>
          </Link>
          <br></br>
          <button onClick={closeModal}>계속하기</button>
        </Modal>
      </div>
    </>
  );
}

export default Header;
