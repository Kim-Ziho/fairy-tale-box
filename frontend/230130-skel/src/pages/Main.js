import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./Main.css";

const Main = () => {
  return (
    <div className="container">
      <div className="jemok">
        <h1 className="mainText">🟦 동화상자 TALEBOX</h1>
      </div>
      <div className="row">
        <div style={{ margin: "auto" }}>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="primary"
              className="mainBtn1"
              onclick="location.href='/home'"
            >
              <div className="btnTxt">플레이 PLAY</div>
            </Button>
          </Link>
          <Link to="/history" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary" className="mainBtn2">
              <div className="btnTxt">학습기록 HISTORY</div>
            </Button>
          </Link>
        </div>
      </div>
      <div className="row">
        <div style={{ margin: "auto" }}>
          <Link to="/history" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="error" className="mainBtn3">
              <div className="btnTxt">로그아웃 LOG OUT</div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
