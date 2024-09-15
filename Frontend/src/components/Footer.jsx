import { Link } from "react-router-dom"
import { logo } from "../assets/assets"

function Footer() {

    const date = new Date().getFullYear()

  return (
    <footer className="">
        <div className="flex flex-col md:flex-row justify-between mx-4 items-center">
          <div className="flex flex-col md:flex-row items-center my-5 ">
            <img src={logo} alt="logo" className=" w-[100px] mb-1" />
            <p className="text-md"> &copy;{date}<span className="font-extrabold"> FundWave </span>All right reserved</p>
          </div>
          <div className="flex flex-col gap-2 md:flex-row text-center md:gap-4 font-light ">
            <p>Terms of Service</p>
            <Link to='/policy'><p>Privacy Policy</p></Link>
            <Link to='/contact_us'><p>Contact Us</p></Link>
            <Link to='/about_us'><p>About Us</p></Link>
          </div>
        </div>
    </footer>
  )
}

export default Footer