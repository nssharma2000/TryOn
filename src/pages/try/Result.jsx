import Navbar from "../../components/Navbar"
import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"
import { Link, useNavigate, useOutletContext } from "react-router"
import "../../styles/BG.css"
import html2canvas from "html2canvas"

function Result()
{

  const { selectedHumanImage, usingSampleImage, allImages, imageSelectionStatus } = useOutletContext()
  const navigate = useNavigate()

  const tryOnRef = useRef(null)

  const handleDownload = async () => {
  if (!tryOnRef.current) 
  {
    return
  }

  const canvas = await html2canvas(
    tryOnRef.current,
    {
      scale: 2, 
      useCORS: true
    }
  )

  const image = canvas.toDataURL("image/png")

  const link = document.createElement("a")

  link.href = image
  link.download = "virtual-try-on.png"

  link.click()
}

 

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full flex justify-between items-center px-6">
        <button className="px-6 py-4 flex rounded-md bg-blue-500 text-lg lg:text-xl hover:bg-blue-600 transition-all text-white justify-center items-center duration-500 gap-3"
        onClick={() => navigate("/try/upload") }>
          <div className="text-2xl">
          {"«"}
          </div> 
          Back
        </button>
         <button className="px-6 py-4 flex rounded-md bg-blue-500 text-lg lg:text-xl hover:bg-blue-600 transition-all text-white justify-center items-center duration-500 gap-3"
        onClick={() => navigate("/try") }>
          Try another outfit
        </button>
      </div>
      <motion.div className="max-w-[90%] lg:max-w-[80%] mt-48 lg:mt-24 mb-24 backdrop-blur-[0.5px] flex flex-col justify-start items-center px-12 py-16 bg-white/60 rounded-2xl border-1 border-gray-200 shadow-lg/10 gap-6"
      initial={{ translateY: "-20%", opacity: 0 }}
      animate={{ translateY: 0, opacity: 1, transition: { duration: 0.8 }}}
      >
      <h1 className="text-3xl text-pink-500 font-semibold">
        Result
      </h1>
      <div ref={tryOnRef} className="flex flex-col justify-center items-center">
        <img src={selectedHumanImage} className="w-[30vw]" />
        {
          allImages.current.filter((i, index) => imageSelectionStatus[index])
          .map((image) => 
          <img src={image} className="w-[30vw] h-[25vw] top-[38%] md:top-[28%] lg:top-[26%] absolute z-999" />
          )
        }
      </div>
      </motion.div>
      <button className="p-6 text-2xl mb-10 rounded-lg disabled:bg-gray-400 text-white bg-blue-500 transition-all font-semibold shadow-lg/20 hover:bg-blue-600 duration-300"
      onClick={ async () => await handleDownload() }
      >
        Download
      </button>
     
    </div>
  )
}

export default Result