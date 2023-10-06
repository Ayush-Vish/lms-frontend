import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from "./Slices/auth.slice"
const store = configureStore({
    reducer  :{
        auth : authSliceReducer
     } ,
    devTools  :true 
}); 

export default store; 
