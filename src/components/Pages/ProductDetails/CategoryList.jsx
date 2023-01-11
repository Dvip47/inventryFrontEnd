import React from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import CategoryLogic from "../../../Services/CategoryLogic";
function CategoryList() {
  const { category, getCategoryFunction } = CategoryLogic();
  useEffect(() => {
    getCategoryFunction();
  });
  return (
    <section class="page-container">
      <div class="page-content-wrapper">
        <div class="content sm-gutter">
          <div class="container-fluid padding-25 sm-padding-10">
            <div class="row">
              <div class="col-12">
                <div class="section-title">
                  <h4>Category List</h4>
                  <NavLink to="/addcategory" className="btn btn-success">
                    {" "}
                    + New Category
                  </NavLink>
                </div>
              </div>

              <div class="col-12" style={{ marginLeft: "0%" }}>
                <div class="block bg-trans table-block mb-4">
                  <div class="row">
                    <div class="table-responsive">
                      <table
                        id="dataTable1"
                        class="display table table-striped"
                        data-table="data-table"
                      >
                        <thead>
                          <tr className="text-center">
                            <th className="pl-4">S.NO.</th>
                            <th className="pl-4">ID</th>
                            <th className="pl-4">AVAILABLE CATEGORY</th>
                            {/* <th>TOTAL PRODUCT</th> */}
                            <th>STATUS</th>
                            <th>ACTION</th>
                          </tr>
                        </thead>
                        <tbody>
                          {category?.lenth != 0 ? (
                            <>
                              {category?.map((data, index) => {
                                // console.log(data?._id);
                                return (
                                  <tr key={index} className="text-center">
                                    <td className="pl-4">{index + 1}</td>
                                    <td className="pl-4">{data?._id}</td>
                                    <td className="pl-4">{data?.category}</td>
                                    {/* <td className="pl-4">500</td> */}
                                    <td className="pl-4">
                                      <div className="container">
                                        <label className="switch">
                                          <input type="checkbox" checked />
                                          <span className="slider round"></span>
                                        </label>
                                      </div>
                                    </td>
                                    <td className="pl-4">
                                      <i class="fas fa-edit"></i>{" "}
                                    
                                    </td>
                                  </tr>
                                );
                              })}
                            </>
                          ) : (
                            <>
                              <div>
                                <center>
                                  <img
                                    src="/img/loading.gif"
                                    alt="loding gif"
                                    height={"250px"}
                                    width={"250px"}
                                  />
                                </center>
                              </div>
                            </>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoryList;
