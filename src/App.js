import React from 'react'
import {BrowserRouter,Routes,Route, Navigate, Link} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'


const App = () => {
  return (
  <BrowserRouter>
  <Link to='/'>Home</Link>  <Link to='/login'>Login</Link>  <Link to='/register'>Register</Link>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='*' element={<Navigate to="/"/>}></Route>
 

  </Routes>
  </BrowserRouter>
    
  )
}

export default App