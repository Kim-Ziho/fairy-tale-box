import React from "react";
import { Link } from "react-router-dom";
import "./Modal.css";
import "./LogoutModal.css";

const LogoutModal = (props) => {
  const { open, close, header } = props;
  const clearToken = () => {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
  }

  return (

    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section id="LogoutBg">
          <header>
            {header}
            <button className="headerbutton" onClick={close}>
              &times;
            </button>
          </header>
          <main className="modalMain">{props.children}</main>
          <footer className="modalFooter">
            <Link to="/Qr">
              <button className="footerButton" onClick={() => clearToken()}>👈🏻 로그아웃</button>
            </Link>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default LogoutModal;
