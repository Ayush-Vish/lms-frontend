import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from "./Slices/auth.slice"
import courseSliceReducer from "./Slices/course.slice" 
import razorpaySliceReducer from "./Slices/razorpay.slice"
const store = configureStore({
    reducer  :{
        auth : authSliceReducer, 
        course : courseSliceReducer, 
        razorpay : razorpaySliceReducer
     } ,
    devTools  :true 
}); 

export default store; 
