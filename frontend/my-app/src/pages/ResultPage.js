import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ResultPage.css";

const ResultPage = (props) => {
  const { number } = props;
  const [starpoint, setstarpoint] = useState([]);
  useEffect(() => {
    axios({
      method: 'get',
      url: `http://i8c101.p.ssafy.io/api/history/starpoint/${number}`,
    })
      .then((res) => {
        // const starpoint = res.data
        setstarpoint(res.data);
      })
  });

  let score = "⭐".repeat(starpoint)

  return (
    <div>

      <section id="ResultBg">
        <header>
          <h1>참 잘했어요!</h1>
        </header>
        <main className="modalMain modalMainScore">{score}옳지잘한다</main>
        <footer className="modalFooter">
          <Link to="/home">
            <button className="footerButton">👈🏻 홈으로 돌아가기</button>
          </Link>
          <div></div>
          <Link to="/home">
            <button className="footerButton">👉🏻 다음동화 학습하기</button>
          </Link>
          <div></div>
          <Link to="/history">
            <button className="footerButton">📝 학습기록 살펴보기</button>
          </Link>
        </footer>
      </section>

    </div>
  );
};

export default ResultPage;
