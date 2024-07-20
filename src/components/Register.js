import React, { useState } from 'react'
import { auth } from '../firebase'
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2';
import { FaEyeSlash, FaEye } from 'react-icons/fa';


const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const [inputType, setInputType] = useState('password');

    const togglePasswordVisibility = () => {
        setInputType(inputType === 'password' ? 'text' : 'password');
    };

    const handleRegister = async (e) => {

        e.preventDefault();


        try {
            await auth.createUserWithEmailAndPassword(email, password)
            Swal.fire({
                title: "Good job!",
                text: "email id is registered sucessfully.",
                text: "please login",
                icon: "success"
            });

            navigate("/login")
        }

        catch (error) {
            console.log(error)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
        }
    };



    return (
        <div>
            <div className='bg-gray-300 h-screen flex justify-center items-center'>
                <div className='bg-white w-96 p-6 shadow-2xl rounded-md'>
                    <div>
                        <div className='text-2xl'>
                            <ion-icon name="arrow-back"></ion-icon>
                        </div>
                        <h1 className='text-black font-bold text-3xl '>Find your account</h1>
                    </div>
                    <div className='mt-4'>
                        <form onSubmit={handleRegister}>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} className='mt-4 border-b-2 w-full px-2 py-2 focus:outline-none rounded-md focus:border-b-black' type='email' placeholder='email '></input>
                            <div className='flex justify-between items-center'>
                                <input
                                    type={inputType}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='mt-4 border-b-2 w-full px-2 py-1 focus:outline-none focus:border-b-black'
                                    placeholder='Password'
                                    required
                                />

                                <div className=' flex items-center'>
                                    {inputType== "password"?  (
                                        <FaEyeSlash className='text-2xl mt-4 cursor-pointer' onClick={togglePasswordVisibility} />
                                    ) : (
                                        <FaEye className='text-2xl mt-4 cursor-pointer' onClick={togglePasswordVisibility} />
                                    )}
                                </div>
                            </div>

                            <button className='mt-4 border-2 duration-500 bg-blue-700 text-white font-semibold  hover:bg-transparent hover:text-indigo-700 w-full py-2 rounded-3xl'>Register</button>
                        </form>
                    </div>
                    <div>

                        <h1 className='mt-4  text-center '>Search by email instead</h1>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Register;