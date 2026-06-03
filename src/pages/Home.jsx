import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import "../styles/BG.css"
import { LucideSparkle, Sparkle, SparkleIcon, Wand } from "lucide-react"
import { motion } from "motion/react"
import { Link } from "react-router"

function Home()
{
  const [hasCardLoaded, setHasCardLoaded] = useState(false)

  useEffect(() => {
    setHasCardLoaded(true)
  }, [])
  
   


  return (
    <div className="mx-auto w-full overflow-hidden">
      <div className="mx-auto w-full flex justify-start items-start">
        <div id="animated-bg" className="w-full h-[200vh] bg-gradient-to-r from-pink-100 via-pink-200 to-pink-50 flex flex-col justify-start items-center gap-6">
          <Navbar />
          <div className={`max-w-[90%] lg:max-w-lg backdrop-blur-[0.5px] flex flex-col lg:flex-row justify-center items-center transform transition-all ${hasCardLoaded ? "translate-y-0 opacity-100" : "-translate-y-30 opacity-0"} duration-800 px-12 py-16 mt-16 bg-white/60 rounded-2xl transition-all transform hover:scale-102 border-1 border-gray-200 shadow-lg/10`}>
            <LucideSparkle className="text-pink-400 font-semibold w-10 h-10 lg:w-20 lg:h-20"/>
            <div className={`p-3 text-[2em] md:text-[3em] text-pink-400 text-center font-semibold`}>
              Experience sophistication with us
            </div>
            
          </div>
          <motion.div 
          className={`max-w-[90%] lg:max-w-lg mt-48 lg:mt-72 backdrop-blur-[0.5px] flex flex-col justify-center items-center px-12 py-16 bg-white/60 rounded-2xl border-1 border-gray-200 shadow-lg/10 gap-6`}
          initial={{ opacity: 0, translateY: "0%" }}
          whileInView={{ opacity: 1, translateY: "25%" }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <div className={`p-3 text-[2em] md:text-[3em] text-pink-400 text-center font-semibold`}>
              Try out your dream product today!
            </div>
            <Link to={"/try"} className="rounded-lg text-white text-xl md:text-2xl flex justify-center items-center bg-pink-500 hover:bg-pink-600 transition-all duration-500 px-8 py-4 font-semibold">
                Try out
            </Link>
            
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Home