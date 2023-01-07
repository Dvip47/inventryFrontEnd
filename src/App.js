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
          {" "}
          <ToastContainer />
          <Routes>
            <Route extact path="/" element={<MainPage />} />
            <Route extact path="/changepassword" element={<ChangePassword />} />
            <Route extact path="/updateprofile" element={<UpdateProfile />} />
            <Route extact path="/category" element={<ItemCategory />} />
            <Route extact path="/alluserlist" element={<AllUserPage />} />
            <Route extact path="/userlist" element={<UserListPage />} />
            <Route extact path="/vendorlist" element={<VendorListPage />} />
            <Route extact path="/addproduct" element={<AddProduct />} />
            <Route extact path="*" element={<ErrorPage />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
