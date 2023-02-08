import React from "react";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

function Login() {
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <h1>TaleBox</h1>
      <br></br>

      <form action="">
        <MDBInput wrapperClass="mb-4" label="Email" id="form1" type="email" />
        <MDBInput
          wrapperClass="mb-4"
          label="Password"
          id="form2"
          type="password"
        />

        <MDBBtn className="mb-4">Sign in</MDBBtn>
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
