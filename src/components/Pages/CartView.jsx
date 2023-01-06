import React from "react";

function CartView({ total, change, title, color, profit }) {
  return (
    <>
      <div className="col-12 col-sm-6 col-md-3 col-lg-3">
        <div
          className="block counter-block mb-4"
          style={{
            backgroundColor: `${color}`,
          }}
        >
          <div className="fade-color">
            <div className="value text-black">{total}</div>

            {profit == true ? (
              <>
                <div className="trending trending-up">
                  <span>{change}%</span>
                  <i className="fa fa-caret-up"></i>
                </div>
              </>
            ) : (
              <>
                <div className="trending trending-down">
                  <span>{change}%</span>
                  <i className="fa fa-caret-down"></i>
                </div>
              </>
            )}
          </div>
          <p className="label text-white">{title}</p>
        </div>
      </div>
    </>
  );
}

export default CartView;
