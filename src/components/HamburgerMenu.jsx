
import { useEffect, useState } from "react"
import { Link } from "react-router"

function HamburgerMenu()
{
    const menuItemStyle = `px-2 py-3 md:px-4 md:py-6 w-full flex justify-center items-center font-semibold text-2xl rounded-md hover:text-white hover:bg-pink-500 transition-all duration-800`


    return (
    <div className="px-3 py-2 absolute right-0 z-999 flex bg-slate-50 flex-col justify-start items-center gap-2">
        <div className={menuItemStyle}>
            <Link to={"/"}>
              Home
            </Link>
        </div>
         <div className={menuItemStyle}>
            <Link to={"/sign_in"}>
              Sign in
            </Link>
        </div>
         <div className={menuItemStyle}>
            <Link to={"/try"}>
              Try
            </Link>
        </div>
         <div className={menuItemStyle}>
            <Link to={"/analytics"}>
              Analytics
            </Link>
        </div>
        
    </div>
    )
    
  
}

export default HamburgerMenu