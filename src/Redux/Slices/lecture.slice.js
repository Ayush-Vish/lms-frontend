import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosInstance from "../../Helpers/axiosInstance";


const initialState=  { 
    lectures:[]
}
export const getCourseLectures = createAsyncThunk("/course/lecture/get" , async (cid) =>  {
    try {
        const response= axiosInstance.get(`/courses/${cid}`) ;
        toast.promise(response ,{
            loading :"Fetching Course Lectures", 
            success :"Course lecture fetched" ,
            error : "Error... " 
        })
        return (await response).data
        
    } catch (error) {
        toast.error(error?.response.data?.message);
    }
})
export const addLecture = createAsyncThunk("/courses/lecture/add" , async (data) => {
    try { 
        const formData= new FormData(data) ;
        formData.append("lecture", data.lecture) ;
        formData.append("title", data.title) ;
        formData.append("decription", data.description) ;


        const response= axiosInstance.post(`/courses/${data.id}`  , formData) ;
        toast.promise(response ,{
            loading :"Adding Lectures", 
            success :"Lecture added Successfully",
            error : "Failed to add Lectures" 
        })
        return (await response).data
        
    } catch (error) {
        toast.error(error?.response.data?.message);
    }
})
export const deleteLecture = createAsyncThunk("/course/lecture/delete" , async (data) => {
    try { 
        

        const response= axiosInstance.delete(`/courses/${data.courseId}/lecture/${data.lectureId}` ) ;
        toast.promise(response ,{
            loading :"Deleting  Course Lectures", 
            success :"Lecture deleted Successfully",
            error : "Failed to delete Lectures" 
        })
        return (await response).data
        
    } catch (error) {
        toast.error(error?.response.data?.message);
    }
})


const lectureSilce = createSlice( { 
        name:"lecture",
        initialState, 
        reducers : {}, 
        extraReducers : ( builder) => {
            builder
            .addCase(getCourseLectures.fulfilled , (state ,action) => { 
                console.log(action) 
                state.lectures = action?.payload?.lectures;
                
            })
            .addCase(addLecture.fulfilled ,(state, action )=> {
                console.log(action) 
                state.lectures = action?.payload?.course?.lecture;

            })
            
        }
})



export default lectureSilce.reducer;