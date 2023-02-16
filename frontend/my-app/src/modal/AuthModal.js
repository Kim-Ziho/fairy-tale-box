import React from "react";
import "./Modal.css";
import "./AuthModal.css";

const AuthModal = (props) => {
  const { open, close, header } = props;

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section id="AuthBg">
          <header>
            {header}
            <button className="headerbutton" onClick={close}>
              &times;
            </button>
          </header>
          <main className="modalMain">{props.children}</main>
        </section>
      ) : null}
    </div>
  );
};

export default AuthModal;
