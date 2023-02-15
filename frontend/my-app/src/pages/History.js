import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./History.css";

const History = () => {
  const [histchild, setHistchild] = useState([]);

  useEffect(() => {
    axios.get("http://i8c101.p.ssafy.io/api/history", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    }).then((response) => {
      const hist = response.data;
      setHistchild(
        hist.map((hist) => {
          let starpoint = "⭐".repeat(hist.starPoint);
          return (
            <div key={hist.historyId} className="historyContainer">
              <div className="historycontent txt">
                {hist.studyDate.slice(0, 10)}
              </div>
              <div className="historycontent txt">{hist.story}</div>
              <div className="historycontent txt">{starpoint}</div>
              <Link
                to={`/history/${hist.historyId}`}
                style={{ textDecoration: "none" }}
                state={{ histId: hist.historyId }}
              >
                <div className="historycontent txt golook">👀 보러가자</div>
              </Link>
            </div>
          );
        })
      );
    });
  }, []);

  return (
    <div>
      <div>
        <Link to="/">
          <button className="backBtn txt">👈🏻 뒤로가기</button>
        </Link>
      </div>
      <div className="historyBox">
        <h3 className="histMainText txt">📝 학습기록 🎧</h3>
        <div className="historyContainer">
          <div className="historytitle txt">학습날짜</div>
          <div className="historytitle txt">학습동화</div>
          <div className="historytitle txt">별점</div>
          <div className="historytitle txt">자세히보기</div>
        </div>
        <hr className="histLine"></hr>
        {histchild}
      </div>
    </div>
  );
};

export default History;
