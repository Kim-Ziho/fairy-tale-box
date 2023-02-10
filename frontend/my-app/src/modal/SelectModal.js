import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Modal.css";
import "./SelectModal.css";

const SelectModal = (props) => {
  const { open, close, storyid } = props;
  const [jemok, setJemok] = useState([]);
  const [naeyong, setNaeyong] = useState([]);

  useEffect(() => {
    axios
      // .get(`http://i8c101.p.ssafy.io/api/story/${storyid}`)
      .get(`http://i8c101.p.ssafy.io/api/story`)
      .then((response) => {
        // console.log(response.data);
        const story = response.data;
        setJemok(
          story.map((story) => {
            return (
              <div key={story.story_id} className="txt">
                {story.story_title}
              </div>
            );
          })
        );
        setNaeyong(
          story.map((story) => {
            return (
              <div key={story.story_id} className="txt">
                {story.story_overview}
              </div>
            );
          })
        );
      });
  }, []);

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section id="SelectBg">
          <header>
            {jemok[0]}
            <button className="headerbutton" onClick={close}>
              &times;
            </button>
          </header>
          <main className="modalMain">{naeyong[0]}</main>
          <footer className="modalFooter">
            <Link to="/scene1">
              <button className="footerButton">👉🏻 하러가기</button>
            </Link>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default SelectModal;
