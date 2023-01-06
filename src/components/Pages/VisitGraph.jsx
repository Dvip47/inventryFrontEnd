import React from "react";

function VisitGraph({ totalVisit, visitTitle }) {
  return (
    <div>
      <div className="block graph-block mb-4">
        <div className="graph-big-text mb-4">
          <p className="graph-label">{visitTitle}</p>
          <h4 className="graph-value">{totalVisit}</h4>
        </div>
        <div className="graph-pills">
          <ul className="nav nav-pills" id="pills-tab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="pills-home-tab"
                data-toggle="pill"
                href="#two-lines-graph"
                role="tab"
                aria-controls="pills-home"
                aria-expanded="true"
              >
                Lines 1
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-profile-tab2"
                data-toggle="pill"
                href="#lines-graph"
                role="tab"
                aria-controls="pills-profile"
                aria-expanded="true"
              >
                Line 2
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-profile-tab3"
                data-toggle="pill"
                href="#colored-line-graph"
                role="tab"
                aria-controls="pills-profile"
                aria-expanded="true"
              >
                C-Line 3
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-profile-tab4"
                data-toggle="pill"
                href="#bar-graph"
                role="tab"
                aria-controls="pills-profile"
                aria-expanded="true"
              >
                Bar 1
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-profile-tab5"
                data-toggle="pill"
                href="#gradient-bar-graph"
                role="tab"
                aria-controls="pills-profile"
                aria-expanded="true"
              >
                C-Bar 2
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <canvas id="filledLineChart" height="100"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisitGraph;
