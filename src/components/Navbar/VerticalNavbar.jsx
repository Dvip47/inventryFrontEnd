import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthLogic } from "../../Services/LoginLogic";
import UpdateProfile from "../credentials/UpdateProfile";

function VerticalNavbar({ name, role, menu, imgUrl }) {
  const { logout } = AuthLogic();
  const [updateShow, setUpdateShow] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <div>
      <nav id="navigation" className="navigation-sidebar bg-primary">
        <div className="navigation-header">
          <NavLink to="/">
            <span className="logo ">YourLogo</span>
          </NavLink>
          {/* <img src="logo.png" alt="logo" className="brand" height="50" /> */}
        </div>

        <div className="navigation-profile">
          <img
            className="profile-img rounded-circle"
            src={imgUrl}
            alt="profile image"
          />

          <h4 className="name">{name ? <>{name}</> : <>User</>}</h4>
          <span className="designation">
            {role ? <>{role}</> : <>Not specify</>}
          </span>

          <a
            id="show-user-menu"
            href="#"
            className="circle-white-btn profile-setting"
          >
            <i className="fa fa-cog"></i>
          </a>

          <div className="logged-user-menu bg-white">
            <div className="avatar-info">
              <img
                className="profile-img rounded-circle"
                src={imgUrl}
                alt="profile image"
              />
              <h4 className="name">{name ? <>{name}</> : <>User</>}</h4>
              <span className="designation">
                {role ? <>{role}</> : <>Not specify</>}
              </span>
            </div>

            <ul className="list-unstyled">
              <li>
                <NavLink to="/">
                  <i className="ion-ios-email-outline"></i>
                  <span>Emails</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/updateprofile"
                  onClick={() => {
                    setUpdateShow(!updateShow);
                  }}
                >
                  <i className="ion-ios-person-outline"></i>
                  <span>Update Profile</span>
                </NavLink>
                {updateShow ? (
                  <>
                    <UpdateProfile name={"vipin"} role={role} />
                  </>
                ) : (
                  <></>
                )}
              </li>
              <li>
                <NavLink to="/changepassword">
                  <i className="ion-ios-locked-outline"></i>
                  <span>Change Password</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="#"
                  onClick={() => {
                    logout();
                  }}
                >
                  <i className="ion-log-out"></i>
                  <span>Logout</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="navigation-menu">
          <ul className="menu-items custom-scroll">
            {menu.length != 0 ? (
              <>
                {menu.map((data, id) => {
                  console.log(data);

                  return (
                    <li key={id}>
                      {/* <NavLink to="/category" className="have-submenu">
                        <span className="icon-thumbnail">
                          <i className="dripicons-article"></i>
                        </span>
                        <span className="title">{data}</span>
                      </NavLink> */}

                      {!show ? (
                        <>
                          <a
                            href="#"
                            className="have-submenu "
                            onClick={() => {
                              setShow(!show);
                            }}
                          >
                            <span className="icon-thumbnail">
                              <i className="dripicons-article"></i>
                            </span>
                            <span className="title">{data}</span>
                          </a>
                        </>
                      ) : (
                        <>
                          <a
                            href="#"
                            className="have-submenu show"
                            onClick={() => {
                              setShow(!show);
                            }}
                          >
                            <span className="icon-thumbnail">
                              <i className="dripicons-article"></i>
                            </span>
                            <span className="title">{data}</span>
                          </a>
                        </>
                      )}

                      {data == "User Management" ? (
                        <>
                          {show ? (
                            <>
                              <ul
                                className="sub-menu"
                                style={{ display: "block" }}
                              >
                                <li>
                                  <NavLink to="/userlist">
                                    <span className="icon-thumbnail">
                                      <i className="dripicons-blog"></i>
                                    </span>
                                    <span className="title">Customer List</span>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/vendorlist">
                                    <span className="icon-thumbnail">
                                      <i className="dripicons-blog"></i>
                                    </span>
                                    <span className="title">Vendor List</span>
                                  </NavLink>
                                </li>
                              </ul>
                            </>
                          ) : (
                            <>
                              <ul
                                className="sub-menu"
                                style={{ display: "none" }}
                              >
                                <li>
                                  <NavLink to="#">
                                    <span className="icon-thumbnail">
                                      <i className="dripicons-blog"></i>
                                    </span>
                                    <span className="title">Customer List</span>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="#">
                                    <span className="icon-thumbnail">
                                      <i className="dripicons-blog"></i>
                                    </span>
                                    <span className="title">Vendor List</span>
                                  </NavLink>
                                </li>
                              </ul>
                            </>
                          )}
                        </>
                      ) : (
                        <></>
                      )}
                    </li>
                  );
                })}
              </>
            ) : (
              <>
                <h1>No menu Found</h1>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default VerticalNavbar;
