import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Modal.css";
import "./SelectModal.css";

const SelectModal = (props) => {
  const { open, close, storyid } = props;
  // const [isLoading, setLoading] = useState(true);
  const [jemok, setJemok] = useState([]);
  const [naeyong, setNaeyong] = useState([]);
  // const jemok="";
  // const naeyong="";

  useEffect(() => {
    axios
      .get(`http://i8c101.p.ssafy.io/api/story/${storyid}`)
      // .get(`http://i8c101.p.ssafy.io/api/story`)
      .then((response) => {
        const story = response.data;
        console.log(story);
        setJemok(story.story_title);
        setNaeyong(story.story_overview);
        // jemok = story.story_title
        // this.forceUpdate();
        console.log(jemok);
      });
  }, []);

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section id="SelectBg">
          <header>
            {jemok}
            <button className="headerbutton" onClick={close}>
              &times;
            </button>
          </header>
          <main className="modalMain">{naeyong}</main>
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
