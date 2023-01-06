import React from "react";
import VerticalNavbar from "../Navbar/VerticalNavbar";
import CartView from "./CartView";
import Topbar from "../Navbar/Topbar";
import UserList from "./UserList";
import VisitGraph from "./VisitGraph";
import { useState, useEffect } from "react";
import DonutChart from "./DonutChart";
import MonthReport2 from "./MonthReportProgressbar";
import History from "./History";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserDeatails from "../../Services/UserDeatailsLogic";

function MainPage() {
  const { data, setData, UserDetails1 } = UserDeatails();
  useEffect(() => {
    UserDetails1();
  }, []);

  const adminMenu = ["User Management", "Add Products", "Add Category"];
  const vendorMenu = ["Add Products", "Add Category"];
  const userMenu = ["My Order", "Wish List", "Gift Card", "Notifications"];

  return (
    <>
      {data?.data?.role == "Admin" ? (
        // {role == "Admin" ? (
        <>
          {" "}
          <div>
            <VerticalNavbar
              name={data?.data?.fname}
              role={data?.data?.role}
              menu={adminMenu}
              imgUrl={data?.data?.photo}
            />
            <section className="page-container">
              <div className="page-content-wrapper">
                <Topbar />
                <div className="content sm-gutter">
                  <div className="container-fluid padding-25 sm-padding-10">
                    <div className="row">
                      <div className="col-12">
                        <div className="section-title">
                          <h4>One View</h4>
                        </div>
                      </div>

                      <CartView
                        total={100}
                        color={"#5db36b"}
                        title={"Testing"}
                        profit={true} //value is true or false
                        change={12}
                      />

                      <CartView
                        total={18}
                        color={"#f77c7e"}
                        title={"Testing2"}
                        profit={false} //value is true or false
                        change={12}
                      />

                      <CartView
                        total={"₹12680"}
                        color={"#95b1fc"}
                        title={"Testing3"}
                        profit={true} //value is true or false
                        change={12}
                      />

                      <CartView
                        total={100}
                        color={"#c088f7"}
                        title={"Testing4"}
                        profit={false} //value is true or false
                        change={12}
                      />

                      <MonthReport2
                        color={"#6ef0d1"}
                        amount={180}
                        month={"This Month"}
                      />
                      <MonthReport2
                        color={"#f244cf"}
                        amount={158}
                        month={"Last Month"}
                      />
                      <MonthReport2
                        color={"#5d55fa"}
                        amount={7882}
                        month={"Last Year"}
                      />

                      <div className="col-12 col-md-9 col-lg-9">
                        <div className="section-title">
                          <h4>Multi Charts</h4>
                        </div>
                        <UserList role={data?.data?.role} title={"User List"} />
                      </div>

                      <DonutChart total={120} />
                      <History />
                      <History />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      ) : data?.data?.role == "Vendor" ? (
        <>
          {" "}
          <div>
            <VerticalNavbar
              name={data?.data?.fname}
              role={data?.data?.role}
              menu={vendorMenu}
              imgUrl={data?.data?.photo}
            />
            <section className="page-container">
              <div className="page-content-wrapper">
                <Topbar />
                <div className="content sm-gutter">
                  <div className="container-fluid padding-25 sm-padding-10">
                    <div className="row">
                      <div className="col-12">
                        <div className="section-title">
                          <h4>One View</h4>
                        </div>
                      </div>

                      <CartView
                        total={138}
                        color={"#5db36b"}
                        title={"Total Products"}
                        profit={false} //value is true or false
                        change={12}
                      />

                      <CartView
                        total={18564}
                        color={"#f77c7e"}
                        title={"Total Order"}
                        profit={true} //value is true or false
                        change={12}
                      />

                      <CartView
                        total={18500}
                        color={"#c088f7"}
                        title={"Total Delivery"}
                        profit={false} //value is true or false
                        change={2}
                      />

                      <CartView
                        total={"₹12680"}
                        color={"#95b1fc"}
                        title={"Total Sell"}
                        profit={true} //value is true or false
                        change={12}
                      />

                      {/* <div className="col-12 col-md-9 col-lg-9">
                        <div className="section-title">
                          <h4>Multi Charts</h4>
                        </div>

                        <UserList
                          role={data?.data?.role}
                          title={"Customer List"}
                        />
                      </div>

                      <DonutChart total={120} /> */}
                      <History />
                      <History />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      ) : data?.data?.role == "Customer" ? (
        <>
          <div>
            <VerticalNavbar
              name={data?.data?.fname}
              role={data?.data?.role}
              menu={userMenu}
              imgUrl={data?.data?.photo}
            />
            <section className="page-container">
              <div className="page-content-wrapper">
                <Topbar />
                <div className="content sm-gutter">
                  <div className="container-fluid padding-25 sm-padding-10">
                    <div className="row">
                      <div className="col-12">
                        <div className="section-title">
                          <h4>One View</h4>
                        </div>
                      </div>

                      <CartView
                        total={24}
                        color={"#5db36b"}
                        title={"Total Order"}
                        profit={true} //value is true or false
                        change={10}
                      />

                      <CartView
                        total={8}
                        color={"#f77c7e"}
                        title={"Cancelled"}
                        profit={false} //value is true or false
                        change={12}
                      />

                      <CartView
                        total={13}
                        color={"#95b1fc"}
                        title={"Delivery"}
                        profit={true} //value is true or false
                        change={12}
                      />

                      <CartView
                        total={3}
                        color={"#c088f7"}
                        title={"Pending"}
                        profit={false} //value is true or false
                        change={12}
                      />

                      {/* <div className="col-12 col-md-9 col-lg-9">
                        <div className="section-title">
                          <h4>Multi Charts</h4>
                        </div>
                        <VisitGraph />
                      </div>

                      <DonutChart total={120} /> */}
                      <History title={"My Order"} />
                      <History title={"My WishList"} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      ) : (
        <>
          <Topbar />
          <h1>Something Wrong, Login Again</h1>
        </>
      )}
    </>
  );
}

export default MainPage;
