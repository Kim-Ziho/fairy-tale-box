import React from "react";
import { Link } from "react-router-dom";
import "./modal.css";

const Modal = (props) => {
  const { open, close, main } = props;

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section id="backgnd">
          <header>
          🧚🏻‍♀️ 동화상자 🧚🏻‍♂️
            <button className="headerbutton" onClick={close}>
              &times;
            </button>
          </header>
          <main className="modalMain">{main}</main>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
