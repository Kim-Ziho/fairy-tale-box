import React, { useState } from "react";
import Modal from "../modal/SelectModal.js";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./Home.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0.9),
  textAlign: "center",
}));

const Home = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [storyid, setStoryid] = useState({});
  const [storyurl, setStoryurl] = useState("");
  const openModal = (num, url) => {
    setModalOpen(true);
    setStoryid(num);
    setStoryurl(`${url}`);
    // Home.forceUpdate();
    // console.log(num);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div id="Grid" className="conn">
      <div className="homeMainText txt">
        {/* <img src="img/ggae1.png"></img> */}
        😃 동화선택 👆🏻
      </div>
      <Link to="/">
        <button className="backBtn txt">👈🏻 뒤로가기</button>
      </Link>
      <Modal open={modalOpen} close={closeModal} storyid={storyid}></Modal>
      <Grid container spacing={4}>
        <Grid item xs={4} onClick={() => openModal(1, "/scene1")} className="selectBtn">
          <Item>
            <img
              src="img/thumnail/sunandmoon.png"
              className="selectImg"
              alt="sun and moon"
            ></img>
          </Item>
        </Grid>
        <Grid item xs={4} onClick={() => openModal(2)} className="selectBtn">
          <Item>
            <img
              src="img/thumnail/huengbu.png"
              className="selectImg"
              alt="sun and moon"
            ></img>
          </Item>
        </Grid>
        <Grid item xs={4} onClick={() => openModal(3)} className="selectBtn">
          <Item>
            <img
              src="img/thumnail/konggpatg.png"
              className="selectImg"
              alt="sun and moon"
            ></img>
          </Item>
        </Grid>
        <Grid item xs={4} onClick={() => openModal(4)} className="selectBtn">
          <Item>
            <img
              src="img/thumnail/sunandmoon2.png"
              className="selectImg"
              alt="sun and moon"
            ></img>
          </Item>
        </Grid>
        <Grid item xs={4} onClick={() => openModal(5)} className="selectBtn">
          <Item>
            <img
              src="img/thumnail/ggaesoon.png"
              className="selectImg"
              alt="sun and moon"
            ></img>
          </Item>
        </Grid>
        <Grid item xs={4} onClick={() => openModal(6)} className="selectBtn">
          <Item>
            <img
              src="img/thumnail/ready1.png"
              className="selectImg"
              alt="sun and moon"
            ></img>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
