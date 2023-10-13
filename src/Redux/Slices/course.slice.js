import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"

import axiosInstance from "../../Helpers/axiosInstance"

const initailState = {
    courseData : [ ] 
}


export const getAllCourses = createAsyncThunk("/course/get" , async(data) => { 
    try {
        const response = axiosInstance.get("/course/") 
        toast.promise(response ,  {
            loading: "Wait Loading Courses....",
            success : (data) => { 
                return data.data.message
            }, 
            error : "Failed to fetch Courses"
        })
        return (await response).data?.course
    } catch (error) {
        toast.error(error.response?.data?.message)
    }

})


const courseSlice = createSlice({
    name :  "courses" , 
    initailState ,
    reducers :{} ,
    extraReducers : (builder) =>  {

    }
})



export default courseSlice.reducer