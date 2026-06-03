import Navbar from "../../components/Navbar"
import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"
import { Link, useNavigate, useOutletContext } from "react-router"
import "../../styles/BG.css"

function Upload()
{

  const { imageSelectionStatus, setImageSelectionStatus, allImages, selectedHumanImage,
    setSelectedHumanImage, sampleImageRef, usingSampleImage, setUsingSampleImage
   } = useOutletContext()
  
  const [imagePreview, setImagePreview] = useState(null) 
  
  const fileInputRef = useRef(null)

  const handleFileChange = (event) => {
    if(event.target.files && event.target.files.length > 0) {
      console.log("Files: ", event.target.files)
      

      const objectURL = URL.createObjectURL(event.target.files[0])
      setImagePreview(objectURL)
      setSelectedHumanImage(objectURL);
      setUsingSampleImage(false)
    }
  };

  const handleFileButtonClick = (event) => {
    if(event.target)
    {
      fileInputRef.current.click()
    }
  }

  const navigate = useNavigate()

  const useSampleImage = () => {
    setUsingSampleImage(true)
    setSelectedHumanImage(sampleImageRef.current)
  }

 

  return (
    <div className="w-full flex flex-col justify-center items-center gap-10">
      <div className="w-full flex justify-start items-center px-10">
        <button className="px-6 py-4 flex rounded-md bg-blue-500 text-xl hover:bg-blue-600 transition-all text-white justify-center items-center duration-500 gap-3"
        onClick={() => navigate("/try") }>
          <div className="text-2xl">
          {"«"}
          </div> 
          Back
        </button>
      </div>
      <motion.div className="max-w-[90%] lg:max-w-[80%] mt-24 backdrop-blur-[0.5px] flex flex-col justify-start items-center px-12 py-16 bg-white/60 rounded-2xl border-1 border-gray-200 shadow-lg/10 gap-6"
      initial={{ translateY: "-20%", opacity: 0 }}
      animate={{ translateY: 0, opacity: 1, transition: { duration: 0.5 }}}
      >
        <h1 className="text-3xl text-pink-500 font-semibold">
          Upload Image
        </h1>
        <div className="w-full flex flex-col justify-start items-center gap-6">
          <input
          type="file"
          files
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept=".jpg,.jpeg,.png,image/jpeg,image/png"
          />
          <button className="p-6 text-2xl rounded-lg text-white bg-blue-500 transition-all font-semibold shadow-lg/20 hover:bg-blue-600 duration-300"
          onClick={handleFileButtonClick}>
            Choose File
          </button>
          {
            (selectedHumanImage && !usingSampleImage) &&
            <div className="flex flex-col p-3 justify-start items-center rounded-lg border-1 border-gray-300 bg-white gap-4">
              <h1 className="text-xl font-semibold">
                Preview
              </h1>
              <img src={imagePreview} />
            </div>
          }        
        </div>
      </motion.div>
      <div className="text-3xl p-6 text-pink-400 font-semibold">
        OR
      </div>
      <motion.div className="max-w-[90%] lg:max-w-[80%] backdrop-blur-[0.5px] flex flex-col justify-start items-center px-12 py-16 bg-white/60 rounded-2xl border-1 border-gray-200 shadow-lg/10 gap-6"
      initial={{ translateY: "-20%", opacity: 0 }}
      animate={{ translateY: 0, opacity: 1, transition: { duration: 0.5 }}}
      >
      <button className="p-6 text-2xl rounded-lg text-white bg-blue-500 transition-all font-semibold shadow-lg/20 hover:bg-blue-600 duration-300"
      onClick={useSampleImage}>
        Use sample Image
      </button>
      <img src={sampleImageRef.current} />

      </motion.div>
      <button className="p-6 text-2xl mb-10 rounded-lg disabled:bg-gray-400 text-white bg-blue-500 transition-all font-semibold shadow-lg/20 hover:bg-blue-600 duration-300"
      onClick={() => navigate("/try/result")}
      disabled={ !selectedHumanImage }
      >
        Proceed
      </button>
    </div>
  )
}

export default Upload