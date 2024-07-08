import { useState } from 'react'
import './App.css'
import SignUp from './SignUp'
import PhoneNumber from './pages/PhoneNumber'
import Otp from './pages/Otp'
import LandingPage from './pages/LandingPage'
import Vendor from './pages/Vendor'
import User from './User'
import ShoppingBag from './pages/ShoppingBag'
function App() {
  const [count, setCount] = useState(0)

  return (
      <div className=' w-mwidth h-mheight flex-col justify-center'>
      <PhoneNumber/>
      <Otp/>
      <SignUp/>
      <User/>
      <LandingPage/> 
      {/* <Vendor/> */}
      <ShoppingBag/>
      </div>
  )
}

export default App
