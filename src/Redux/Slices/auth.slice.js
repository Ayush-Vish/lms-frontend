import { createAsyncThunk, createSlice  } from "@reduxjs/toolkit";
import toast from "react-hot-toast"; 

import axiosInstance from "../../Helpers/axiosInstance"

const initialState  =  {
    isLoggedIn :localStorage.getItem("isLoggedIn") || false , 
    role : localStorage.getItem("role")  || "", 
    data : JSON.parse(localStorage.getItem("data")) || {} 
}
export const createAccount  = createAsyncThunk("/auth/signup" , async( data) => {
    try {
        const res =  axiosInstance.post("user/register" ,data) ;  
        toast.promise(res , {
            loading: "Wait! Creating your account" , 
            success : (data ) =>{  
                
                return data?.data
            }, 
            error : "Failed to create a account" 
        })
        return (await res).data; 

    } catch (e) { 
        toast.error(e?.response?.data?.message) 
    }
})  
export const login  = createAsyncThunk("/auth/login" , async( data) => {
    try {
        const res =  axiosInstance.post("user/login" ,data) ;   
        console.log((await res).data)  

        toast.promise(res , {
            loading: "Wait! Authentication in progress..." , 
            success : (data ) =>{  
                console.log(data)
                return data?.data?.message 
            }, 
            error : "Failed to login " 
        })
        console.log((await res).data)
        return (await res).data; 

    } catch (e) { 
        toast.error(e?.response?.data?.message) 
    }
}) 

export const logout = createAsyncThunk("/auth/logout" ,async (data) =>{ 
    try{
        const response = axiosInstance.get("/user/logout")
         toast.promise(response,  {
            loading : "Wait logging Out", 
            success : (data) => {
                return data?.data?.message
            }, 
            error : "Failed to logout"
         })
        return (await response).data
    }   
    catch(e)  { 
        toast.error(e?.response?.data?.message) 
    }
})

const authSlice = createSlice({
    name : "auth", 
    initialState,
    reducers : {} ,  
    extraReducers: (builder) => { 

        builder
        .addCase(login.fulfilled , (state ,action  ) =>{
            console.log(state)
            localStorage.setItem("data" ,JSON.stringify(action?.payload?.user)); 
            localStorage.setItem("isLoggedIn" ,true ) 
            localStorage.setItem("role" ,action?.payload?.user?.role ) 
            state.isLoggedIn =true 
            state.data =action.payload?.user
            state.role =  action?.payload?.user.role 
            console.log(state)
        })
        .addCase(logout.fulfilled , (state ,action )=>  {
            localStorage.clear() 
            state.isLoggedIn =false 
            state.data =""
            state.role =  ""
        })
    },

})

// export const {}  =authSlice.actions ; 
export default authSlice.reducer ;