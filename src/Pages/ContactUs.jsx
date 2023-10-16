import { useState } from "react";

import HomeLayout from "../LAyout/HomeLayout";
import toast from "react-hot-toast";

function ContactUs() {
    const [userInput ,setUserInput] = useState({
        name :"", 
        email : "", 
        message: ""
    }) 
    function handleUserInput(e)  {
        const {name , value} = e.target;
        console.log(name , value) 
        setUserInput({
            ...userInput, 
            [name] : value 

        })
    }  
    async function onFormSubmit(e)  {
      e.preventDefault() 
      if(!userInput.email || !userInput.name || !userInput.message ) 
      {
        toast.error("All Fields are Mandatory")
      } 

    }
  return ( 


    <HomeLayout>
      <div className="flex items-center justify-center h-[100vh] ">
        <form
          noValidate 
          onSubmit={onFormSubmit}
          className="flex flex-col items-center justify-center gap-2 p-5  rounded-md text-white border  w-[22rem]">
          <h1 className="text-3xl font-semibold "> Contact Form</h1>

          <div className="flex flex-col w-full gap-1">
            <label htmlFor="name" className="text-xl font-semibold ">
              Name
            </label>
            <input
              type="text"
              className="bg-transparent border px-2 py-1 rounded-sm "
              id="name"
              name="name"
              placeholder="Enter your name " 
              onChange={handleUserInput} 
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="email" className="text-xl font-semibold ">
              Email
            </label>
            <input
              type="text"
              className="bg-transparent border px-2 py-1 rounded-sm "
              id="email"
              name="email"
              placeholder="Enter your email " 
              onChange={handleUserInput} 
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="message" className="text-xl font-semibold ">
              Message
            </label>
            <input
              type="text"
              className="bg-transparent border px-2 py-1 rounded-sm resize-none "
              id="message"
              name="message"
              placeholder="Enter your message " 
              onChange={handleUserInput} 
            />
          </div> 
          <button type="submit"
                className="w-full bg-yellow-600 hover:bg-yellow-300 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
          >Submit</button>
        </form>
      </div>
    </HomeLayout>
  );
}

export default ContactUs;
