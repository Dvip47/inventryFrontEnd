import React from "react";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Topbar() {

  return (
    <>
      <div className="header fixed-header body ">
        <div className="container-fluid" style={{ padding: "10px 25px" }}>
          <div className="row">
            <div className="col-9 col-md-6 d-lg-none">
              <a id="toggle-navigation" href="#" className="icon-btn mr-3">
                <i className="fa fa-bars"></i>
              </a>
              <span className="logo">WOW - Admin</span>
            </div>
            <div className="col-lg-8 d-none d-lg-block">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Dashboard</a>
                </li>
              </ol>
            </div>
            <div className="col-3 col-md-6 col-lg-4">
              {/* <a
                href=""
                className="btn btn-primary btn-round pull-right d-none d-md-block"
                onClick={LogoutLogic}
              > */}
              {/* <button className="btn btn-primary btn-round pull-right d-none d-md-block">
                Logout
              </button> */}
              {/* </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Topbar;
