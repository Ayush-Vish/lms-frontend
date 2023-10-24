import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from "./Slices/auth.slice"
import courseSliceReducer from "./Slices/course.slice" 
import paymentSliceReducer from "./Slices/razorpay.slice"
const store = configureStore({
    reducer  :{
        auth : authSliceReducer, 
        course : courseSliceReducer, 
        payment : paymentSliceReducer
     } ,
    devTools  :true 
}); 

export default store; 
