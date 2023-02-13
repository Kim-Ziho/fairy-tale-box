import React from "react";
import { Link } from "react-router-dom";
import "./modal.css";

const LogoutModal = (props) => {
  const { open, close, header, main, footer } = props;

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section id="backgnd">
          <header>
            {header}
            <button className="headerbutton" onClick={close}>
              &times;
            </button>
          </header>
          <main className="modalMain">{main}</main>
          <footer>
            <Link to="/Qr">
              <button className="footerButton">{footer}</button>
            </Link>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default LogoutModal;
