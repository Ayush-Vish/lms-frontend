import {AiFillCloseCircle} from "react-icons/ai"
import { FiMenu } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import Footer from "../Components/Footer";
import { logout } from "../Redux/Slices/auth.slice";
function HomeLayout({ children }) {
  
  const dispatch  = useDispatch() 


  const navigate = useNavigate() 
  // for checking if user is loggedIn 
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn  ) 

  // for displaying the options according  to  the role
  const role = useSelector((state) =>  state?.auth?.role); 
  

  const changeWidth = () => {
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = "auto";
  };
  function  hideDrawer () { 
    const ele =  document.getElementsByClassName("drawer-toggle") ;

    ele[0].checked = false ; 
    // changeWidth(); 
  }
  async function handleLogout (e)  {
    e.preventDefault()
    const res= await dispatch(logout()) 
    if(res.payload.success)  { 
      navigate("/") 
    }
    
  }
  return (
    <div className="min-h-[90vh] bg-[#1F2937]    ">
      
      {/* This is the sidebar  */}
      <div className="drawer absolute left-0 z-50 w-fit ">
        <input type="checkbox" id="my-drawer" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label htmlFor="my-drawer" className="cursor-pointer relative ">
            <FiMenu
              onClick={changeWidth}
              size={"32px"}
              className="font-bold text-white m-4"
            />
          </label>
        </div>
        <div className="drawer-side w-0">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-48 sm:w-80 h-[100%]  bg-base-100 text-base-content relative">
            <li className="w-fit absolute right-2 z-50">
             <button onClick={hideDrawer} >
                <AiFillCloseCircle size={24} />
             </button>
            </li>
            <li>
                <Link to="/" > Home </Link>
            </li>
           
            {
              isLoggedIn && role== "ADMIN" && (
                <li>
                  <Link to="/admin/dashboard" >
                    Admin Dashboard 
                  </Link>
                </li>
              )
            }
            {
              isLoggedIn && role== "ADMIN" && (
                <li>
                  <Link to="/course/create" >
                    Create new Course 
                  </Link>
                </li>
              )
            }
            <li>
                <Link to={"/courses"}>All Courses</Link>
            </li>
            <li>
                <Link  to={"/contact"} >Contact Us</Link>
            </li>
            <li>
                <Link to={"/about"}   >About Us </Link>
            </li>
              {
                !isLoggedIn && (
                  <li className="absolute bottom-4  w-[90%]"  >
                    <div className="w-full items-center justify-center flex "  > 
                        <button className="btn-primary px-4 py-1 font-semibold rounded-md w-full">
                            <Link to="/login">Login</Link>
                        </button>
                        <button className="btn-secondary px-4 py-1 font-semibold rounded-md w-full">
                            <Link to="/signup">SignUp</Link>
                        </button>
                        

                    </div>
                  </li>
                )
              }
              {
                isLoggedIn && (
                  <li className="absolute bottom-4  w-[90%]"  >
                    <div className="w-full items-center justify-center flex "  > 
                        <button className="btn-primary px-4 py-1 font-semibold rounded-md w-full">
                            <Link to="/user/profile">Profile</Link>
                        </button>
                        <button className="btn-secondary px-4 py-1 font-semibold rounded-md w-full">
                            <Link  onClick={handleLogout} >Logout</Link>
                        </button>
                        

                    </div>
                  </li>
                )
              }
          </ul>
        </div>
      </div>
      {/* This is the  children props we are passing  */}
      {children} 
      {/* This is the footer  */}
      <Footer/>
    </div>
  );
}

export default HomeLayout;
