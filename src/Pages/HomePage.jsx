import { Link } from "react-router-dom"

import HomePageImage from "../Assets/Images/homePageMainImage.png"
import HomeLayout from "../LAyout/HomeLayout"
function  HomePage ()  { 
    return (
        <HomeLayout>
            <div className="  flex-col-reverse sm:flex-row lg:flex-row  text-white flex items-center justify-center gap-10 mx-16 h-[90vh]"  >
                <div className="w-1/2 space-y-6 flex items-center flex-col text-center justify-center "  >
                    <h1 className="text-5xl font-semibold " > 
                        Find Out Best <span className="text-yellow-400 font-bold"  >
                            Online Courses
                        </span>
                    </h1>
                    <p  className="text-xl w-[80%] text-gray-200 "  > 
                        We Have a Large Library of Courses taught by highly skilled and qualified faculties at an affordable cost

                    </p>
                    <div className="space-x-3 " >
                        <Link to={"/courses"} >
                            <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-300 transition-all ease-in-out relative" >
                                Explore Courses 
                            </button>
                        </Link>
                        <Link to={"/contact"} >
                            <button className="border border-yellow-500- px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out relative" >
                                Contact  Us 
                            </button>
                        </Link>
                    </div>
                </div>
                <div  className="w-1/2 flex items-center justify-center " >
                    <img src={HomePageImage} alt="homepage image" />
                </div>
            </div>
        </HomeLayout>
    )
}  
export default HomePage