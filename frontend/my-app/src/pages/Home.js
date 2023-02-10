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
  const openModal = () => {
    setModalOpen(true);
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
      <Grid container spacing={6}>
        <Grid item xs={4}>
          <Item>
            <button onClick={openModal} className="selectBtn">
              <img
                src="img/scene1/1.png"
                className="selectImg"
                alt="sun and moon"
              ></img>
            </button>
            <Modal open={modalOpen} close={closeModal} storyid={1}></Modal>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <button onClick={openModal} className="selectBtn">
              <img
                src="img/scene2/2.png"
                className="selectImg"
                alt="sun and moon"
              ></img>
            </button>
            <Modal open={modalOpen} close={closeModal} storyid={2}></Modal>
          </Item>
        </Grid>{" "}
        <Grid item xs={4}>
          <Item>
            <button onClick={openModal} className="selectBtn">
              <img
                src="img/scene3/3.png"
                className="selectImg"
                alt="sun and moon"
              ></img>
            </button>
            <Modal open={modalOpen} close={closeModal} storyid="3"></Modal>
          </Item>
        </Grid>{" "}
        <Grid item xs={4}>
          <Item>
            <button onClick={openModal} className="selectBtn">
              <img
                src="img/scene6/6.png"
                className="selectImg"
                alt="sun and moon"
              ></img>
            </button>
            <Modal open={modalOpen} close={closeModal} storyid="4"></Modal>
          </Item>
        </Grid>{" "}
        <Grid item xs={4}>
          <Item>
            <button onClick={openModal} className="selectBtn">
              <img
                src="img/scene9/9.png"
                className="selectImg"
                alt="sun and moon"
              ></img>
            </button>
            <Modal open={modalOpen} close={closeModal} storyid="5"></Modal>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <button onClick={openModal} className="selectBtn">
              <img
                src="img/scene10/10.png"
                className="selectImg"
                alt="sun and moon"
              ></img>
            </button>
            <Modal open={modalOpen} close={closeModal} storyid="6"></Modal>
          </Item>
        </Grid>{" "}
      </Grid>
    </div>
  );
};

export default Home;
