import React, { useEffect, useState } from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import Products from "./Products";
import { Redirect } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const correctUsername = "kminchelle";
  const correctPassword = "0lelplR";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dataInput, setDataInput] = useState("");
  const [tokLog, settokLog] = useState("");
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  const users = [{ username: "kminchelle", password: "0lelplR" }];

  const handleChange = (event) => {
    debugger;
    // setUsername(event.target.value);
    setUsername(event.target.value);
    console.log("value is:", event.target.value);
  };

  const handleChangePass = (event) => {
    debugger;
    // setPassword(event.target.value);
    setPassword(event.target.value);
    console.log("value is:", event.target.value);
  };

  const url = "https://dummyjson.com/auth/login";
  const [data, setData] = useState([]);
  // const fetchInfo = async () => {
  const submitThis = async () => {
    debugger;
    if ((username !== correctUsername) && password !== correctPassword) {
      alert("Invalid credentials");
      return;
    } else {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "kminchelle",
          password: "0lelplR",
        }),
      });
      const data1 = await response.json();
      console.log(data1, "login result");
      let token = data1.token;
      settokLog(token);
      console.log(tokLog, "dataafterset");
      navigate("./products", { state: token });
    }
  };

  console.log("url :>> ", url);

  return (
    <div className="w-full max-w-sm ">
      <div className="d-flex justify-content-center align-items-center vh-100 vw-100"></div>
      {/* <div className="w-full max-w-xs content-center "> */}

      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        action=""
        onSubmit={submitThis}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
            autoComplete="on"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            autoComplete="on"
            placeholder="******************"
            value={password}
            onChange={handleChangePass}
            // onChange={(e) => setPassword("0lelplR")} //used to set password automatically
          />
          <p className="text-red-500 text-xs italic">
            Please choose a password.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={submitThis}
            // onClick={redirects}
          >
            Login In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  );
};

export default Login;
