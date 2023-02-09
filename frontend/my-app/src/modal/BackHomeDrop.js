import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BackHomeDrop.css";

const BackHome = () => {
  return (
    <a href="/home">
      <button class="gohome txt"></button>
    </a>
  );
};

export default BackHome;
