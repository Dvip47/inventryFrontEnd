import React from "react";
import { NavLink } from "react-router-dom";
import CategoryLogic from "../../../Services/CategoryLogic";

function ItemCategory() {
  const {inputHandler,data,addCategoryFunction}=CategoryLogic()
  
  return (
    <>
      <center>
        <section className="page-container">
          <div className="page-content-wrapper">
            <div className="content sm-gutter mt-3 mb-4">
              <div className="col-md-6 mt-4">
                <div className="block form-block mb-4 mt-5">
                  <div className="block-heading">
                    <h5>Add Category</h5>
                  </div>

                  <form action="#" className="horizontal-form">
                   
                    <div className="form-group">
                      <div className="form-row">
                        <label className="col-md-3">Add Category</label>
                        <div className="col-md-9">
                          <input
                            className="form-control"
                            name="category"
                            placeholder="New Category"
                            type="text"
                            onChange={inputHandler}
                          />
                        </div>
                      </div>
                    </div>
                    <hr />

                    <button
                      className="btn btn-primary mr-3"
                      type="submit"
                       onClick={addCategoryFunction}
                    >
                      Submit
                    </button>
                    <NavLink to="/category" className="btn border" >Cancel</NavLink>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </center>
    </>
  );
}

export default ItemCategory;
