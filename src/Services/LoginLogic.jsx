import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Login() {
  const [cookies, removeCookie] = useCookies(["token"]);
  const logout = async () => {
    try {
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
      console.error(error);
      toast.error("Something went wrong.");
    }
  };

  return {
    logout,
  };
}
