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
                <div className="hidden md:flex gap-10 items-center">
                    <p className="font-semibold">Explore</p>
                    <p className="font-semibold">Profile</p>
                </div>
                <div className="flex md:hidden">
                <Menu onClick={hanldeopen} className="cursor-pointer" />
                </div>
            </div>
        </nav>
        {isOpen && (
              <div className="flex flex-col md:hidden gap-2 items-center">
              <p className="font-semibold">Explore</p>
              <p className="font-semibold">Profile</p>
          </div>
        )}
    </header>
  )
}

export default NavbarSignedIn