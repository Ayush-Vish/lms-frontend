


import { Route, Routes } from 'react-router-dom'

import Footer from "./Components/Footer"
import HomeLayout from './LAyout/HomeLayout'
import HomePage from './Pages/HomePage'
function App() {

  return (
    <>
      <Routes>
        <Route path='/'  element={<HomePage/>} /> 
        
      </Routes>
    </>
  )
}

export default App
