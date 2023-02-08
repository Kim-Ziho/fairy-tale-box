import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BackHomeDrop.css";

const BackHome = () => {
  return (<Link to="/home"><button class="blank txt"></button></Link>);
};

export default BackHome;