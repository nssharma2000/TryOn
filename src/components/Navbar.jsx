import { Hamburger, Menu } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router"
import HamburgerMenu from "./HamburgerMenu"


function Navbar()
{
  const [showElement, setShowElement] = useState(false)
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  const menuRef = useRef(null)
  const menuButtonRef = useRef(null)
 
  const handleClick = (event) => {
    if(menuRef.current && !menuRef.current.contains(event.target) 
      && menuButtonRef.current && !menuButtonRef.current.contains(event.target))
    {
      setIsMenuVisible(false)
    }
    
  }

  useEffect(() => {
    setShowElement(true)
    document.addEventListener("mousedown", handleClick)

    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  }, [])

  return (
    <div className="w-full flex flex-col justify-start items-center">
      <div className={`w-full flex justify-start bg-slate-50/60 backdrop-blur-md sticky top-0 left-0 py-4 px-2 text-[1.5rem] items-center ps-[20%] lg:ps-20 md:gap-[60%] lg:gap-50 gap-[50%]`}>
        <div className="text-[2rem] tracking-wider text-pink-500 font-bold">
          TryOn
        </div>
        <div className={`px-4 hidden lg:flex justify-around items-center gap-6 font-semibold tracking-tighter transform transition-all duration-800 ease-in-out ${showElement ? "opacity-100 translate-x-[0]" : "opacity-0 -translate-x-[-50%]"}`}>
          <div className="p-2 rounded-md hover:text-white hover:bg-pink-500 transition-all duration-500">
            <Link to={"/"}>
              Home
            </Link>
          </div>
          <div className="p-2 rounded-md hover:text-white hover:bg-pink-500 transition-all duration-500"> 
            <Link to={"/sign_in"}>
              Sign In
            </Link>
          </div>
          <div className="p-2 rounded-md hover:text-white hover:bg-pink-500 transition-all duration-500">
            <Link to={"/try"}>
              Try
            </Link>
          </div>
          <div className="p-2 rounded-md hover:text-white hover:bg-pink-500 transition-all duration-500">
            <Link to={"/analytics"}>
              Analytics
            </Link>
          </div>
        </div>
        <button ref={menuButtonRef} className="flex justify-center items-center" onClick={ () => setIsMenuVisible((prev) => !prev) }>
          <Menu className="lg:hidden w-10 h-10 p-1 hover:bg-pink-500 hover:text-white" />
        </button>
      </div>
      <div className="w-full flex justify-end items-start">
      {
        isMenuVisible &&
        <div ref={menuRef}>
          <HamburgerMenu />
        </div>
          
      }
      </div>
    </div>
  )
}

export default Navbar