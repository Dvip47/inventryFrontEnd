import React, { useState } from "react";
import { useCookies } from "react-cookie";

import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
import { constant } from "../../Constant/Constant";
import { AuthLogic } from "../../Services/LoginLogic";

function LoginPage() {
  const { userLogin, inputHandler } = AuthLogic();

  return (
    <>
      <MDBContainer fluid className="p-3 my-5">
        <MDBRow>
          <MDBCol col="10" md="6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Phone image"
            />
          </MDBCol>

          <MDBCol col="4" md="6" style={{ marginTop: "100px" }}>
            <MDBInput
              wrapperClass="mb-4"
              placeholder="Email address"
              type="email"
              name="email"
              onChange={inputHandler}
              size="lg"
            />
            <MDBInput
              wrapperClass="mb-4"
              placeholder="Password"
              type="password"
              name="password"
              onChange={inputHandler}
              size="lg"
            />

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <NavLink to="/forgotpassword">Forgot password?</NavLink>
            </div>

            <MDBBtn className="mb-4 w-100" size="lg" onClick={userLogin}>
              Sign in
            </MDBBtn>

            <span>New User ?</span>
            <NavLink to="/registation"> Register</NavLink>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default LoginPage;
