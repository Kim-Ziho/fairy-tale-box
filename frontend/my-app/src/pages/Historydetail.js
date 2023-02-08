import React, { useEffect, useState } from "react";
import Back from "../modal/Back";
import "./Historydetail.css";
import "../modal/Back.css";
import axios from "axios";

const Historydetail = () => {
  const [histdet, setHistdets] = useState([]);
  const [historydetails, setHistorydetails] = useState([]);
  useEffect(() => {
    axios.get("http://i8c101.p.ssafy.io/api/history/1").then((response) => {
      setHistdets(response.data);
      setHistorydetails(
        histdet.wordResult.map((histdet) => {
          return (
            <div key={histdet.historyId} className="historydetailContainer2">
              <div></div>
              <img src="../img/qr_eemshi.png" alt="외않나와"></img>
              <div className="historycontent txt">{histdet.word_name}</div>
              <div className="historycontent txt">{histdet.audio_path}</div>
              <div></div>
              <div></div>
              <img src="../img/qr_eemshi.png" alt="외않나와"></img>
              <div className="historycontent txt">{histdet.word_name}</div>
              <div className="historycontent txt">{histdet.audio_path}</div>
            </div>
          );
        })
      );
    });
  });

  return (
    <div className="historyDetailBox">
      <div className="histHeader">
        <Back />
      </div>
      <div className="passorfail">
        <h1 className="detailMainText txt">🙆🏻‍♀️ 잘했어요 🙆🏻‍♂️</h1>
        <h1 className="detailMainText txt">🙅🏻‍♀️ 아쉬워요 🙅🏻‍♂️</h1>
        <div className="historydetailContainer">
          <div></div>
          <div className="histdetailtitle txt">그림</div>
          <div className="histdetailtitle txt">단어</div>
          <div className="histdetailtitle txt">음성듣기</div>
          <div></div>
        </div>
        <div className="historydetailContainer">
          <div></div>
          <div className="histdetailtitle txt">그림</div>
          <div className="histdetailtitle txt">단어</div>
          <div className="histdetailtitle txt">음성듣기</div>
          <div></div>
        </div>
      </div>
      <hr className="tableLine"></hr>
      {historydetails}
    </div>
  );
};

export default Historydetail;
