import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { Link } from "react-router"
import "../styles/BG.css"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

function SignIn()
{
  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyDEzC3zG4lXeZ9LEsFCo01qPjjfXS9q5j8",
      authDomain: "tryon-f7aa8.firebaseapp.com",
      projectId: "tryon-f7aa8",
      storageBucket: "tryon-f7aa8.firebasestorage.app",
      messagingSenderId: "926875419156",
      appId: "1:926875419156:web:e928ab1304ae52fbd81d01",
      measurementId: "G-WZX8K2BDW5"
}


    const app = initializeApp(firebaseConfig);
  }, [])

  const login = async () => {
    const provider = new GoogleAuthProvider()
    const auth = getAuth();

    try 
    {
      const signInResponse = await signInWithPopup(auth, provider)
    
      const user = signInResponse.user;
      localStorage.setItem("user", user.displayName)
      console.log(localStorage.getItem("user"))
    }
    catch(error)
    {
      console.log(error)
    }
  }
  


  return (
    <div className="mx-auto w-full overflow-hidden">
      <div className="mx-auto w-full flex justify-start items-start">
        <div id="animated-bg" className="w-full h-[200vh] bg-gradient-to-r from-pink-100 via-pink-200 to-pink-50 flex flex-col justify-start items-center gap-6">
          <Navbar />
          <motion.div className="max-w-[90%] flex flex-col px-12 py-16 rounded-lg bg-white border-1 border-gray-300 shadow-lg/10 gap-6 justify-around items-center gap-6"
          initial={{
            opacity: 0, 
            translateY: "-20%" }}
          animate={{ opacity: 1, translateY: 0, transition: { duration: 0.5 } }}
          >
            <div className="text-2xl lg:text-4xl text-pink-500 font-semibold">
              Sign In
            </div>
            <button className="p-6 bg-blue-500 rounded-lg text-white text-xl lg:text-2xl hover:bg-blue-600 hover:cursor-pointer shadow-lg/20 transition-colors duration-800 font-semibold"
            onClick={login}
            >
            Sign in with Google

            </button>

          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default SignIn