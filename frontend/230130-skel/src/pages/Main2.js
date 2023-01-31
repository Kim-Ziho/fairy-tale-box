import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./Main.css";

const Main2 = () => {
  return (
    <div className="제일큰상자">
      <div className="동화상자 제목"></div>
      <div className="플레이랑학습기록묶으기">
        <div className="플레이버튼"></div>
        <div className="학습기록버튼"></div>
      </div>

      <div className="로그아웃버튼"></div>
    </div>
  );
};

export default Main2;
