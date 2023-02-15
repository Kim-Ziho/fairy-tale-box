import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Modal.css";
import "./SelectModal.css";

const SelectModal = (props) => {
  const [story, setStory] = useState([]);
  const { open, close, storyid } = props;

  useEffect(() => {
    axios
      .get(`http://i8c101.p.ssafy.io/api/story/${storyid}`)
      .then((response) => {
        setStory(response.data);
        console.log(response.data);
      });
  }, [storyid]);

  return (
    <div className={open && story ? "openModal modal" : "modal"}>
      {open && story ? (
        <section id="SelectBg">
          <header>
            {story.story_title}
            <button className="headerbutton" onClick={close}>
              &times;
            </button>
          </header>
          <main className="modalMain">{story.story_overview}</main>
          <footer className="modalFooter">
            <Link to={storyid === 4 ? "/scene1_test" : "/scene1"}>
              <button className="footerButton">👉🏻 하러가기</button>
            </Link>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default SelectModal;
