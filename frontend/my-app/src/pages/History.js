import React from "react";
import { Link } from "react-router-dom";
import Back from "./Back";
import historydata from "./historydata.json";
import "./History.css";

const History = () => {
  const historys = historydata.map((history) => {
    return (
      <div key={history.id} className="tale">
        <div className="talebox">{history.name}</div>
        <div className="talebox">price : ${history.price}</div>
        <div className="talebox">내용 : {history.description}</div>
        <div className="talebox">
          <Link to={`/history/${history.id}`}> 아이디 : {history.id}</Link>
        </div>
      </div>
    );
  });

  return (
    <div className="Box">
      <div className="back">
        <Back />
      </div>
      <div className="top">
        <h1>학습기록 </h1>
      </div>
      <hr></hr>
      <div className="historyContainer">
        <div className="containerbox">학습날짜</div>
        <div className="containerbox">학습동화</div>
        <div className="containerbox">별점</div>
        <div className="containerbox">자세히</div>
      </div>
      {historys}
    </div>
  );
};

export default History;
