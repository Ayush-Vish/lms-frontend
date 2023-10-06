import {AiFillCloseCircle} from "react-icons/ai"
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

import Footer from "../Components/Footer";
function HomeLayout({ children }) {
  const changeWidth = () => {
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = 0;
  };
  function  hideDrawer () { 
    const ele =  document.getElementsByClassName("drawer-toggle") ;

    ele[0].checked = false ; 
    changeWidth(); 

  }
  return (
    <div className="min-h-[90vh] ">
      <div className="drawer absolute left-0 z-50 w-fit ">
        <input type="text" id="my-drawer" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
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
          <ul className="menu p-4 w-48 sm:w-80 min-h-full bg-base-100 text-base-content relative">
            <li className="w-fit absolute right-2 z-50">
             <button onClick={hideDrawer} >
                <AiFillCloseCircle size={24} />
             </button>
            </li>
            <li>
                <Link to="" > Home </Link>
            </li>
            <li>
                <Link to={"/courses"}>All Courses</Link>
            </li>
            <li>
                <Link  to={"/contact"} >Contact Us</Link>
            </li>
            <li>
                <Link to={"/about"}   >About Us </Link>
            </li>
          </ul>
        </div>
      </div>
      {children} 
      <Footer/>
    </div>
  );
}

export default HomeLayout;
