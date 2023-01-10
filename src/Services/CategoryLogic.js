import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { constant } from "../Constant/Constant";

export default function CategoryLogic() {
  const [post, setPost] = useState();
  const [data, setData] = useState();

  const inputHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };


  const addCategoryFunction = async (e) => {
    e.preventDefault();
    if (!data?.category ) {
      console.log("fill New Category data");
    }
    try {
      axios
        .post(constant.ADD_CATEGORY, {
          // .post("/api/category/addcategory", {
          category: data?.category
        })
        .then((response) => {
          setPost(response?.data);
          toast.success("Category Added 🔥");
        });
    } catch (error) {
      setPost(error);
      toast.error("Failed 🔥");
      console.log(error);
    }
  };

  return {
    addCategoryFunction,
    post,
    setPost,
    inputHandler,
    data,
  };
}
