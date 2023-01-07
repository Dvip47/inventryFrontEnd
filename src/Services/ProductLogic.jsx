import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function ProductLogic() {
  const [post, setPost] = useState();
  const [data, setData] = useState();

  const inputHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const addProductFunction = async (e) => {
    e.preventDefault();
    if (
      !data?.name ||
      !data?.category ||
      !data?.brand ||
      !data?.title ||
      !data?.discription ||
      !data?.specification ||
      !data?.price ||
      !data?.sellingprice
    ) {
      console.log("fill all data");
    }
    try {
      axios
        .post("/api/product/addproduct", {
          name: data?.name,
          category: data?.category,
          brand: data?.brand,
          title: data?.title,
          discription: data?.discription,
          specification: data?.specification,
          price: data?.price,
          sellingprice: data?.sellingprice,
        })
        .then((response) => {
          setPost(response.data);
          toast.success("Product Added 🔥");
        });
    } catch (error) {
      setPost(error);
      console.log(error);
    }
  };

  return {
    addProductFunction,
    post,
    setPost,
    inputHandler,
    data,
  };
}
