import { createAsyncThunk,createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"

import axiosInstance from "../../Helpers/axiosInstance"
const  initialState = { 
    key:  "" ,
    subscription_id: "",
    isPaymentVerified: false,
    allPayments : "",
    finalMonths : "",
    monthlySalesRecord : ""
}

 
export const getRazorpayId = createAsyncThunk("/razorpay/getId" ,async () => {
    try {
        const response = axiosInstance.get("/payment/razorpay-key")
        return (await response).data
    } catch (error) {
        toast.error("Failed to load Data") ;

    }
})
 
export const purchaseCourseBundle = createAsyncThunk("/razorpay/puchaseCourse" ,async () => {
    try {
        const response = axiosInstance.post("/payment/subscribe")
        return (await response).data
    } catch (error) {
        toast.error(error?.response?.data?.message) ;

    }
})
export const verifyUserPayment = createAsyncThunk("/razorpay/verify" ,async (data) => {
    try {
        const response = axiosInstance.post("/payment/verify" , {
            razorpay_payment_id:data.razorpay_payment_id ,
            razorpay_subscription_id: data.razorpay_subscription_id,
            razorpay_signature: data.razorpay_signature
 
        }) 
        console.log("sbckjsbjkbsdjkbjskdb")
        return (await response).data
    } catch (error) {
        toast.error(error?.response?.data?.message) ;

    }
}) 
export const getPaymentRecord = createAsyncThunk("/razorpay/getRecord" ,async () => {
    try {
        const response = axiosInstance.get("/payment?count=100")
        toast.promise(response ,  {
            loading : "Wait loding records",
            success :"Data fetched SuccessFully", 
            error : "Failed in fetching data"
        }) 
        return (await response).data
    } catch (error) {
        toast.error(error?.response?.data?.message) ;
    }
}) 
export const cancelSubscription = createAsyncThunk("/razorpay/unsubscribe" ,async () => {
    try {
        const response = axiosInstance.post("/payment/unsubscribe")
        toast.promise(response ,  {
            loading : "Unsubscribing......",
            success :"Unsubscribed !", 
            error : "Failed in Unsubscribing"
        }) 
        return (await response).data
    } catch (error) {
        toast.error(error?.response?.data?.message) ;
    }
}) 


const razorpaySlice = createSlice({
    name:"razorpay",
    initialState,
    reducers :{},
    extraReducers : (builder ) => { 
        builder
        .addCase(getRazorpayId.fulfilled ,  (state ,action ) => { 
            state.key=action.payload.key 
        })
        .addCase(purchaseCourseBundle.fulfilled , (state ,action) => {
            state.subscription_id = action.payload.subscription_id;
        })
        .addCase(verifyUserPayment.rejected  ,(state ,action) => {
            toast.success(action.payload.message) ;
            
            state.isPaymentVerified = action.payload.success;
            console.log("false")
        })
        .addCase(verifyUserPayment.fulfilled , (state   ,action )=> {
            console.log(action)
            toast.success(action?.payload?.message) ;
            console.log(action.payload.success)
            state.isPaymentVerified = action?.payload?.success?.toString(); 
            console.log("True ")
            console.log(state);

        })
        .addCase(getPaymentRecord.fulfilled , (state ,action )=> {
            state.allPayments = action.payload.allPayments;
            state.finalMonths = action.payload.finalMonths;
            state.monthlySalesRecord = action.payload.monthlySalesRecord;
            
        })



    }
})


export default razorpaySlice.reducer;