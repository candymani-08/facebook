import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import Swal from 'sweetalert2'
import { FaEyeSlash,FaEye } from "react-icons/fa6";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [inputType, setInputType] = useState('password');

    const togglePasswordVisibility = () => {
        setInputType(inputType === 'password' ? 'text' : 'password');
    };
  

  const handleLogin = async (e) => {
   
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      Swal.fire({
        title: "Good job!",
        text: "successfully login",
        icon: "success"
      });
      navigate("/");
    } 
    
    
    catch (error) {
      console.error("Error signing in:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div className='bg-gray-300 h-screen flex justify-center items-center'>
      <div className='bg-white w-96 p-8 shadow-2xl rounded-md'>
        <div className='text-center mx-5'>
          <h1 className='text-blue-700 font-bold text-4xl'>facebook</h1>
          <hr></hr>
          <h1 className='mt-4'>Log in to facebook</h1>
        </div>
        <form >
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='mt-4 border w-full px-2 py-1 focus:outline-none focus:border-b-black'
            placeholder='Email address or Phone number'
            required
          />
          <div className='flex justify-between items-center'>
          <input 
            type={inputType}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='mt-4 border-b-2 w-full px-2 py-1 focus:outline-none focus:border-b-black'
            placeholder='Password'
            required
          /> <div className=' flex items-center'>
          {inputType== "password"?  (
              <FaEyeSlash className='text-2xl mt-4 cursor-pointer' onClick={togglePasswordVisibility} />
          ) : (
              <FaEye className='text-2xl mt-4 cursor-pointer' onClick={togglePasswordVisibility} />
          )}
      </div>
          </div>
          <button
            type='submit'
            onClick={handleLogin}
            className='mt-4 border-2 bg-blue-700 text-white font-semibold hover:bg-transparent hover:text-indigo-700 w-full py-2 rounded-md'
          >
            Log in
          </button>
        </form>
        <Link to='/forget'>
          <h1 className='text-blue-700 mt-3 cursor-pointer text-center'>Forgotten account?</h1>
        </Link>

        <div className='my-3 text-center'>
          <h1>------or------</h1>
        </div>

        <div className='text-center'>
          <Link to='/account'>
            <button className='mt-4 px-5 py-2 border-2 duration-500 bg-green-500 text-white font-semibold rounded-md'>
              Create new account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
