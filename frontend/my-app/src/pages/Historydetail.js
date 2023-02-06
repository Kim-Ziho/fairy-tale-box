import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import historydata from "../data/historydata.json";
import historydetaildata from "../data/historydetaildata.json";
import Back from "../modal/Back";
import "./Historydetail.css";
import "../modal/Back.css"

const Historydetail = () => {
  const { historyId } = useParams();
  const thisHistory = historydata.find((prod) => prod.id === historyId);
  const historydetails = historydetaildata.map((historydetail) => {
    return (
      <div key={historydetail.id} className="historydetailContainer2">
        <div></div>
        <div className="historycontent txt">{historydetail.pic}</div>
        <div className="historycontent txt">{historydetail.pass}</div>
        <div className="historycontent txt">{historydetail.record}</div>
        <div></div>
        <div></div>
        <div className="historycontent txt">{historydetail.pic}</div>
        <div className="historycontent txt">{historydetail.fail}</div>
        <div className="historycontent txt">{historydetail.record}</div>
        <div></div>
      </div>
    );
  });

  return (
    <div className="historyDetailBox">
      <div className="top">
        {/* <h1 className="txt">{thisHistory.tale} </h1> */}
      <Back />
        <h1 className="hide txt">숨길거지롱</h1>
      </div>
      <div className="passorfail">
        <h1 className="detailText txt">🙆🏻‍♀️ 잘했어요 🙆🏻‍♂️</h1>
        <h1 className="detailText txt">🙅🏻‍♀️ 아쉬워요 🙅🏻‍♂️</h1>
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
      <hr></hr>
      {historydetails}
    </div>
  );
};

export default Historydetail;
