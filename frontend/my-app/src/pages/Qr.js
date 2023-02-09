import React from "react";
import { Link } from "react-router-dom";
import "./Qr.css";

const Qr = () => {
  return (
    <div className="qrContainer">
      <h1 className="qrMainText txt">🤸🏻‍♂️ 로그인하기 🤸🏻‍♀️</h1>
      <h3 className="qrText txt">
        로그인하시려면 휴대폰으로 아래 QR 코드를 스캔해주세요!
      </h3>
      <img src="img/qr_eemshi.png" className="qrimg"></img>
      <div className="qrFooter">
        <Link to="/">
          <button className="qrButton txt">
            <div className="">로그인완료</div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Qr;
