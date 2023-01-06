import React from "react";

function History({ title }) {
  return (
    <>
      <div className="col-12 col-md-6 col-lg-6">
        <div className="block table-block mb-4">
          <div
            className="block-heading d-flex align-items-center"
            style={{ border: "0", paddingBottom: "0" }}
            //   style="border: 0; padding-bottom: 0"
          >
            <h5 className="text-truncate pb-1">{title}</h5>
            <div className="ml-auto w-25">
              <select className="custom-select form-rounded form-control input-sm">
                <option>Todays</option>
                <option>Yesterday</option>
                <option>Last Week</option>
              </select>
            </div>
          </div>
          <div className="custom-scroll" style={{ maxHeight: "250px" }}>
            <div className="table-responsive text-no-wrap">
              <table className="table">
                <tbody className="text-middle">
                  <tr>
                    <td className="name">John Mayers</td>
                    <td className="product">
                      <img
                        className="product-img"
                        data-toggle="tooltip"
                        data-title="Product Name"
                        src="assets/images/products/1.jpg"
                      />
                      <img
                        className="product-img"
                        data-toggle="tooltip"
                        data-title="Product Name"
                        src="assets/images/products/2.jpg"
                      />
                      <img
                        className="product-img"
                        data-toggle="tooltip"
                        data-title="Product Name"
                        src="assets/images/products/3.jpg"
                      />
                      <div className="product-img-more">+4</div>
                    </td>
                    <td className="status">
                      <span className="badge badge-pill bg-warning">
                        pending
                      </span>
                    </td>
                    <td className="price">$190</td>
                  </tr>
                  <tr>
                    <td className="name">Meera</td>
                    <td className="product">
                      <img
                        className="product-img"
                        data-toggle="tooltip"
                        data-title="Product Name"
                        src="assets/images/products/4.jpg"
                      />
                    </td>
                    <td className="status">
                      <span className="badge badge-pill bg-success">
                        Success
                      </span>
                    </td>
                    <td className="price">$25</td>
                  </tr>
                  <tr>
                    <td className="name">William J</td>
                    <td className="product">
                      <img
                        className="product-img"
                        data-toggle="tooltip"
                        data-title="Product Name"
                        src="assets/images/products/5.jpg"
                      />
                      <img
                        className="product-img"
                        data-toggle="tooltip"
                        data-title="Product Name"
                        src="assets/images/products/6.jpg"
                      />
                      <img
                        className="product-img"
                        data-toggle="tooltip"
                        data-title="Product Name"
                        src="assets/images/products/7.jpg"
                      />
                    </td>
                    <td className="status">
                      <span className="badge badge-pill bg-warning">
                        pending
                      </span>
                    </td>
                    <td className="price">$350</td>
                  </tr>
                  <tr>
                    <td className="name">Bruno Black</td>
                    <td className="product">
                      <img
                        className="product-img"
                        data-toggle="tooltip"
                        data-title="Product Name"
                        src="assets/images/products/8.jpg"
                      />
                      <img
                        className="product-img"
                        data-toggle="tooltip"
                        data-title="Product Name"
                        src="assets/images/products/9.jpg"
                      />
                      <img
                        className="product-img"
                        data-toggle="tooltip"
                        data-title="Product Name"
                        src="assets/images/products/10.jpg"
                      />
                      <div className="product-img-more">+10</div>
                    </td>
                    <td className="status">
                      <span className="badge badge-pill bg-danger">
                        Over Due
                      </span>
                    </td>
                    <td className="price">$1999</td>
                  </tr>
                  <tr>
                    <td className="name">mishti</td>
                    <td className="product">
                      <img
                        className="product-img"
                        data-toggle="tooltip"
                        data-title="Product Name"
                        src="assets/images/products/11.jpg"
                      />
                      <img
                        className="product-img"
                        data-toggle="tooltip"
                        data-title="Product Name"
                        src="assets/images/products/12.jpg"
                      />
                      <img
                        className="product-img"
                        data-toggle="tooltip"
                        data-title="Product Name"
                        src="assets/images/products/1.jpg"
                      />
                    </td>
                    <td className="status">
                      <span className="badge badge-pill bg-success">
                        Success
                      </span>
                    </td>
                    <td className="price">$85</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default History;
