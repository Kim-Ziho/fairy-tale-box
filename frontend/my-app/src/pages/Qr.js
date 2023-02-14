import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Qr.css";
import axios from "axios";

const serialNum = "동화상자c101-1";

const Qr = () => {
  const [sunggong, setSunggong] = useState([false]);
  const axiosQR = () => {
    axios
      .post("http://i8c101.p.ssafy.io/api/member/authcheck", {
        serialNum,
      })
      .then((res) => {
        console.log(res);
        setSunggong(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="qrContainer">
      <h1 className="qrMainText txt">🔒 로그인하기 🔑</h1>
      <div className="qrText txt">
        로그인하시려면 휴대폰으로 아래 QR코드를 스캔해주세요!
      </div>
      <img
        src="https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=http://i8c101.p.ssafy.io/login"
        className="qrimg"
        alt="#"
      ></img>
      <div className="qrFooter">
        <Link to={sunggong ? "/" : ""}>
          <button className="qrButton txt">
            <div
              className=""
              onClick={() => {
                axiosQR();
              }}
            >
              👉🏻 로그인 후 인증하기
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Qr;
