
import { Route, Routes } from 'react-router-dom'

import RequireAuth from './Components/Auth/RequireAuth'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import CourseDescription from './Pages/Course/CourseDescription'
import CourseList from './Pages/Course/CourseList'
import CreateCourse from './Pages/Course/CreateCourse'
import AddLecture from './Pages/Dashboard/AddLecture'
import AdminDashboard from './Pages/Dashboard/AdminDashboard'
import DisplayLectures from './Pages/Dashboard/DisplayLecture'
import Denied from './Pages/Denied'
import HomePage from './Pages/HomePage'
import Login from './Pages/Login'
import NotFound from './Pages/NotFound'
import Checkout from './Pages/Payment/Checkout'
import CheckoutFail from './Pages/Payment/CheckoutFail'
import CheckoutSuccess from './Pages/Payment/CheckoutSuccess'
import SignUp from './Pages/SignUp'
import EditProfile from './Pages/User/EditProfile'
import Profile from './Pages/User/Profile'
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
           
          <Route path='/admin/dashboard' element={<AdminDashboard/>} />
          <Route path='/course/addlecture' element={<AddLecture/>} />
          <Route path='/course/create' element={<CreateCourse/>} />
        </Route>  
        <Route element={<RequireAuth allowedRole={["ADMIN" ,"USER"]} />} >  

          <Route path='/checkout/success' element={<CheckoutSuccess/>}  /> 
          <Route path='/checkout/fail' element={<CheckoutFail/>}  /> 
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/user/editProfile' element={<EditProfile/>}  />
          <Route path='/user/profile' element={<Profile/>} />
          <Route path='course/displaylecture' element={<DisplayLectures/>} />
        </Route>
        <Route path='*' element={<NotFound/>}  />
      </Routes>
  )
}

export default App
