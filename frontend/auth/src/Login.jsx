import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MDBContainer, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSignIn = () => {
    axios({
      method: "post",
      url: "localhost:8080/api/member/login",
      data: {
        email: email,
        password: password,
      },
    })
      .then((res) => {
        console.log(res);
        navigate("logined");
      })
      .catch();
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <h1>TaleBox</h1>
      <br></br>

      <form action="">
        <MDBInput
          className="mb-4"
          label="Email input"
          id="typeEmail"
          type="email"
          onChange={onChangeEmail}
        />
        <MDBInput
          className="mb-4"
          label="Password input"
          id="typePassword"
          type="password"
          onChange={onChangePassword}
        />

        <MDBBtn className="mb-4" onClick={onSignIn}>
          Sign in
        </MDBBtn>
      </form>
      <div className="text-center">
        <p>
          Not a member? <a href="signup">Register</a>
        </p>
      </div>
    </MDBContainer>
  );
}

export default Login;
