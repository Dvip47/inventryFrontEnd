import React, { useEffect, useState } from "react";
import UserDeatails from "../../Services/UserDeatailsLogic";

function VendorListPage() {
  const { allUser, AllUserFunction } = UserDeatails();
  const [vendorList, setVendorList] = useState();
  const FilterFunction = () => {
    let result = [];
    let role = "Vendor";
    result = allUser.filter((data) => {
      return data?.role == role;
    });
    console.log(result);
    setVendorList(result);
  };
  console.log(allUser);
  useEffect(() => {
    AllUserFunction();
    // FilterFunction();
  }, []);

  let myTimeOut = setTimeout(FilterFunction, 100);
  // let clearTimeout1 = clearTimeout(myTimeOut);
  // setTimeout(clearTimeout1, 200);
  return (
    <center>

    <section className="page-container mt-5">
      <div className="page-content-wrapper mt-5">
        <div className="content sm-gutter mt-3 mb-4">
          <div class="col-lg-9 mt-4 mt-lg-0">
            <div class="row">
              <div class="col-md-12">
                <div class="user-dashboard-info-box table-responsive mb-0 bg-white p-4 shadow-sm">
                  <h1 className="text-center">Vendor List</h1>
                  <table class="table manage-candidates-top mb-0">
                    <thead>
                      <tr>
                        <th class="text-center">Candidate Name</th>
                        <th class="text-center">Status</th>
                        <th class="action text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {vendorList ? (
                        <>
                          {vendorList?.map((data, id) => {
                            return (
                              <tr class="candidates-list">
                                <td class="title">
                                  <div class="thumb">
                                    <img
                                      class="img-fluid"
                                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                      alt=""
                                    />
                                  </div>
                                  <div class="candidate-list-details">
                                    <div class="candidate-list-info">
                                      <div class="candidate-list-title">
                                        <h5 class="mb-0">
                                          <a href="#">
                                            {data?.fname}&nbsp;{data?.lname}
                                          </a>
                                        </h5>
                                      </div>
                                      <div class="candidate-list-option">
                                        <ul class="list-unstyled">
                                          <li>
                                            <i class="fas fa-filter pr-1"></i>{" "}
                                            {data?.email}
                                          </li>
                                          <li>
                                            <i class="fas fa-map-marker-alt pr-1"></i>
                                            {data?.role}
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="candidate-list-favourite-time text-center">
                                  <div className="container">
                                    <label className="switch">
                                      <input type="checkbox" />
                                      <span className="slider round"></span>
                                    </label>
                                  </div>
                                </td>
                                <td>
                                  <ul class="list-unstyled mb-0 d-flex justify-content-end">
                                    <li>
                                      <a
                                        href="#"
                                        class="text-primary"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="view"
                                      >
                                        <i class="far fa-eye"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        class="text-info"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="Edit"
                                      >
                                        <i class="fas fa-pencil-alt"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        class="text-danger"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="Delete"
                                      >
                                        <i class="far fa-trash-alt"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </td>
                              </tr>
                            );
                          })}
                        </>
                      ) : (
                        <>
                          <h5 className="text-center">Data not found</h5>
                        </>
                      )}
                    </tbody>
                  </table>
                  {/* <div class="text-center mt-3 mt-sm-3">
                <ul class="pagination justify-content-center mb-0">
                  <li class="page-item disabled">
                    {" "}
                    <span class="page-link">Prev</span>{" "}
                  </li>
                  <li class="page-item active" aria-current="page">
                    <span class="page-link">1 </span>{" "}
                    <span class="sr-only">(current)</span>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      ...
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      25
                    </a>
                  </li>
                  <li class="page-item">
                    {" "}
                    <a class="page-link" href="#">
                      Next
                    </a>{" "}
                  </li>
                </ul>
              </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </center>
  );
}

export default VendorListPage;
