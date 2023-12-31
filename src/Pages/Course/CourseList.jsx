import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CourseCard from "../../Components/CourseCard";
import HomeLayout from  "../../LAyout/HomeLayout" 
import { getAllCourses } from "../../Redux/Slices/course.slice";
function CourseList ()  {
    const dispatch  = useDispatch() 
    const {courseData} =useSelector((state) => state.course) 
    async function loadCourses() {
         await dispatch(getAllCourses())
    }     

    useEffect(() => {
        loadCourses(); 
    }, []) 



    return (
        <HomeLayout>
            <div className="flex min-h-[90vh] pt-12 pl-20 flex-col gap-10 text-white">
                <h1 className="text-center text-3xl font-semibold mb-5">
                    Explore the Courses made By <span className="font-bold text-yellow-500">
                        Industry Expert
                    </span> 
                </h1>
                <div className="mb-10 flex flex-wrap gap-14 items-center justify-center">
                    {courseData?.map((ele) => {
                        return <CourseCard key={ele._id} data={ele} />
                    })}
                </div>


            </div>
        </HomeLayout>
    )
}


export default CourseList;