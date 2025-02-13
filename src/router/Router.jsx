import {Navigate, Route, Routes} from 'react-router-dom'
import About from './../pages/About'
import Home from './../pages/Home'
import Contact from './../pages/Contact'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Service from '../pages/Service'


const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register'  element={<Register/>}/>
    </Routes>
  )
}

export default Router