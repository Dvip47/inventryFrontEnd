import { useNavigate } from "react-router";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { constant } from "../Constant/Constant";
import delete_cookie, { setCookie } from "./CookiesLogic";

export function AuthLogic() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState();
  const logout = async () => {
    try {
      const res = await fetch("/api/users/logout", {
        method: "get",
        credentials: "include",
      });
      if (res) {
        delete_cookie(constant.SETCOOKIE);
        toast.success("Logout Successful 😎");
        return navigate("/");
      } else {
        toast.error("Logout failed 😣");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const inputHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const userLogin = async (event) => {
    try {
      event.preventDefault();
      const res = await fetch(constant.LOGIN, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData?.email,
          password: formData?.password,
        }),
      });
      let a = await res.json();

      if (res.status == 201) {
        toast.success("Login Successful 😎");
        setCookie(constant.SETCOOKIE, JSON.stringify(a._id), 30);
        return navigate("/");
      } else {
        toast.error(a.message, "😣");
      }
    } catch (error) {
      toast.error(error);
    }
  };
  return {
    logout,
    inputHandler,
    userLogin,
  };
}
