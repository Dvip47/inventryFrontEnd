import React from "react";

function ItemCategory() {
  return (
    <>
      <div class="container">
        <h2>Select Product Category</h2>
        <p>
          In this example, we have created a .dropdown-submenu class for
          multi-level dropdowns (see style section above).
        </p>
        <p>
          Note that we have added jQuery to open the multi-level dropdown on
          click (see script section below).
        </p>
        <ul class="dropdown">
          <li>
            <a href="#">Category</a>
            <ul>
              <li>
                <a href="">Nice Dropdown Menu</a>
                <ul>
                  <li>
                    <a href="">Submenu - 1</a>
                    <ul>
                      <li>
                        <a href="">Submenu - 1</a>
                      </li>
                      <li>
                        <a href="">Submenu - 2</a>
                      </li>
                      <li>
                        <a href="">Submenu - 3</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="">Submenu - 2</a>
                    <ul>
                      <li>
                        <a href="">Submenu - 1</a>
                      </li>
                      <li>
                        <a href="">Submenu - 2</a>
                      </li>
                      <li>
                        <a href="">Submenu - 3</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Dropdown</a>
                    <ul>
                      <li>
                        <a href="">Submenu - 1</a>
                      </li>
                      <li>
                        <a href="">Submenu - 2</a>
                      </li>
                      <li>
                        <a href="">Submenu - 3</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="">Submenu - 3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">Submenu - 1</a>
                <ul>
                  <li>
                    <a href="">Submenu - 1</a>
                  </li>
                  <li>
                    <a href="">Submenu - 2</a>
                  </li>
                  <li>
                    <a href="#">Dropdown</a>
                    <ul>
                      <li>
                        <a href="">Submenu - 1</a>
                      </li>
                      <li>
                        <a href="">Submenu - 2</a>
                      </li>
                      <li>
                        <a href="">Submenu - 3</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="">Submenu - 3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Dropdown</a>
                <ul>
                  <li>
                    <a href="">Submenu - 1</a>
                  </li>
                  <li>
                    <a href="">Submenu - 2</a>
                  </li>
                  <li>
                    <a href="#">Dropdown</a>
                    <ul>
                      <li>
                        <a href="">Submenu - 1</a>
                      </li>
                      <li>
                        <a href="">Submenu - 2</a>
                      </li>
                      <li>
                        <a href="">Submenu - 3</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="">Submenu - 3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">Submenu - 2</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ItemCategory;
