import { logo } from "../assets/assets"

function Footer() {

    const date = new Date().getFullYear()

  return (
    <footer className="">
        <div className="flex flex-col md:flex-row justify-between mx-4 items-center">
          <div className="flex flex-col md:flex-row items-center my-5 ">
            <img src={logo} alt="logo" className=" w-[100px] mb-1" />
            <p className="font-medium text-md"> &copy;{date}<span className="font-extrabold"> FundWave </span>All right reserved</p>
          </div>
          <div className="flex flex-col gap-2 md:flex-row text-center md:gap-4 font-bold ">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Contact us</p>
          </div>
        </div>
    </footer>
  )
}

export default Footer