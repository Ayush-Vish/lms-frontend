import { useState } from "react";
import toast from "react-hot-toast";
import { BsPersonCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import HomeLayout from "../LAyout/HomeLayout";
import { createAccount } from "../Redux/Slices/auth.slice";

function SignUp() {
  const [previewImage, setPreviewImage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signUpData, setSignUpData] = useState({
    fullName: "",
    email: "",
    password: "",
    avatar: "",
    confirmpassword : ""
  });
  function handleUserInput(e) {
    const { name, value } = e.target;
    setSignUpData({
      ...signUpData,
      [name]: value,
    });
  }
  function getImage(e) {
    e.preventDefault(); 


    const uploadImage = e.target.files[0];
    if (uploadImage) {
      setSignUpData({
        ...signUpData,
        avatar: uploadImage,
      });
      const fileReader = new FileReader();
      fileReader.readAsDataURL(uploadImage);
      fileReader.addEventListener("load", function () {
        setPreviewImage(this.result);
      });
    }
  }

  async function createNewAccount(e) { 
    e.preventDefault();
    if (!signUpData.email || !signUpData.password || !signUpData.fullName || !signUpData.confirmpassword) {
      toast.error("Please fill all details");
      return;
    }
    if(signUpData.confirmpassword !==  signUpData.password)   { 
        toast.error("Password does not matches")
        return ; 

    }
    const formData = new FormData();
    formData.append("name", signUpData.fullName);
    formData.append("email", signUpData.email);
    formData.append("password", signUpData.password);
    formData.append("avatar", signUpData.avatar);
    formData.append("confirmpassword" , signUpData.confirmpassword)
    const response = await dispatch(createAccount(formData)); 
    if (response?.payload?.success) {
      navigate("/login");  

    }
    setSignUpData({
      fullName: "",
      email: "",
      password: "",
      avatar: "", 
      confirmpassword : "" 
    });
    setPreviewImage("");
  }
 
  return (
    <HomeLayout>
      <div className="flex items-center justify-center h-[100vh]">
        <form
          noValidate
          onSubmit={createNewAccount}
          className=" flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black] "
        >
          <h1 className="text-center text-2xl font-bold ">Registration Page</h1>
          <label htmlFor="image_uploads">
            {previewImage ? (
              <img
                src={previewImage}
                className="w-24 h-24 rounded-full m-auto"
              />
            ) : (
              <BsPersonCircle className="w-24 h-24 rounded-full m-auto" />
            )}
          </label>
          <input
            onChange={getImage}
            className="hidden"
            type="file"
            id="image_uploads"
            name="image_uploads" 

          />
          <div className="flex flex-col gap-1">
            <label htmlFor="fullName">FullName</label>
            <input
              autoComplete="true"
              type="text"
              id="fullName"
              required
              name="fullName"
              placeholder="Enter Your fullname"
              className="bg-transparent px-2 py-1 border"
              onChange={handleUserInput}
              value={signUpData.fullName}
            />
          </div>
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
              value={signUpData.email}
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
              value={signUpData.password} 
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              autoComplete="true"
              type="password"
              id="confirmpassword"
              required
              name="confirmpassword"
              placeholder="Confirm Your Password "
              className="bg-transparent px-2 py-1 border" 
              onChange={handleUserInput}
              value={signUpData.confirmpassword}
            />
          </div>

          <button
            type="submit"
            className="mt-2  bg-yellow-600 hover:bg-yellow-300 transition-all ease-in-out duration-300 rounded-sm font-semibold py-2 text-lg "
          >
            Create Account
          </button>
          <p className="text-center">
            Already have an Account ?{" "}
            <Link className="link cursor-pointer text-accent" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </HomeLayout>
  );
}

export default SignUp;
