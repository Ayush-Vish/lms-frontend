import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"

import axiosInstance from "../../Helpers/axiosInstance";

const initialState   = {
    allUserCount  : 0 ,
    subscriberCount : 0 ,

}

export const getStasData  = createAsyncThunk("stats/data" , async ( ) => {
    try {
        const response= axiosInstance.get("/payment/stats/user" )  ;
        toast.promise(response ,{
            loading :"Fetching Stats", 
            success :"Stats fetched" ,
            error : "Error... " 
        })
        return (await response).data
    } catch (error) {
        toast.error(error?.response.data?.message);
    }
})

const statsSlice = createSlice({
    name:  "stats" ,
    initialState ,
    reducers :{} ,
    extraReducers : (builder) => {
        builder.addCase(getStasData.fulfilled , (state , action) => {
            state.allUserCount = action.payload.noOfUser ;
            state.subscriberCount = action.payload.noOfActiveSubsCriptionCount ;
        })

    }
})

export default statsSlice.reducer ;