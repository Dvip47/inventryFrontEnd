import React from "react";

function MonthReport2({ color, amount, month }) {
  return (
    <div className="col-12 col-sm-6 col-md-4">
      <div className="block counter-block mb-4">
        <div className="row">
          <div className="col-12">
            <h4>₹ {amount}</h4>
            <p className="label">{month}</p>
          </div>
          <div className="col-12">
            <div className="progress mt-2">
              <div
                className="progress-bar"
                aria-valuemax={100}
                aria-valuemin={0}
                aria-valuenow={10}
                role="progressbar"
                style={{ width: "32%", backgroundColor: `${color}` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MonthReport2;
