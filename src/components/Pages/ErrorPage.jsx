import React from "react";
import { NavLink } from "react-router-dom";

function ErrorPage() {
  return (

    <section className="page-container">
    <div className="page-content-wrapper">
      <div className="content sm-gutter mt-3 mb-4">
        <div class="d-flex justify-content-center m-height full-width align-items-center">
          <div class="error-container text-center my-auto">
            <h1 class="error-number mb-2">404</h1>
            <h3 class="mb-4">Sorry but we couldn't find this page</h3>
            <p class="mb-4 text-bg-light">
              This page you are looking for does not exsist{" "}
              <NavLink to="#">Report this?</NavLink>
            </p>
            <NavLink to="/">
              <button class="btn btn-outline-dark rounded">Back to Home</button>
            </NavLink>

            <p class="mt-5 mb-4">
              &copy; All Rights Reserved by
              <NavLink to="/" target="_blank">
                RoundPay
              </NavLink>
            </p>
          </div>
        </div></div></div>
      </section>

  );
}

export default ErrorPage;
