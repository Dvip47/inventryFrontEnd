import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { constant } from "../../Constant/Constant";

function ChangePassword() {
  const [formData, setFormData] = useState();

  const inputHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(formData);
  const ChangePassword = async (event) => {
    event.preventDefault();
    if (formData?.password == formData?.cpassword) {
      try {
        const res = await fetch(constant.CHANGE_PASSWORD, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            oldPassword: formData?.oldPassword,
            password: formData?.password,
          }),
        });
        let a = await res.json();
        if (res.status == 200) {
          console.log("if running", res);
          toast.success("Change Successful 😎");
          //   window.location.reload("/");
        } else {
          console.log("else running", a.message);
          toast.error(a.message, "😣");
        }
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    } else {
      console.log("Confirm password not match");
      toast.error("Confirm password not match");
    }
  };

  return (
    // <section style="background: url(../../../images.pexels.com/photos/176851/pexels-photo-176851663a.jpg?w=940&amp;h=650&amp;auto=compress&amp;cs=tinysrgb);background-size: cover">
    <section>
      <div className="height-100-vh bg-primary-trans">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="login-div">
                <p className="logo mb-1">YourLogo</p>
                {/* <p className="mb-4" style="color: #a5b5c5"> */}
                <p className="mb-4">Change password of your account</p>
                <form id="needs-validation" action="#" noValidate>
                  <div className="form-group">
                    <label>Old Password</label>
                    <input
                      className="form-control input-lg"
                      placeholder="Enter old password"
                      type="password"
                      name="oldPassword"
                      onChange={inputHandler}
                      required
                    />
                    <div className="invalid-feedback">
                      This field is required.
                    </div>
                  </div>
                  <div className="form-group">
                    <label>New Password</label>
                    <input
                      className="form-control input-lg"
                      placeholder="Create new password"
                      type="password"
                      name="password"
                      onChange={inputHandler}
                      required
                    />
                    <div className="invalid-feedback">
                      This field is required.
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Confirm New Password</label>
                    <input
                      className="form-control input-lg"
                      placeholder="Confirm new password"
                      type="password"
                      name="cpassword"
                      onChange={inputHandler}
                      required
                    />
                    <div className="invalid-feedback">
                      This field is required.
                    </div>
                  </div>

                  <button
                    className="btn btn-primary mt-2"
                    onClick={ChangePassword}
                  >
                    Change Password
                  </button>

                  <small className="text-muted mt-5 mb-1 d-block">
                    Get me back to <NavLink to="/">Dashboard</NavLink>
                  </small>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChangePassword;
