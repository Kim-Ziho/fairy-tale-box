import React from "react";
import { Link } from "react-router-dom";
import taledata from "./taledata.json";
import "./Modal.css";
import "./BackHome.css";

const BackHomeModal = (props) => {
  const { open, close, header } = props;

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section id="BackHomeBg">
          <header>
            {header}
            <button className="headerbutton" onClick={close}>
              &times;
            </button>
          </header>
          <main className="modalMain">{props.children}</main>
          <footer className="modalFooter">
            <Link to="/home">
              <button className="footerButton">
                {/* HomeBtn */}
                👈🏻 홈으로가기
              </button>
            </Link>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default BackHomeModal;
