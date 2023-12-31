import { AiFillCheckCircle } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
import { Link } from "react-router-dom";

import HomeLayout from "../../LAyout/HomeLayout";
function CheckoutFail() {
  return (
    <HomeLayout>
      <div className="min-h-[90vh] flex items-center justify-center text-white ">
        <div className="w-80 h-[26rem] flex flex-col justify-center shadow-[0_0_10px_black] rounded-lg relative ">
          <h1 className="bg-red-500 absolute top-0 w-full text-center py-4 text-2xl font-bold rounded-tl-lg rounded-tr-lg">
            Payment failed{" "}
          </h1>
          <div className="px-4 flex flex-col items-center justify-center space-y-2 ">
            <div className="text-center space-y-2">
                <h2>
                    OOPS ! Your Payment Failed.
                </h2> 
                <p>
                    Please try again later.
                </p>
            </div>
                <RxCrossCircled  className="text-red-500  text-5xl rounded-full"  />
          </div>
          <Link to="/checkout " className="bg-red-500 hover:bg-red-600 transition-all ease-in-out duration-300 absolute bottom-0 w-full py-2 text-xl font-semibold text-center rounded-br-lg rounded-bl-lg ">
            <button>
                Try Again
            </button>
          </Link>
        </div>
      </div>
    </HomeLayout>
  );
}

export default CheckoutFail;
