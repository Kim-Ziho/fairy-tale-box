import React, { useState, props } from "react";
import Modal from "./modal";

function App() {
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <React.Fragment>
      <button onClick={openModal}>모달팝업</button>
      {/* header 부분에 텍스트를 입력한다. */}
      <Modal open={modalOpen} close={closeModal} header="모달창 띄우기">
        {/* Modal.js <main> {props.children} </main>에 내용이 입력된다. */}
        리액트 함수형 모달 팝업창입니다.
      </Modal>
    </React.Fragment>
  );
}

export default App;
