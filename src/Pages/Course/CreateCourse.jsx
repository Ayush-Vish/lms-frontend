import {useState} from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function CreateCourse() { 
    const dispatch = useDispatch() 
    const navigate = useNavigate( ) 
    const [userInput , setUserInput ] = useState({
        title : "", 
        category : "", 
        description : "", 
        createdBy : "", 
        thumbnail: "",
    }) 

  return  (
    <div className="">
      
    </div>
  )
}

export default CreateCourse;
