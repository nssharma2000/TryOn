import Navbar from "../../components/Navbar"
import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"
import { Link, useNavigate, useOutletContext } from "react-router"
import "../../styles/BG.css"

function Select()
{

  const { imageSelectionStatus, setImageSelectionStatus, allImages } = useOutletContext()
  const navigate = useNavigate()

 

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <motion.div className="max-w-[90%] lg:max-w-[80%] mt-48 lg:mt-72 mb-24 backdrop-blur-[0.5px] flex flex-col justify-start items-center px-12 py-16 bg-white/60 rounded-2xl border-1 border-gray-200 shadow-lg/10 gap-6"
      initial={{ translateY: "-20%", opacity: 0 }}
      animate={{ translateY: 0, opacity: 1, transition: { duration: 0.8 }}}
      >
        <h1 className="text-3xl text-pink-500 font-semibold">
          Try these on!
        </h1>
        <div className="w-full grid lg:grid-cols-3 grid-rows-auto grid-cols-2 gap-3">
        {
          allImages.current.map((i, index) =>
            <div className={`rounded-xl p-3 flex justify-center items-center border-5 ${imageSelectionStatus[index] ? "border-pink-600" : "border-transparent"} transition-all duration-500`}
            onClick={() => setImageSelectionStatus((prev) => {
              const updatedArray = [ ...prev ]
              const status = updatedArray[index]
              updatedArray[index] = !status
              return updatedArray
            })}
            >
             <img src={i} className="w-[90%] lg:w-[80%]" />
            </div>
          )

        }

        </div>
        <button className={`p-6 disabled:bg-gray-400 flex justify-center items-center bg-pink-600 rounded-lg text-white text-2xl lg:text-3xl transition-all duration-300 font-semibold`}
        disabled={ !imageSelectionStatus.some(i => i) }
        onClick={() => navigate("/try/upload")}
        >
          Proceed
        </button>
      </motion.div>
     
    </div>
  )
}

export default Select