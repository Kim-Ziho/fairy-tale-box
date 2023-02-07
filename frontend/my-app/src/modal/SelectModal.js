import React from "react";
import { Link } from "react-router-dom";
import taledata from "../data/taledata.json";
import "./Modal.css";
import "./SelectModal.css";

const SelectModal = (props) => {
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
        <section id="SelectBg">
          <header>
            {jemok[0]}
            <button className="headerbutton" onClick={close}>
              &times;
            </button>
          </header>
          <main className="modalMain">{naeyong[0]}</main>
          <footer className="modalFooter">
            <Link to="/scene1">
              <button className="footerButton">👉🏻 하러가기</button>
            </Link>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default SelectModal;
