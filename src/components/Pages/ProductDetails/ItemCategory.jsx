import React from "react";
import CategoryLogic from "../../../Services/CategoryLogic";

function ItemCategory() {
  const {inputHandler,data,addCategoryFunction}=CategoryLogic()
  
  return (
    <>
      <center>
        <section className="page-container">
          <div className="page-content-wrapper">
            <div className="content sm-gutter mt-3 mb-4">
              <div class="col-md-6 mt-4">
                <div class="block form-block mb-4 mt-5">
                  <div class="block-heading">
                    <h5>Add Category</h5>
                  </div>

                  <form action="#" class="horizontal-form">
                   
                    <div class="form-group">
                      <div class="form-row">
                        <label class="col-md-3">Add Category</label>
                        <div class="col-md-9">
                          <input
                            class="form-control"
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
                      class="btn btn-primary mr-3"
                      type="submit"
                       onClick={addCategoryFunction}
                    >
                      Submit
                    </button>
                    <button class="btn btn-outline-info">Cancel</button>
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
