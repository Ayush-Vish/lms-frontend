import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from "./Slices/auth.slice"
import courseSliceReducer from "./Slices/course.slice" 
import lectureSliceReducer from "./Slices/lecture.slice"
import razorpaySliceReducer from "./Slices/razorpay.slice" 
import statsSliceReducer from "./Slices/Stats.slice"
const store = configureStore({
    reducer  :{
        auth : authSliceReducer, 
        course : courseSliceReducer, 
        razorpay : razorpaySliceReducer,
        lecture : lectureSliceReducer, 
        stats: statsSliceReducer
     } ,
    devTools  :true 
}); 

export default store; 
