import HomeLayout from "../LAyout/HomeLayout"

function  HomePage ()  { 
    return (
        <HomeLayout>
            <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]"  >
                <div className="w-1/2 space-y-6"  >
                    <h1 className="text-5xl font-semibold " > 
                        Find Out Best 
                        <span className="text-yellow-400 font-bold"  >
                            Online Courses
                        </span>
                    </h1>
                    <p  className="text-xl text-gray-200 "  > 
                        We Have a Large Library of Courses taught by highly skilled and qualified faculties at an affordable cost

                    </p>

                </div>
            </div>
        </HomeLayout>
    )
}  
export default HomePage