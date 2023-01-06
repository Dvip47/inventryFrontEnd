import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const LogoutLogic = async () => {
  try {
    const [cookies, removeCookie] = useCookies(["token"]);
    console.log("123");
    const res = await fetch("/api/users/logout", {
      method: "get",
      credentials: "include",
    });
    if (res) {
      removeCookie("token");
      toast.success("Logout Successful 😎");
    } else {
      toast.error("Logout failed 😣");
    }
  } catch (error) {
    toast.error(error);
  }
};
