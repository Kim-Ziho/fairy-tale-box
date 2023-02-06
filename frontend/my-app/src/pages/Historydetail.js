import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Back from "../modal/Back";
import "./Historydetail.css";
import "../modal/Back.css";
import axios from "axios";

const Historydetail = () => {
  const { historyId } = useParams();
  // const thisHistory = historydata.find((prod) => prod.id === historyId);

  const [histDet, setHistDets] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/api/history/3").then((response) => {
      setHistDets(response.data);
    });
  }, []);


  const historyDets = histDet.map((histDet) => {
    return (
      <div key={histDet.id} className="historydetailContainer2">
        <div></div>
        <div className="historycontent txt">{histDet.pic}</div>
        <div className="historycontent txt">{histDet.pass}</div>
        <div className="historycontent txt">{histDet.record}</div>
        <div></div>
        <div></div>
        <div className="historycontent txt">{histDet.pic}</div>
        <div className="historycontent txt">{histDet.fail}</div>
        <div className="historycontent txt">{histDet.record}</div>
        <div></div>
      </div>
    );
  });

  return (
    <div className="historyDetailBox">
      <div className="top">
        <Back />
        <h1 className="hide txt">숨길거지롱</h1>
      </div>
      <div className="passorfail">
        <h1 className="histDetailMainText txt">🙆🏻‍♀️ 잘했어요 🙆🏻‍♂️</h1>
        <h1 className="histDetailMainText txt">🙅🏻‍♀️ 아쉬워요 🙅🏻‍♂️</h1>
        <div className="historydetailContainer">
          <div></div>
          <div className="historytitle txt">그림</div>
          <div className="historytitle txt">단어</div>
          <div className="historytitle txt">음성듣기</div>
          <div></div>
        </div>
        <div className="historydetailContainer">
          <div></div>
          <div className="historytitle txt">그림</div>
          <div className="historytitle txt">단어</div>
          <div className="historytitle txt">음성듣기</div>
          <div></div>
        </div>
      </div>
      <hr className="tableLine"></hr>
      {historyDets}
    </div>
  );
};

export default Historydetail;
