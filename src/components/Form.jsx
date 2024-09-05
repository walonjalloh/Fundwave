import { g2_logo, f_logo } from "../assets/assets";

function Form() {
  return (
    <div className="flex flex-col items-center  my-10 mx-4">
        <div className="my-5 flex flex-col items-center">
            <p className="text-center text-4xl font-bold">Create your account</p>
            <p className="text-center font-medium text-blue-900">or sign in to an existing account</p>
        </div>
        <form className="flex flex-col items-center  justify-center p-6 w-full"> 
            <div className="flex flex-col  mb-5">
                <p className="text-3xl font-semibold mb-2">Sign Up</p>
                <p className="font-medium text-md text-black/70">Enter your details to create your account</p>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col ">
                    <label htmlFor="first_name" className="font-bold text-xl">First Name</label>
                    <input type="text" name="first_name" placeholder="First Name" className="border-2 border-black md:w-[400px]  px-2 py-2 rounded-md" />
                </div>
                <div className="flex flex-col ">
                    <label htmlFor="last_name" className="font-bold text-xl">Last Name</label>
                    <input type="text" name="last_name" placeholder="Last Name" className="border-2 border-black  px-2 py-2 rounded-md"/>
                </div>
            </div>
            <div className="flex flex-col mt-5">
                <label htmlFor="email" className="font-bold text-xl">Email</label>
                <input type="email" name="email" placeholder="Email" className="border-2 border-black px-2 py-2 md:w-[400px] rounded-md"/>
            </div>
            <div className="flex flex-col mt-5">
                <label htmlFor="password" className="font-bold text-xl">Password</label>
                <input type="password" name="password" placeholder="Password" className="border-2 border-black px-2 md:w-[400px] py-2 rounded-md" />
            </div>
            <div className="flex flex-col mt-5">
                <label htmlFor="confirm_password" className="font-bold text-xl">Confirm Password</label>
                <input type="password" name="confirm_password" placeholder="Confirm Password" className="border-2 border-black px-2 py-2 md:w-[400px] rounded-md" />
            </div>
            <div className="flex flex-col mt-5">
                <label htmlFor="country" className="font-bold text-xl">Country</label>
                <input type="text" placeholder="Select your country" className="border-2 border-black px-2 py-2 md:w-[400px] rounded-md" />
            </div>
            <div className="flex flex-col items-center mt-10">
                <p className="font-bold text-xl text-center">Or continue with</p>
                <div className="flex flex-col md:flex-row gap-5 my-5">
                    <div className="border-2 border-black/50 rounded-md flex items-center gap-2 px-4 py-2">
                        <img src={g2_logo} alt="google" className="h-10 w-10" />
                        <p className="font-bold">Google</p>
                    </div>
                    <div className="border-2 border-black/50 rounded-md flex items-center gap-2 px-4 py-2">
                        <img src={f_logo} alt="facebook" className="h-10 w-10" />
                        <p className="font-bold">Facebook</p>
                    </div>
                </div>
            </div>
            <button className="border-2 border-blue-600 text-xl font-bold text-white py-2 rounded-md bg-blue-600  md:px-6  mt-2">
                Sign Up
            </button>
        </form>
    </div>
  );
}

export default Form;
