import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const CarDetail = () => {
  const { id } = useParams();

  const [current, setcurrent] = useState({});

  useEffect(() => {
    axios
      .get(`/product/${id}`)
      .then((res) => setcurrent(res.data))
      .catch((error) => toast.error(error.response.data.msg));
    return () => {};
  }, [current]);

  return (
    <div className="flex-1 bg-white rounded-2xl mt-20 px-4">
      <img src={current.img} alt="images" className="w-[50%] mx-auto" />
      <div className="ml-20">
        <h1 className="font-medium text-2xl">{current.model}</h1>
        <p>{current.type}</p>
        <small>{current.highlight}</small>
        <Link to={"/form"}  className="w-fit block bg-[#0048aa] text-white px-8 rounded-md py-2" >Order</Link>
      </div>
    </div>
  );
};

export default CarDetail;
