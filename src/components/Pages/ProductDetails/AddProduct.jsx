import React, { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import CategoryLogic from "../../../Services/CategoryLogic";
import ProductLogic from "../../../Services/ProductLogic";

function AddProduct() {
  const { data, inputHandler, addProductFunction } = ProductLogic();
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const { category, getCategoryFunction } = CategoryLogic();
  useEffect(() => {
    getCategoryFunction();
  });
  //   console.log(data);
  return (
    <center>
      <section className="page-container">
        <div className="page-content-wrapper">
          <div className="content sm-gutter mt-3 mb-4">
            <div class="col-md-6 mt-4">
              <div class="block form-block mb-4 mt-5">
                <div class="block-heading">
                  <h5>Add Product</h5>
                </div>

                <form action="#" class="horizontal-form">
                  <div class="form-group">
                    <div class="form-row">
                      <label class="col-md-3">Name</label>
                      <div class="col-md-9">
                        <input
                          class="form-control"
                          placeholder="Product Name"
                          type="text"
                          name="name"
                          onChange={inputHandler}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-row">
                      <label class="col-md-3">Category</label>
                      <div class="col-md-9">
                        <select
                          class="custom-select form-control"
                          name="category"
                          onChange={inputHandler}
                        >
                          <option selected>Select Category</option>
                          {category?.map((data, index) => {
                            return (
                              <>
                                <option value={data?.category}>
                                  {data?.category}
                                </option>
                              </>
                            );
                          })}
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-row">
                      <label class="col-md-3">Brand</label>
                      <div class="col-md-9">
                        <input
                          class="form-control"
                          name="brand"
                          placeholder="Brand"
                          type="text"
                          onChange={inputHandler}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-row">
                      <label class="col-md-3">Title</label>
                      <div class="col-md-9">
                        <input
                          class="form-control"
                          placeholder="Product Title"
                          type="text"
                          name="title"
                          onChange={inputHandler}
                        />
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-row">
                      <label class="col-md-3">Discription</label>
                      <div class="col-md-9">
                        <textarea
                          class="form-control"
                          rows="2"
                          name="discription"
                          onChange={inputHandler}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-row">
                      <label class="col-md-3">Specification</label>
                      <div class="col-md-9">
                        <textarea
                          class="form-control"
                          rows="2"
                          name="specification"
                          onChange={inputHandler}
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-row">
                      <label class="col-md-3">Price</label>
                      <div class="col-md-9">
                        <input
                          class="form-control"
                          placeholder="Product Price"
                          type="Number"
                          name="price"
                          onChange={inputHandler}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-row">
                      <label class="col-md-3">Selling Price</label>
                      <div class="col-md-9">
                        <input
                          class="form-control"
                          placeholder="Selling Price"
                          type="Number"
                          name="sellingprice"
                          onChange={inputHandler}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-row">
                      <label class="col-md-3">Upload Image</label>
                      <div class="col-md-9">
                        <input type="file" id="myFile" name="filename" />
                      </div>
                    </div>
                  </div>
                  {/* <div {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <>
                  <div class="col-md-12">
                    <div class="block form-block mb-4">
                      <div>
                        <form class="dropzone rounded" id="my-awesome-dropzone">
                          <div class="dz-message">
                            <div>
                              <h4>Drop files here or click to upload.</h4>
                              <div class="text-muted">
                                (Choose Product Images)
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div> */}
                  <hr />

                  <button
                    class="btn btn-primary mr-3"
                    type="submit"
                    onClick={addProductFunction}
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
  );
}

export default AddProduct;
