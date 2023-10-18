


import { Route, Routes } from 'react-router-dom'

import RequireAuth from './Components/Auth/RequireAuth'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import CourseDescription from './Pages/Course/CourseDescription'
import CourseList from './Pages/Course/CourseList'
import CreateCourse from './Pages/Course/CreateCourse'
import Denied from './Pages/Denied'
import HomePage from './Pages/HomePage'
import Login from './Pages/Login'
import NotFound from './Pages/NotFound'
import SignUp from './Pages/SignUp'
function App() {

  return (
      <Routes>
        <Route path='/'  element={<HomePage/>} /> 
        <Route path='/about'  element={<AboutUs/>} />
        <Route  path="/signup" element={<SignUp/>} /> 
        <Route path='/login' element={<Login/>} ></Route> 
        <Route path='/courses' element={<CourseList/>} ></Route> 
        <Route path='/contact' element={<ContactUs/>} /> 
        <Route path='/denied' element={<Denied/>} />  
        <Route  path='/course/description' element={<CourseDescription/>} />  
        <Route element={<RequireAuth allowedRole={["ADMIN"]} />} >
          <Route path='course/create' element={<CreateCourse/>} />
        </Route> 
        <Route path='*' element={<NotFound/>}  />
      </Routes>
  )
}

export default App
