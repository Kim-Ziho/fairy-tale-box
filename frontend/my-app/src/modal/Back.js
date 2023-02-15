import React from "react";
import { useNavigate } from "react-router";
import "./Back.css";

const Back = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button className="backBtn txt" onClick={() => navigate(-1)}>👈🏻 뒤로가기</button>
    </div>
  );
};

export default Back;
