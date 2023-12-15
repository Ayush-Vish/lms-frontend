import { useEffect } from "react";
import toast from "react-hot-toast";
import {BiRupee} from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import HomeLayout from "../../LAyout/HomeLayout"
import { getUserData } from "../../Redux/Slices/auth.slice";
import { getRazorpayId, purchaseCourseBundle, verifyUserPayment } from "../../Redux/Slices/razorpay.slice";

function Checkout ( )  {

    const dispatch = useDispatch() ;
    const navigate = useNavigate( )
    const razorpayKey = useSelector(state => state.razorpay.key); 
    const subscription_id = useSelector(state => state.razorpay.subscription_id) 
    const userData = useSelector(state => state.auth.data) ; 
    const isPaymentVerified = useSelector(state=> state.razorpay.isPaymentVerified);

    const paymentDetails  = {
        razorpay_payment_id:"",
        razorpay_subscription_id:"", 
        razorpay_signature: ""
    } 

    async function load ( ) {
        await dispatch(getRazorpayId()) ;
        await dispatch (purchaseCourseBundle());
        

    }

    async function handleSubscription (e) {
        e.preventDefault() ;
        if(!razorpayKey  || !subscription_id) {
            toast.error("Something went Wrong!") 
            return ;
        }
        const options = {
            key:razorpayKey, 
            subscription_id,
            name :"ayush.codes private limited",
            description : "Subscription", 
            theme: {
                color :"#F37254"
            },
            "prefill" : {
                email :userData.email, 
                name : userData.name
            }, 
            handler :async function (response)  {

                paymentDetails.razorpay_payment_id = response.razorpay_payment_id
                paymentDetails.razorpay_signature = response.razorpay_signature
                paymentDetails.razorpay_subscription_id = response.razorpay_subscription_id  
                toast.success("Payment Successful")

                const res= await dispatch(verifyUserPayment(paymentDetails)) ;  
 
                await dispatch(getUserData()) ;
                
                (res.payload.success )?  navigate("/checkout/success")  : navigate("/checkout/fail")
            }
        }
        const paymentObject = new window.Razorpay(options);
        paymentObject.open ( ); 

    }
    useEffect(() => {
        load();

    }, [])
    return ( 
        <HomeLayout>
            <form 
            className="min-h-[90vh] flex items-center justify-center text-white"
            onSubmit={ (e) =>  handleSubscription(e) }
            >
                <div className="w-[330px] h-[26rem] flex flex-col justify-center shadow-[0_0_10px_black] rounded-lg relative "  >

                    <h1 className="bg-yellow-500 absolute top-0 w-full text-center py-4 text-2xl font-bold rounded-tl-lg rounded-tr-lg">Subscription Bundle </h1>
                    <div className="px-4 pace-y-5 text-center">
                        <p className="text-[17px]">
                         This purchase will allow you to access all available Courses  of our platform for {" "} 
                            <br />  
                            
                         <span className="text-yellow-500 font-bold">
                            1 Year Duration
                         </span>
                         <br />
                            All the existing and new launched Courses will be available also.
                        </p>
                        <p className="flex  items-center justify-center gap-1 text-2xl font-bold    text-yellow-500 " >
                            <BiRupee/> 
                            <span>499 Only</span>
                        </p> 
                        <div className="text-gray-200" > 
                            <p>100% refund on cancellation</p> 
                            <p>* Terms and condition applied</p>
                        </div> 
                        <button
                        className="bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 absolute bottom-0 w-full left-0 text-xl font-bold rounded-bl-lg rounded-br-lg py-2  "
                        type="submit" >
                            Buy Now!
                        </button>
                    </div>
                </div>
            </form>
        </HomeLayout>
    )

}


export default Checkout;