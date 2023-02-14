import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Modal from "../modal/SelectModal.js";
import "./Home.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0.9),
  textAlign: "center",
}));

const Home = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [storyid, setStoryid] = useState({});
  const openModal = (num) => {
    setModalOpen(true);
    setStoryid(num);
    // Home.forceUpdate();
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div id="Grid">
      <h3 className="homeMainText txt">😃 동화선택 👆🏻</h3>
      <Link to="/">
        <button className="backBtn txt">👈🏻 뒤로가기</button>
      </Link>
      <Modal open={modalOpen} close={closeModal} storyid={storyid}></Modal>
      <Grid container spacing={4}>
        <Grid item xs={4} onClick={() => openModal(1)} className="selectBtn">
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
              src="img/thumnail/ready2.png"
              className="selectImg"
              alt="sun and moon"
            ></img>
          </Item>
        </Grid>
        <Grid item xs={4} onClick={() => openModal(6)} className="selectBtn">
          <Item>
            <img
              src="img/thumnail/ready3.png"
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
