import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function HomeModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">해님 달님</h2>
          <p id="parent-modal-description">
            한국의 대표적인 전래동화 중 하나. 넓게 보면 신화로도 볼 수 있으며,
            줄여서 해님달님이라고도 불린다. 원래는 한국의 해와 달의 기원
            신화였던 ...
          </p>
          <Button onClick={handleClose}>닫기</Button>
          <Link to="/Scene1">
            <Button onClick={handleOpen}>시작할래요</Button>
          </Link>
        </Box>
      </Modal>
    </div>
  );
}
