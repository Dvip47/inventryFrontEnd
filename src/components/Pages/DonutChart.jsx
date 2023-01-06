import React from "react";

function DonutChart({ total }) {
  return (
    <div className="col-12 col-sm-4 col-md-3 col-lg-3">
      <div className="section-title">
        <h4>Donut Chart</h4>
      </div>

      <div className="block chart-block mb-4">
        <div className="doughnut-chart mb-3">
          <div className="inside-doughnut-chart-label">
            <strong>{total}</strong>
            <span>Total Orders</span>
          </div>
          <canvas id="doghnutChart" className="chart"></canvas>
        </div>

        <div className="chart-legends">
          <div className="legend-value-w">
            <div
              className="legend-pin"
              style={{ backgroundColor: "var(--primary-color)" }}
            ></div>
            <div className="legend-value">Processed</div>
          </div>
          <div className="legend-value-w">
            <div
              className="legend-pin"
              style={{ backgroundColor: "var(--success-color)" }}
            ></div>
            <div className="legend-value">Pending</div>
          </div>
          <div className="legend-value-w">
            <div
              className="legend-pin"
              style={{ backgroundColor: "var(--light-color)" }}
            ></div>
            <div className="legend-value">Completed</div>
          </div>
          <div className="legend-value-w">
            <div
              className="legend-pin"
              style={{ backgroundColor: "var(--danger-color)" }}
            ></div>
            <div className="legend-value">Cancelled</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonutChart;
