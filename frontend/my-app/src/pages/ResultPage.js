import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import "./ResultPage.css";

const ResultPage = () => {
  const location = useLocation();
  const number = location.state.value;
  const [starpoint, setstarpoint] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: `http://i8c101.p.ssafy.io/api/history/starpoint/${number}`,
    }).then((res) => {
      setstarpoint(res.data);
    });
  });

  let score = "⭐".repeat(starpoint) + "💨".repeat(3 - starpoint);

  return (
    <div>
      <div className="resultContainer">
        <section>
          <header className="resultHeader">
            👍🏻 동화를 완료했군요, 최고예요!
          </header>
          <main className="resultScore txt">{score}</main>
          <div className="resultTxt txt">
            어디로 가볼까요? 버튼을 눌러보세요.
          </div>
          <footer className="modalFooter">
            <Link to="/home">
              <button className="resultButton txt">👈🏻  홈으로 돌아가기</button>
            </Link>
            <div></div>
            <Link to="/home">
              <button className="resultButton txt">👉🏻 다음동화 학습하기</button>
            </Link>
            <div></div>
            <Link to="/history">
              <button className="resultButton txt">📝 학습기록 살펴보기</button>
            </Link>
          </footer>
        </section>
      </div>
    </div>
  );
};
	
export default ResultPage;