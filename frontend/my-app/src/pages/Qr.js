import React, { useState } from "react";
import "./Qr.css";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import Modal from "../modal/AuthModal.js";

const serialNum = "동화상자c101-1";

const Qr = () => {
  const navigate = useNavigate()

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
 
  const axiosQR = () => {
    axios
      .post("http://i8c101.p.ssafy.io/api/member/authcheck", {
        serialNum,
      })
      .then((res) => {
        const accessToken = res.data.accessToken;
        const refreshToken = res.data.refreshToken;
        if (accessToken !== null) {
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          navigate("/")
        } else {
          openModal();
          console.log("토큰 널", accessToken);
        }
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
        <button
          className="qrButton txt"
          onClick={() => {
            axiosQR();
          }}
        >
          👉🏻 로그인 후 인증하기
        </button>
        <Modal open={modalOpen} close={closeModal} header="인증실패">
          웹 페이지에서 로그인을 진행해주세요!
        </Modal>
      </div>
    </div>
  );
};

export default Qr;