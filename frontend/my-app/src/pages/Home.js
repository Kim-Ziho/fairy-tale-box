import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "./Modal.js";
import Back from "./Back";
import "./Home.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
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
      <Link to="/">
        <button className="backBtn txt">👈🏻 뒤로가기</button>
      </Link>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Item>
            <button onClick={openModal} className="selectBtn">
              <img
                src="img/sunandmoon_select1.png"
                className="selectImg"
                alt="sun and moon"
              ></img>
            </button>
            <Modal
              open={modalOpen}
              close={closeModal}
              header="해님달님 헤더잖아"
            >
              한국의 대표적인 전래동화 중 하나. 넓게 보면 신화로도 볼 수 있으며,
              줄여서 해님달님이라고도 불린다. 원래는 한국의 해와 달의 기원
              신화였던 ...
              <Link to="/scene1">
                <button>하러가기</button>
              </Link>
            </Modal>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <button onClick={openModal} className="selectBtn">
              <img
                src="img/sunandmoon_select1.png"
                className="selectImg"
                alt="sun and moon"
              ></img>
            </button>
            <Modal
              open={modalOpen}
              close={closeModal}
              header="해님달님 헤더잖아"
            >
              한국의 대표적인 전래동화 중 하나. 넓게 보면 신화로도 볼 수 있으며,
              줄여서 해님달님이라고도 불린다. 원래는 한국의 해와 달의 기원
              신화였던 ...
              <Link to="/scene1">
                <button>하러가기</button>
              </Link>
            </Modal>
          </Item>
        </Grid>{" "}
        <Grid item xs={4}>
          <Item>
            <button onClick={openModal} className="selectBtn">
              <img
                src="img/sunandmoon_select1.png"
                className="selectImg"
                alt="sun and moon"
              ></img>
            </button>
            <Modal
              open={modalOpen}
              close={closeModal}
              header="해님달님 헤더잖아"
            >
              한국의 대표적인 전래동화 중 하나. 넓게 보면 신화로도 볼 수 있으며,
              줄여서 해님달님이라고도 불린다. 원래는 한국의 해와 달의 기원
              신화였던 ...
              <Link to="/scene1">
                <button>하러가기</button>
              </Link>
            </Modal>
          </Item>
        </Grid>{" "}
        <Grid item xs={4}>
          <Item>
            <button onClick={openModal} className="selectBtn">
              <img
                src="img/sunandmoon_select1.png"
                className="selectImg"
                alt="sun and moon"
              ></img>
            </button>
            <Modal
              open={modalOpen}
              close={closeModal}
              header="해님달님 헤더잖아"
            >
              한국의 대표적인 전래동화 중 하나. 넓게 보면 신화로도 볼 수 있으며,
              줄여서 해님달님이라고도 불린다. 원래는 한국의 해와 달의 기원
              신화였던 ...
              <Link to="/scene1">
                <button>하러가기</button>
              </Link>
            </Modal>
          </Item>
        </Grid>{" "}
        <Grid item xs={4}>
          <Item>
            <button onClick={openModal} className="selectBtn">
              <img
                src="img/sunandmoon_select1.png"
                className="selectImg"
                alt="sun and moon"
              ></img>
            </button>
            <Modal
              open={modalOpen}
              close={closeModal}
              header="해님달님 헤더잖아"
            >
              한국의 대표적인 전래동화 중 하나. 넓게 보면 신화로도 볼 수 있으며,
              줄여서 해님달님이라고도 불린다. 원래는 한국의 해와 달의 기원
              신화였던 ...
              <Link to="/scene1">
                <button>하러가기</button>
              </Link>
            </Modal>
          </Item>
        </Grid>{" "}
        <Grid item xs={4}>
          <Item>
            <button onClick={openModal} className="selectBtn">
              <img
                src="img/sunandmoon_select1.png"
                className="selectImg"
                alt="sun and moon"
              ></img>
            </button>
            <Modal
              open={modalOpen}
              close={closeModal}
              header="해님달님 헤더잖아"
            >
              한국의 대표적인 전래동화 중 하나. 넓게 보면 신화로도 볼 수 있으며,
              줄여서 해님달님이라고도 불린다. 원래는 한국의 해와 달의 기원
              신화였던 ...
              <Link to="/scene1">
                <button>하러가기</button>
              </Link>
            </Modal>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;