import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Back from "../modal/Back";
import axios from "axios";
import "./Historydetail.css";
import "./History.css";
import "../modal/Back.css";
import "../STT";

const audioStart = (path, id) => {
  console.log(path);
  console.log(id);
  console.log(typeof path);
  const newPath = require(`../STT/${path}${id}/audio/test.wav`);
  console.log(newPath);
  var audio = new Audio(newPath);
  audio.volume = 1;
  audio.play();
};

const Historydetail = () => {
  const testaudio = new Audio("src/STT/엄마168/audio/test.wav");
  console.log(testaudio);
  const start = () => {
    testaudio.play();
  };
  const [histdetYes, setHistdetYes] = useState([]);
  const [histdetNo, setHistdetNo] = useState([]);

  const location = useLocation();
  const histId = location.state.histId;

  useEffect(() => {
    axios
      .get(`http://i8c101.p.ssafy.io/api/history/${histId}`)
      .then((response) => {
        const histdet = response.data;
        console.log(histdet);
        setHistdetYes(
          histdet.wordResult.map((histdet) => {
            if (histdet.is_correct === true) {
              return (
                <div key={histdet.historyId} className="historydetailContainer">
                  <div></div>
                  <img
                    src={histdet.image_path}
                    alt="단어그림"
                    className="detailImg"
                  ></img>
                  <div className="historydetailcontent txt">
                    {histdet.word_name}
                  </div>
                  <div
                    className="historydetailcontent histaudio"
                    onClick={() => audioStart(histdet.word_name, histId)}
                  >
                    🎧
                  </div>
                  <div></div>
                </div>
              );
            }
          })
        );
        setHistdetNo(
          histdet.wordResult.map((histdet) => {
            if (histdet.is_correct === false) {
              return (
                <div key={histdet.historyId} className="historydetailContainer">
                  <div></div>
                  <img
                    src={histdet.image_path}
                    alt="단어그림"
                    className="detailImg"
                  ></img>
                  <div className="historydetailcontent txt">
                    {histdet.word_name}
                  </div>
                  <div
                    className="historydetailcontent histaudio"
                    onClick={() => audioStart(histdet.word_name, histId)}
                  >
                    🎧
                  </div>
                  <div></div>
                </div>
              );
            }
          })
        );
      });
  }, [histId]);

  setTimeout(start);

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
      <hr className="detailLine"></hr>
      <div className="passorfail">
        <div>{histdetYes}</div>
        <div>{histdetNo}</div>
      </div>
    </div>
  );
};

export default Historydetail;
