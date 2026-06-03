import Navbar from "../../components/Navbar"
import { useEffect, useState, useRef } from "react"
import { motion } from "motion/react"
import { Link, Outlet } from "react-router"
import "../../styles/BG.css"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import Select from "../try/Select"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import image5 from "../../assets/image5.png"
import image6 from "../../assets/image6.png"
import image7 from "../../assets/image7.png"
import image8 from "../../assets/image8.png"
import sampleImage from "../../assets/sampleImage.png"


function TryLayout()
{
   const allImages = useRef([
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ])

  const [imageSelectionStatus, setImageSelectionStatus] = useState([false, false, false, false, false, false, false, false])
  const [selectedHumanImage, setSelectedHumanImage] = useState(null)
  const [usingSampleImage, setUsingSampleImage] = useState(false)

  const sampleImageRef = useRef(sampleImage)

  const outletContext = { imageSelectionStatus, setImageSelectionStatus, sampleImageRef, allImages,
    selectedHumanImage, setSelectedHumanImage, usingSampleImage, setUsingSampleImage
   }


  return (
    <div className="mx-auto w-full overflow-hidden">
      <div className="mx-auto w-full flex justify-start items-start">
        <div id="animated-bg" className="w-full bg-gradient-to-r from-pink-100 via-pink-200 to-pink-50 flex flex-col justify-start items-center gap-6">
          <Navbar />
          <div className="w-full flex flex-col justify-start items-center">
            <Outlet context={outletContext}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TryLayout