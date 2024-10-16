import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    password: "",
    email: "",
    confirmPassword: "",
  });

  const HandleData = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value.trim(),
    }));
  };

  const HandleSubmit = () => {
    if (
      userData.name === "" ||
      userData.password === "" ||
      userData.confirmPassword === "" ||
      userData.email === ""
    ) {
      toast.error("fill in the form properly");
    } else {
      if (userData.password === userData.confirmPassword) {
        axios
          .post("/user", userData)
          .then((response) => toast.success(`${response.data.msg}`))
          .catch((error) => toast.error(error.response.data.msg));
      } else {
        toast.error("password do not match");
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r  to-[#0048aa] from-[#1586e2] font-medium">
      <div className="bg-white flex-1 max-w-[500px] rounded-2xl p-10">
        <h1 className="text-center text-2xl mb-2">Signup Form</h1>
        <div className="flex rounded-2xl border my-5 cursor-pointer">
          <div className="flex-1 text-center py-3 bg-gradient-to-r  from-[#0048aa] to-[#1586e2] rounded-2xl text-white">
            Signup
          </div>
          <Link className="flex-1 text-center py-3" to={"/login"}>
            Login
          </Link>
        </div>
        <input
          type="text"
          placeholder="Name"
          className="border rounded-2xl p-3 w-full mt-2 mb-3"
          name="name"
          value={userData.name}
          onChange={(e) => HandleData(e)}
        />
        <input
          type="email"
          placeholder="Email Address"
          className="border rounded-2xl p-3 w-full mt-2 mb-3"
          name="email"
          value={userData.email}
          onChange={(e) => HandleData(e)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border rounded-2xl p-3 w-full mt-2 mb-3"
          name="password"
          value={userData.password}
          onChange={(e) => HandleData(e)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="border rounded-2xl p-3 w-full mt-2 mb-3"
          name="confirmPassword"
          value={userData.confirmPassword}
          onChange={(e) => HandleData(e)}
        />

        <button
          className="active:scale-95 w-full mt-4 flex-1 text-center py-3 bg-gradient-to-r  from-[#0048aa] to-[#1586e2] rounded-2xl text-white"
          onClick={HandleSubmit}
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default Register;
