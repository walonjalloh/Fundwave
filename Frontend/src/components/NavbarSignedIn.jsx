import { useState } from "react";
import { logo } from "../assets/assets"
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";


function NavbarSignedIn() {

    const [isOpen, setIsOpen] = useState(false)

    function hanldeopen() {
        setIsOpen(!isOpen);
    }


  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
        <nav>
            <div className="flex justify-between py-2 items-center mx-4">
                <div>
                    <Link to='/'>
                    <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="hidden md:flex gap-5 items-center">
                    <Link to='/explore_signIn'><p className="font-semibold">Explore</p>
                    </Link>
                    <Link to='/profile'><p className="font-semibold">Profile</p>
                    </Link>
                    <Link to='/dashboard'><p className="font-semibold">Dashboard</p></Link>
                </div>
                <div className="flex md:hidden">
                <Menu onClick={hanldeopen} className="cursor-pointer" />
                </div>
            </div>
        </nav>
        {isOpen && (
              <div className="flex flex-col md:hidden   mx-4 gap-4 pb-4">
              <Link to='/explore'><button className="border-2 border-gray-800 px-4 py-2 text-sm rounded-md w-full">Explore</button></Link>
              <Link to='/profile'><button className="border-2 border-gray-800 px-4 py-2 text-sm rounded-md w-full">Profile</button></Link>
              <Link to='/dashboard'><button className="border-2 border-gray-800 px-4 py-2 text-sm rounded-md w-full">Dashboard</button></Link>
          </div>
        )}
    </header>
  )
}

export default NavbarSignedIn