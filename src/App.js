import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import MainPage from "./components/Pages/MainPage";
import LoginPage from "./components/credentials/LoginPage";
import Signup from "./components/credentials/RegisterPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCookies } from "react-cookie";
import ErrorPage from "./components/Pages/ErrorPage";
import ForgotPassword from "./components/credentials/ForgotPassword";
import ChangePassword from "./components/credentials/ChangePassword";
import ItemCategory from "./components/Pages/ProductDetails/ItemCategory";
import UpdateProfile from "./components/credentials/UpdateProfile";
import UserListPage from "./components/Pages/UserListPage";
import VendorListPage from "./components/Pages/VendorListPage";
import AllUserPage from "./components/Pages/AllUserPage";
import AddProduct from "./components/Pages/ProductDetails/AddProduct";
import { constant } from "./Constant/Constant";
import { getCookie } from "./Services/CookiesLogic";
import UserDeatails from "./Services/UserDeatailsLogic";
import VerticalNavbar from "./components/Navbar/VerticalNavbar";
import Topbar from "./components/Navbar/Topbar";
import CategoryList from "./components/Pages/ProductDetails/CategoryList";
function App() {
  const [pages, setPages] = useState(true);
  const navigate = useNavigate();
  const x = getCookie(constant.SETCOOKIE);
  let _x = JSON.parse(x);
  useEffect(() => {
    if (!_x) {
      setPages(false);
      return navigate("/");
    } else {
      setPages(true);
      return navigate("/");
    }
  }, [pages, x]);
  const adminMenu = [
    { menu: "User Management", link: "#" },
    { menu: "Add Product", link: "/addproduct" },
    { menu: "Category", link: "/category" },
  ];
  // console.log(adminMenu)
  const vendorMenu = [
    { menu: "Add Product", link: "/addproduct" },
    { menu: "Category", link: "/category" },
  ];
  const customerMenu = [
    { menu:"My Order",link:"#"},
    { menu:"Wish List",link:"#"},
    { menu:"Gift Card",link:"#"},
    { menu: "Notifications",link:"#"},
   ];
  const { data, UserDetails1 } = UserDeatails();
  useEffect(() => {
    UserDetails1();
  }, []);
  return (
    <div>
      <ToastContainer />
      {!pages ? (
        <>
          <ToastContainer />
          <Routes>
            <Route extact path="/" element={<LoginPage />} />
            <Route extact path="/registation" element={<Signup />} />
            <Route extact path="/forgotpassword" element={<ForgotPassword />} />
            <Route extact path="*" element={<ErrorPage />} />
          </Routes>
        </>
      ) : (
        <>
          <ToastContainer />
          <Topbar />
          {data?.data?.role == "Admin" ? (
            <>
              <VerticalNavbar
                name={data?.data?.fname}
                role={data?.data?.role}
                menu={adminMenu}
                imgUrl={data?.data?.photo}
              />
            </>
          ) : data?.data?.role == "Vendor" ? (
            <>
              <VerticalNavbar
                name={data?.data?.fname}
                role={data?.data?.role}
                menu={vendorMenu}
                imgUrl={data?.data?.photo}
              />
            </>
          ) : (
            <>
              {" "}
              <VerticalNavbar
                name={data?.data?.fname}
                role={data?.data?.role}
                menu={customerMenu}
                imgUrl={data?.data?.photo}
              />
            </>
          )}

          <Routes>
            <Route extact path="/" element={<MainPage />} />
            <Route extact path="/changepassword" element={<ChangePassword />} />
            <Route extact path="/updateprofile" element={<UpdateProfile />} />
            <Route extact path="/addcategory" element={<ItemCategory />} />
            <Route extact path="/alluserlist" element={<AllUserPage />} />
            <Route extact path="/userlist" element={<UserListPage />} />
            <Route extact path="/vendorlist" element={<VendorListPage />} />
            <Route extact path="/category" element={<CategoryList/>} />
            <Route extact path="/addproduct" element={<AddProduct />} />
            <Route extact path="*" element={<ErrorPage />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
