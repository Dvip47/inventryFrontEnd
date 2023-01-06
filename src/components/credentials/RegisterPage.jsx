import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [formData, setFormData] = useState();

  const inputHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const userSignup = async () => {
    if (formData.cpassword === formData.password) {
      try {
        const res = await fetch("/api/users/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fname: formData?.fname,
            lname: formData?.lname,
            role: formData?.role,
            email: formData?.email,
            password: formData?.password,
          }),
        });
        let a = await res.json();
        if (res.status == 201) {
          toast.success("Account Created 👌");
        } else {
          toast.error("Registation Failed 🙁");
        }
      } catch (error) {
        toast.error(error);
      }
    } else {
      toast.error("Confirm password not match 😵");
    }
  };
  return (
    <MDBContainer fluid className="p-4">
      <MDBRow>
        <MDBCol
          md="6"
          className="text-center text-md-start d-flex flex-column justify-content-center"
        >
          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            The best offer <br />
            <span className="text-primary">for your business</span>
          </h1>

          <p className="px-3" style={{ color: "hsl(217, 10%, 50.8%)" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            itaque accusantium odio, soluta, corrupti aliquam quibusdam tempora
            at cupiditate quis eum maiores libero veritatis? Dicta facilis sint
            aliquid ipsum atque?
          </p>
        </MDBCol>

        <MDBCol md="6">
          <MDBCard className="my-5">
            <MDBCardBody className="p-5">
              <MDBRow>
                <MDBCol col="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    placeholder="First name"
                    type="text"
                    name="fname"
                    onChange={inputHandler}
                  />
                </MDBCol>

                <MDBCol col="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    placeholder="Last name"
                    type="text"
                    name="lname"
                    onChange={inputHandler}
                  />
                </MDBCol>
              </MDBRow>

              <MDBInput
                wrapperClass="mb-4"
                placeholder="Email"
                type="email"
                name="email"
                onChange={inputHandler}
              />
              {/* <DropdownButton
                className="mb-4"
                id="dropdown-basic-button"
                title="Choose Role"
                name="role"
                onChange={inputHandler}
              >
                <Dropdown.Item href="">User</Dropdown.Item>
                <Dropdown.Item href="">Admin</Dropdown.Item>
                <Dropdown.Item href="">Something else</Dropdown.Item>
              </DropdownButton> */}
              <label htmlFor="role">Role : </label>

              <select
                name="role"
                id="role"
                onChange={inputHandler}
                className="mb-4"
              >
                <option value="NA">Select</option>
                <option value="Customer">Customer</option>
                <option value="Admin">Admin</option>
                <option value="Vendor">Vendor</option>
              </select>
              <MDBInput
                wrapperClass="mb-4"
                placeholder="Password"
                type="password"
                name="password"
                onChange={inputHandler}
              />
              <MDBInput
                wrapperClass="mb-4"
                placeholder="Confirm Password"
                type="password"
                name="cpassword"
                onChange={inputHandler}
              />

              <div className="mb-4">
                <MDBCheckbox
                  value=""
                  id="flexCheckDefault"
                  label="Accept Term and condition"
                  // name="flexCheck"
                  // onChange={inputHandler}
                />
              </div>

              <MDBBtn className="w-100 mb-4" size="md" onClick={userSignup}>
                sign up
              </MDBBtn>
              <span>Already Have Account ?</span>
              <NavLink to="/"> Login</NavLink>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Signup;
