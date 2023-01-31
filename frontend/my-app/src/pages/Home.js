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
        <button className="homeBtn txt">👈🏻 뒤로가기</button>
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
            <Modal open={modalOpen} close={closeModal} header="해님 달님">
              모달 바꿀거임
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
            <Modal open={modalOpen} close={closeModal} header="해님 달님">
              {/* Modal.js <main> {props.children} </main>에 내용이 입력된다. */}
              해와 달이 된 오누이 그 신화...!
              <Grid container>
                <Grid item xs={12}>
                  <Link to="/scene1">
                    <button>하러가기</button>
                  </Link>
                </Grid>
              </Grid>
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
            <Modal open={modalOpen} close={closeModal} header="해님 달님">
              {/* Modal.js <main> {props.children} </main>에 내용이 입력된다. */}
              해와 달이 된 오누이 그 신화...!
              <Grid container>
                <Grid item xs={12}>
                  <Link to="/scene1">
                    <button>하러가기</button>
                  </Link>
                </Grid>
              </Grid>
            </Modal>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <button onClick={openModal} className="selectBtn">
              <img
                src="img/sunandmoon_select2.png"
                className="selectImg"
                alt="sun and moon"
              ></img>
            </button>
            <Modal open={modalOpen} close={closeModal} header="해님 달님">
              {/* Modal.js <main> {props.children} </main>에 내용이 입력된다. */}
              해와 달이 된 오누이 그 신화...!
              <Grid container>
                <Grid item xs={12}>
                  <Link to="/scene1">
                    <button>하러가기</button>
                  </Link>
                </Grid>
              </Grid>
            </Modal>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <button onClick={openModal} className="selectBtn">
              <img
                src="img/sunandmoon_select2.png"
                className="selectImg"
                alt="sun and moon"
              ></img>
            </button>
            <Modal open={modalOpen} close={closeModal} header="해님 달님">
              {/* Modal.js <main> {props.children} </main>에 내용이 입력된다. */}
              해와 달이 된 오누이 그 신화...!
              <Grid container>
                <Grid item xs={12}>
                  <Link to="/scene1">
                    <button>하러가기</button>
                  </Link>
                </Grid>
              </Grid>
            </Modal>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <button onClick={openModal} className="selectBtn">
              <img
                src="img/sunandmoon_select2.png"
                className="selectImg"
                alt="sun and moon"
              ></img>
            </button>
            <Modal open={modalOpen} close={closeModal} header="해님 달님">
              {/* Modal.js <main> {props.children} </main>에 내용이 입력된다. */}
              해와 달이 된 오누이 그 신화...!
              <Grid container>
                <Grid item xs={12}>
                  <Link to="/scene1">
                    <button>하러가기</button>
                  </Link>
                </Grid>
              </Grid>
            </Modal>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <button onClick={openModal} className="selectBtn">
              <img
                src="img/sunandmoon_select3.png"
                className="selectImg"
                alt="sun and moon"
              ></img>
            </button>
            <Modal open={modalOpen} close={closeModal} header="해님 달님">
              {/* Modal.js <main> {props.children} </main>에 내용이 입력된다. */}
              해와 달이 된 오누이 그 신화...!
              <Grid container>
                <Grid item xs={12}>
                  <Link to="/scene1">
                    <button>하러가기</button>
                  </Link>
                </Grid>
              </Grid>
            </Modal>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <button onClick={openModal} className="selectBtn">
              <img
                src="img/sunandmoon_select3.png"
                className="selectImg"
                alt="sun and moon"
              ></img>
            </button>
            <Modal open={modalOpen} close={closeModal} header="해님 달님">
              {/* Modal.js <main> {props.children} </main>에 내용이 입력된다. */}
              해와 달이 된 오누이 그 신화...!
              <Grid container>
                <Grid item xs={12}>
                  <Link to="/scene1">
                    <button>하러가기</button>
                  </Link>
                </Grid>
              </Grid>
            </Modal>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <button onClick={openModal} className="selectBtn">
              <img
                src="img/sunandmoon_select3.png"
                className="selectImg"
                alt="sun and moon"
              ></img>
            </button>
            <Modal open={modalOpen} close={closeModal} header="해님 달님">
              {/* Modal.js <main> {props.children} </main>에 내용이 입력된다. */}
              해와 달이 된 오누이 그 신화...!
              <Grid container>
                <Grid item xs={12}>
                  <Link to="/scene1">
                    <button>하러가기</button>
                  </Link>
                </Grid>
              </Grid>
            </Modal>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
