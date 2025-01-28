import React, { useState,useRef } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)
    
    const email = useRef(null)
    const password = useRef(null)
    

    const handleButtonClick = () => {
    const message = checkValidData(email.current.value,password.current.value)
    setErrorMessage(message)
    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

  return (
    <div>
      <Header />
      <div>
      <img className="object-cover w-full h-full contrast-125 backdrop-blur-sm"
       src="https://img.freepik.com/free-photo/cinema-with-popcorn-box-3d-glasses_23-2148133632.jpg?ga=GA1.1.173568815.1736787702&semt=ais_hybrid"
       alt="netflix background"
       />
    </div>
    <form onSubmit={(e) => e.preventDefault()} className="absolute  w-3/12  h-1/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-black/60  backdrop-blur-sm">
    <h1 className="font-bold text-2xl text-center text-white p-2">{isSignInForm ? "SIGN IN" : "SIGN UP"}</h1>
       {!isSignInForm&&( <input type ="text" placeholder="FullName" 
       className="p-2 m-2 w-full bg-gray-300 placeholder:text-black/50" />)}
        <input ref={email} type ="text" placeholder="Email Address" 
        className="p-2 m-2 w-full bg-gray-300 placeholder:text-black/50" />
        <input ref={password} type ="text" placeholder="Password" 
        className="p-2 m-2 w-full bg-gray-300 placeholder:text-black/50" />
        <p className = "text-red-500 font-bold text-lg py-2 m-2">{errorMessage}</p>
        <button className ="p-2 m-2 w-full contrast-125 bg-red-500 rounded-lg" onClick={handleButtonClick}>
            {isSignInForm ? "SIGN IN" : "SIGN UP"}</button>
         <p className="text-black-600 m-7 mt-1 text-center cursor-pointer" 
         onClick={toggleSignInForm}>{isSignInForm ?"New to Netflix? Sign Up Now" : "Already have an account? Sign In"}</p>
    </form>
        
    </div> 
  )
}

export default Login
