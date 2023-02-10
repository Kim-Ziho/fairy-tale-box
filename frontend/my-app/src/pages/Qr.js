import React from "react";
import { Link } from "react-router-dom";
import "./Qr.css";

const Qr = () => {

  return (
    <div className="qrContainer">
      <h1 className="qrMainText txt">🔒 로그인하기 🔑</h1>
      <div className="qrText txt">
        로그인하시려면 휴대폰으로 아래 QR코드를 스캔해주세요!
      </div>
      <img src="https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=http://www.google.com" className="qrimg"></img>
      <div className="qrFooter">
        <Link to="/">
          <button className="qrButton txt">
            <div className="">👉🏻 로그인 후 인증하기</div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Qr;
