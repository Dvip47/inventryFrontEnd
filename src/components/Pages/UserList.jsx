import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import UserDeatails from "../../Services/UserDeatailsLogic";
import UserListPage from "./UserListPage";

function UserList({ role, title }) {
  const {
    AllUserFunction,
    handleSearchAdmin,
    handleSearchVendor,
    AllCustomerFunction,
    inputHandler,
    customerData,
    filteredData1,
    allUser,
    filteredData,
    state,
    setState,
  } = UserDeatails();
  useEffect(() => {
    AllUserFunction();
    AllCustomerFunction();
  }, []);

  return (
    <>
      {role == "Admin" ? (
        <>
          {" "}
          <div className="col-12 col-md-12 col-lg-12">
            <div className="block bg-trans table-block mb-4">
              <div
                className="block-heading d-flex align-items-center"
                style={{ border: "0; padding-bottom: 0" }}
              >
                <h5 className="text-truncate">{title}</h5>
                <div className="ml-auto w-25">
                  <select
                    className="custom-select form-rounded form-control input-sm"
                    name="role"
                    onChange={(e) => {
                      inputHandler(e);
                      handleSearchAdmin(e);
                    }}
                  >
                    <option value="NA">All</option>
                    <option value="Customer">Customer</option>
                    <option value="Vendor">Vendor</option>
                  </select>
                </div>
              </div>
              <div className="custom-scroll" style={{ maxHeight: "250px" }}>
                <div className="table-responsive text-no-wrap">
                  <table className="table">
                    <thead style={{ color: "white" }}>
                      <tr>
                        <th className=""></th>
                        <th className="text-left abc">Name</th>{" "}
                        <th class="abc">Email</th>
                        <th className=" abc">Status</th>
                        <th className="action text-center abc">Action</th>
                      </tr>
                    </thead>
                    <tbody className="text-middle">
                      {filteredData ? (
                        <>
                          {filteredData?.map((data, id) => {
                            return (
                              <tr>
                                <td>
                                  <div className="thumb">
                                    <img
                                      className="img-fluid"
                                      // src={data?.photo}
                                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                      alt=""
                                      height={"50px"}
                                      width={"50px"}
                                    />
                                  </div>
                                </td>
                                <td className="name">
                                  {data?.fname}&nbsp;{data?.lname}
                                </td>
                                <td className="product">
                                  <div className="product-img-more">
                                    <i class="fa fa-envelope pr-1"></i>
                                    {data?.email}
                                  </div>
                                </td>
                                <td className="status">
                                  <i className="fas fa-users pr-1"></i>
                                  {data?.role}
                                </td>
                                <td className="candidate-list-favourite-time text-center">
                                  <div className="container">
                                    <label className="switch">
                                      <input type="checkbox" />
                                      <span className="slider round"></span>
                                    </label>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </>
                      ) : allUser.length != 0 ? (
                        <>
                          {allUser?.map((data, id) => {
                            return (
                              <tr>
                                <td>
                                  <div className="thumb">
                                    <img
                                      className="img-fluid"
                                      // src={data?.photo}
                                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                      alt=""
                                      height={"50px"}
                                      width={"50px"}
                                    />
                                  </div>
                                </td>
                                <td className="name">
                                  {data?.fname}&nbsp;{data?.lname}
                                </td>
                                <td className="product">
                                  <div className="product-img-more">
                                    <i class="fa fa-envelope pr-1"></i>
                                    {data?.email}
                                  </div>
                                </td>
                                <td className="status">
                                  <i class="fas fa-users pr-1"></i>
                                  {data?.role}
                                </td>
                                <td className="candidate-list-favourite-time text-center">
                                  <div className="container">
                                    <label className="switch">
                                      <input type="checkbox" />
                                      <span className="slider round"></span>
                                    </label>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </>
                      ) : (
                        <>
                          <div>
                            <h1 className="text-center">Data not found</h1>
                          </div>
                        </>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <NavLink
                to="/alluserlist"
                onClick={() => {
                  setState(!state);
                }}
              >
                See More......
              </NavLink>
              {state == true ? (
                <>
                  <UserListPage allUser={allUser} />
                </>
              ) : (
                <></>
              )}
              {/* <NavLink to="/userlist">See More......</NavLink> */}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="col-12 col-md-12 col-lg-12">
            <div className="block bg-trans table-block mb-4">
              <div
                className="block-heading d-flex align-items-center"
                style={{ border: "0; padding-bottom: 0" }}
              >
                <h5 className="text-truncate">User List</h5>
                <div className="ml-auto w-25">
                  <select
                    className="custom-select form-rounded form-control input-sm"
                    name="role"
                    onChange={(e) => {
                      inputHandler(e);
                      handleSearchVendor(e);
                    }}
                  >
                    <option value="NA">All</option>
                    <option value="Customer">Customer</option>
                  </select>
                </div>
              </div>
              <div className="custom-scroll" style={{ maxHeight: "250px" }}>
                <div className="table-responsive text-no-wrap">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className=""></th>
                        <th className="text-left">Name</th>{" "}
                        <th class="">Email</th>
                        <th className="">Status</th>
                        <th className="action text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody className="text-middle">
                      {filteredData1 ? (
                        <>
                          {filteredData1?.map((data, id) => {
                            return (
                              <tr>
                                <td>
                                  <div className="thumb">
                                    <img
                                      className="img-fluid"
                                      // src={data?.photo}
                                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                      alt=""
                                      height={"50px"}
                                      width={"50px"}
                                    />
                                  </div>
                                </td>
                                <td className="name">
                                  {data?.fname}&nbsp;{data?.lname}
                                </td>
                                <td className="product">
                                  <div className="product-img-more">
                                    <i class="fa fa-envelope pr-1"></i>
                                    {data?.email}
                                  </div>
                                </td>
                                <td className="status">
                                  <i className="fas fa-users pr-1"></i>
                                  {data?.role}
                                </td>
                                <td className="candidate-list-favourite-time text-center">
                                  <div className="container">
                                    <label className="switch">
                                      <input type="checkbox" />
                                      <span className="slider round"></span>
                                    </label>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </>
                      ) : customerData ? (
                        <>
                          {customerData?.map((data, id) => {
                            return (
                              <tr>
                                <td>
                                  <div className="thumb">
                                    <img
                                      className="img-fluid"
                                      // src={data?.photo}
                                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                      alt=""
                                      height={"50px"}
                                      width={"50px"}
                                    />
                                  </div>
                                </td>
                                <td className="name">
                                  {data?.fname}&nbsp;{data?.lname}
                                </td>
                                <td className="product">
                                  <div className="product-img-more">
                                    <i class="fa fa-envelope pr-1"></i>
                                    {data?.email}
                                  </div>
                                </td>
                                <td className="status">
                                  <i class="fas fa-users pr-1"></i>
                                  {data?.role}
                                </td>
                                <td className="candidate-list-favourite-time text-center">
                                  <div className="container">
                                    <label className="switch">
                                      <input type="checkbox" />
                                      <span className="slider round"></span>
                                    </label>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </>
                      ) : (
                        <>
                          <div>
                            <h1 className="text-center">Data not found</h1>
                          </div>
                        </>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <a href="/alluserlist">See More......</a>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default UserList;
