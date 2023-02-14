import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Qr.css";
import axios from "axios";
import Modal from "../modal/AuthModal.js";

const serialNum = "동화상자c101-1";



const Qr = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const [sunggong, setSunggong] = useState([false]);
  const [accessToken, setAccessToken] = useState('')
  const [refreshToken, setRefreshToken] = useState('')
  const axiosQR = () => {
    axios
      .post("http://i8c101.p.ssafy.io/api/member/authcheck", {
        serialNum,
      })
      .then((res) => {
        // console.log(res.data.accessToken)
        setAccessToken(res.data.accessToken)
        setRefreshToken(res.data.refreshToken)  
        console.log("셋 됐나", accessToken)      
        if (!accessToken === null ) { 
          localStorage.setItem('accessToken',  accessToken)
          localStorage.setItem('refreshToken', refreshToken)
          axios.defaults.headers.common['x-access-token'] = accessToken
          console.log(res);
          setSunggong(true);
        } else {
        openModal();
        <Modal open={modalOpen} close={closeModal} header="🧚🏻‍♀️ 동화상자 🧚🏻‍♂️">
          웹 페이지에서 로그인을 진행해주세요!
        </Modal>
        console.log("토큰 널")
        setSunggong(false);
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
        <Link to={sunggong ? "/QR" : ""}>
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
