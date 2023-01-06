import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ForgotPassword() {
  const [formData, setFormData] = useState();
  console.log(formData);
  const inputHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const ForgotEmail = async () => {
    try {
      const res = await fetch("/api/users/forgotpassword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData?.email,
        }),
      });
      let a = await res.json();
      if (res.status == 200) {
        // toast.success("Email send successful 😎");
        toast.success(a.message, "😣");
      } else {
        console.log(a.message);
        toast.error(a.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed, Try again 🤪 ");
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
                    <label>E-mail</label>
                    <input
                      className="form-control input-lg"
                      placeholder="Enter Email or User Name"
                      type="email"
                      name="email"
                      onChange={inputHandler}
                      required
                    />
                    <div className="invalid-feedback">
                      This field is required.
                    </div>
                  </div>

                  <button
                    className="btn btn-primary mt-2"
                    onClick={() => {
                      ForgotEmail();
                    }}
                  >
                    Send E-Mail
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

export default ForgotPassword;
