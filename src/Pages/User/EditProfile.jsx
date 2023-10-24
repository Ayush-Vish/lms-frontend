import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import HomeLayout from "../../LAyout/HomeLayout";
import { editProfile, getUserData } from "../../Redux/Slices/auth.slice";

function EditProfile ( ) { 
    const dispatch = useDispatch( );
    const navigate= useNavigate()
    const [data  ,setData] = useState( { 
        previewImage:"",
        fullName : "", 
        avatar : undefined, 
        userId:useSelector(state => state?.auth?.data?._id), 

    })
    function handleImageUpload ( e)  {
        e.preventDefault(); 
        const uploadedImage= e.target.files[0];
        if(uploadedImage) { 
            const fileReader= new FileReader() 
            fileReader.readAsDataURL(uploadedImage); 
            fileReader.addEventListener("load", function ( ) { 
                setData({
                    ...data , 
                    previewImage : this.result,
                    avatar : uploadedImage
                })
            } )

        }

         
    } 
    function handleUserInput(e  )  {
        const {name, value } = e.target; 
        setData({
            ...data ,
            [name] :value
        })
         
    } 
    async function onFormSubmit(e) {
        e.preventDefault(); 
        if(!data.fullName || !data.avatar ) { 
            toast.error("Please Fill All fields"); 
            return ;
        } 
        const formData= new FormData();
        formData.append("name",  data.fullName); 
        formData.append("avatar" , data.avatar) ;
        await dispatch(editProfile(formData));  
        await dispatch(getUserData());
        navigate("/user/profile");

        


    }
    return ( 
        <HomeLayout>
            <div className="flex items-center justify-center h-[100vh]" > 
                <form onSubmit={onFormSubmit} 
                    className="flex flex-col justify-center gap-5 rounded-lg p-4 text-white w-80 min-h-[26rem] shadow-[0_0_10px_black] "
                >
                    <h1 className="text-center text-2xl font-semibold " > Edit Profile</h1> 
                    <label className=" cursor-pointer  " htmlFor="image_uploads">
                        {data.previewImage ? (
                            <img className="w-28 h-28 rounded-full m-auto " src={data.previewImage}  />
                        ):(
                            <BsPersonCircle  className="w-28 h-28 rounded-full m-auto " />
                        )}
                    </label> 
                    <input
                    onChange={handleImageUpload}
                    className="hidden"
                    type="file" 
                    name="image_uploads"
                    accept=".jpg, .png, .svg, .jpeg"
                    id="image_uploads" 
                    /> 
                    <div className="flex flex-col gap-1"> 
                            <label
                            className="text-lg font-semibold "
                            htmlFor="fullName">
                                Full Name
                            </label> 
                            <input 
                                onChange={handleUserInput}
                                className="bg-transparent px-2 py-1 border "
                                required
                                type="text" 
                                name="fullName"
                                id="fullName" 
                                placeholder="Enter Your Name"
                                value={data.fullName}
                            />

                    </div> 
                    <button className="w-full bg-yellow-600 hover:bg-500 transition-all ease-in-out duration-300 rounded-md py-2 text-lg cursor-pointer">
                        Update Profile
                    </button> 
                    <Link to="/user/profile" >   
                            <p className="link text-accent cursor-pointer flex items-center justify-center w-full gap-2">
                                <AiOutlineArrowLeft/> Go back to my profile
                            </p>
                            
                    </Link>
                </form>

            </div>
        </HomeLayout>
    )


}


export default EditProfile;