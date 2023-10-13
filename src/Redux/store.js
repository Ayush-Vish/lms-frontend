import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from "./Slices/auth.slice"
import courseSliceReducer from "./Slices/course.slice"
const store = configureStore({
    reducer  :{
        auth : authSliceReducer, 
        course : courseSliceReducer
     } ,
    devTools  :true 
}); 

export default store; 
