import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const [userData, setUserData] = useState({
    password: "",
    email: "",
  });

  const HandleData = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value.trim(),
    }));
  };

  const HandleSubmit = () => {
    if (userData.password === "" || userData.email === "") {
      toast.error("fill in the form properly");
    } else {
      axios
        .post("/user/login", userData)
        .then((response) => toast.success(`${response.data.msg}`))
        .catch((error) => toast.error(error.response.data.msg));
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r  to-[#0048aa] from-[#1586e2] font-medium">
      <div className="bg-white h-[546px] flex-1 max-w-[500px] rounded-2xl p-10">
        <h1 className="text-center text-2xl mb-2">Login Form</h1>
        <div className="flex rounded-2xl border my-5 cursor-pointer">
          <Link className="flex-1 text-center py-3" to={"/register"}>
            Signup
          </Link>
          <div className="flex-1 text-center py-3 bg-gradient-to-r  from-[#0048aa] to-[#1586e2] rounded-2xl text-white">
            Login
          </div>
        </div>

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

        <button
          className="active:scale-95 w-full mt-4 flex-1 text-center py-3 bg-gradient-to-r  from-[#0048aa] to-[#1586e2] rounded-2xl text-white"
          onClick={HandleSubmit}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
