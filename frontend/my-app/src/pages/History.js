import React from "react";
import { Link } from "react-router-dom";
import Back from "../modal/Back";
import historydata from "../data/historydata.json";
import "./History.css";
import axios from "axios";

const History = () => {
  axios.get("http://localhost:8080/api/history")
  .then(res=>{
    console.log(res.data);
  })
  const historys = historydata.map((history) => {
    return (
      <div key={history.id} className="historyContainer">
        <div className="historycontent txt">{history.date}</div>
        <div className="historycontent txt">{history.tale}</div>
        <div className="historycontent txt">{history.score}</div>
        <div className="historycontent txt">
          <Link to={`/history/${history.id}`}>커몬요</Link>
        </div>
      </div>
    );
  });

  return (
    <div className="historyBox">
      <Back />
      <h1 className="historymainText txt">📝 학습기록 🎧</h1>
      <div className="historyContainer">
        <div className="historytitle txt">학습날짜</div>
        <div className="historytitle txt">학습동화</div>
        <div className="historytitle txt">별점</div>
        <div className="historytitle txt">자세히보기</div>
      </div>
      <hr></hr>
      {historys}
      <div className="historyfooter txt">1 2 3</div>
    </div>
  );
};

export default History;
