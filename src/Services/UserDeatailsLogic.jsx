import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

export default function UserDeatails() {
  const [data, setData] = useState();

  const [allUser, setAllUser] = useState([]);

  const [state, setState] = useState(false);

  const [filteredData, setFilteredData] = useState();

  const [filteredData1, setFilteredData1] = useState();

  const [customerData, setCustomerData] = useState();

  const [type, setType] = useState({ role: "NA" });

  const inputHandler = (e) => {
    setType({ ...type, [e.target.name]: e.target.value });
  };

  const AllUserFunction = async () => {
    try {
      const res = await fetch("/api/users/alluser", {
        method: "get",
        credentials: "include",
      });
      if (res) {
        let responce = await res.json();
        setAllUser(responce?.data);
      } else {
        toast.error("API called failed");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const handleSearchAdmin = () => {
    const type1 = Object.values(type);
    let result = [];
    if (type1 != "NA") {
      result = allUser.filter((data) => {
        return data?.role == type1;
      });
      setFilteredData(result);
    } else {
      setFilteredData(allUser);
    }
  };
  const handleSearchVendor = () => {
    const type1 = Object.values(type);
    let result = [];
    if (type1 != "NA") {
      result = allUser.filter((data) => {
        return data?.role == type1;
      });
      setFilteredData1(result);
    } else {
      setFilteredData(customerData);
    }
  };

  const AllCustomerFunction = async () => {
    // if(role1=="Customer")
    try {
      const res = await fetch("/api/users/allCustomer", {
        method: "get",
        credentials: "include",
      });
      if (res) {
        let responce = await res.json();
        setCustomerData(responce?.data);
      } else {
        toast.error("API called failed");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const UserDetails1 = async () => {
    try {
      const res = await fetch("/api/users/getuser", {
        method: "get",
        credentials: "include",
      });
      let responce = await res.json();
      setData(responce);
    } catch (error) {
      toast.error(error);
    }
  };
  return {
    AllUserFunction,
    handleSearchAdmin,
    handleSearchVendor,
    AllCustomerFunction,
    inputHandler,
    customerData,
    filteredData1,
    setCustomerData,
    setFilteredData,
    allUser,
    setAllUser,
    filteredData,
    allUser,
    setAllUser,
    state,
    setState,
    setData,
    data,
    UserDetails1,
  };
}
