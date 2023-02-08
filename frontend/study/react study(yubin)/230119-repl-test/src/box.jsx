import React from "react";

function Box(props) {
  const clickMe = () => {
    alert("리액트 기초 ssap 가능");
  };
  return (
    <div className="box">
      box{props.num}
      {props.name}
      <button onClick={clickMe}>hi</button>
    </div>
  );
}

export default Box;
