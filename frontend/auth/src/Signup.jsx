import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCardBody,
  MDBInput,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

function signup() {
  return (
    <MDBContainer fluid className="p-3 my-5 d-flex flex-column w-50">
      <h1>회원가입</h1>
      <br></br>

      <form action="">
        <MDBRow>
          <MDBCol size={9}>
            <MDBInput
              wrapperClass="mb-4"
              label="Email"
              id="form1"
              type="email"
            />
          </MDBCol>
          <MDBCol size={3}>
            <MDBBtn className="w-100 mb-4 justify-content-center" size="md">
              <MDBIcon far icon="check-circle" />
            </MDBBtn>
          </MDBCol>
        </MDBRow>

        <MDBInput
          wrapperClass="mb-4"
          label="Nickname"
          id="form4"
          type="string"
        />

        <MDBInput
          wrapperClass="mb-4"
          label="Password"
          id="form2"
          type="password"
        />

        <MDBInput
          wrapperClass="mb-4"
          label="Check Password"
          id="form3"
          type="password"
        />

        <MDBBtn className="w-100 mb-4" size="md">
          sign up
        </MDBBtn>
      </form>
    </MDBContainer>
  );
}

export default signup;
