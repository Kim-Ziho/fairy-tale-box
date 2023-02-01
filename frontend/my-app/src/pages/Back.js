import React from "react";
import { useNavigate } from "react-router";

const Back = () => {
  let navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }

  return (
    <div>
      <button className="backBtn txt" onClick={() => navigate(-1)}>
        👈🏻 뒤로가기
      </button>
    </div>
  );
};

export default Back;
