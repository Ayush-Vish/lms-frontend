import { useState } from "react";
import toast from "react-hot-toast";
import { BsPersonCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import HomeLayout from "../LAyout/HomeLayout";
import { createAccount, login } from "../Redux/Slices/auth.slice";

function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginData, setloginData] = useState({
    email: "",
    password: "",


  })
  function handleUserInput(e) {
    const { name, value } = e.target;
    setloginData({
      ...loginData,
      [name]: value,
    });
  }


  async function loginAccount(e) { 
    console.log(loginData)
    e.preventDefault();
    if (!loginData.email || !loginData.password ) {
      toast.error("Please fill all details");
      return;
    }


    const data=  { 
        email: loginData.email, 
        password : loginData.password
    }
    const response = await dispatch(login(data)); 
    if (response?.payload?.success) {
      navigate("/");  

    }
    setloginData({
      email: "",
      password: "",


    });

  }
 
  return (
    <HomeLayout>
      <div className="flex items-center justify-center h-[100vh]">
        <form
          noValidate
          onSubmit={loginAccount}
          className=" flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black] "
        >
          <h1 className="text-center text-2xl font-bold ">Login Page</h1>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              autoComplete="true"
              type="email"
              id="email"
              required
              name="email"
              placeholder="Enter Your Email"
              className="bg-transparent px-2 py-1 border"
              onChange={handleUserInput}
              value={loginData.email}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input
              autoComplete="true"
              type="password"
              id="password"
              required
              name="password"
              placeholder="Enter Your Password"
              className="bg-transparent px-2 py-1 border" 
              onChange={handleUserInput}
              value={loginData.password} 
            />
          </div>
          <button
            type="submit"
            className="mt-2  bg-yellow-600 hover:bg-yellow-300 transition-all ease-in-out duration-300 rounded-sm font-semibold py-2 text-lg "
          >
            Log In 
          </button>
          <p className="text-center">
            {"Don't have an Account ?"}
            <Link className="link cursor-pointer text-accent" to="/signup">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </HomeLayout>
  );
}

export default Login;
