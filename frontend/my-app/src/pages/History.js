import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Back from "../modal/Back";
import "./History.css";
import axios from "axios";

const History = () => {
  const [hist, setHists] = useState([]);
  useEffect(() => {
    axios.get("http://i8c101.p.ssafy.io:8080/api/history").then((response) => {
      setHists(response.data);
    });
  }, []);

  const historys = hist.map((hist) => {
    return (
      <div key={hist.historyId} className="historyContainer">
        <div className="historycontent txt">{hist.studyDate}</div>
        <div className="historycontent txt">{hist.story}</div>
        <div className="historycontent txt">{hist.starPoint}</div>
        <div className="historycontent txt">
          <Link to={`/history/${hist.historyId}`}>👀</Link>
        </div>
      </div>
    );
  });

  return (
    <div className="historyBox">
      <Back />
      <h3 className="histMainText txt">📝 학습기록 🎧</h3>
      <div className="historyContainer">
        <div className="historytitle txt">학습날짜</div>
        <div className="historytitle txt">학습동화</div>
        <div className="historytitle txt">별점</div>
        <div className="historytitle txt">자세히보기</div>
      </div>
      <hr className="tableLine"></hr>
      {historys}
      <div className="historyfooter txt">1 2 3</div>
    </div>
  );
};

export default History;
