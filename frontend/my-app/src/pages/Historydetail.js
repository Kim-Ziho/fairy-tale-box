import React, { useEffect, useState } from "react";
import Back from "../modal/Back";
import "./Historydetail.css";
import "./History.css"
import "../modal/Back.css";
import axios from "axios";

const Historydetail = () => {
  const [histdet, setHistdets] = useState([]);
  const [historydetails, setHistorydetails] = useState([]);

const audioStart = () => {
    new Audio("sound/1.mp3").play();
};
  const startaudio = 1;

  useEffect(() => {
    axios.get("http://i8c101.p.ssafy.io/api/history/1").then((response) => {
      setHistdets(response.data);
      setHistorydetails(
        histdet.wordResult.map((histdet) => {
          if (histdet.is_correct === true) {
            return (
              <div key={histdet.historyId} className="historydetailContainer2">
                <div></div>
                <img
                  src={histdet.image_path}
                  alt="외않나와"
                  className="detailImg"
                ></img>
                <div className="historycontent txt">{histdet.word_name}</div>
                <div className="historycontent txt">
                  <a onClick={startaudio}>🎧 {histdet.audio_path}</a>
                </div>
                <div></div>
                <div></div>
                <img
                  src={histdet.image_path}
                  alt="외않나와"
                  className="detailImg"
                ></img>
                <div className="historycontent txt">{histdet.word_name}</div>
                <div className="historycontent txt">{histdet.audio_path}</div>
              </div>
            );
          }
          // return (
          //   <div key={histdet.historyId} className="historydetailContainer2">
          //     <div></div>
          //     <img src="../img/history/3-ricecake.png" alt="외않나와" className="detailImg"></img>
          //     <div className="historycontent txt">{histdet.word_name}</div>
          //     <div className="historycontent txt"><a onClick={startaudio}>{histdet.audio_path}</a></div>
          //     <div></div>
          //     <div></div>
          //     <img src="../img/history/3-ricecake.png" alt="외않나와" className="detailImg"></img>
          //     <div className="historycontent txt">{histdet.word_name}</div>
          //     <div className="historycontent txt">{histdet.audio_path}</div>
          //   </div>
          // );
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
