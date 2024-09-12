import { Link } from "react-router-dom"

function Confirmation() {
  return (
    <section className="my-[215px] md:my-[300px] h-full">
        <div className="flex flex-col items-center justify-center ">
            <p className="my-6 font-bold text-2xl text-center  ">a confirmation email was sent to you</p>
            <button className="border-2 border-black/50 py-2 px-6 rounded-lg border-blue-500 bg-blue-500 text-white text-xl font-bold">Resend confirmation</button>
            <Link to='/'><p className="py-4 text-blue-500 text-center text-md font-medium">return to home</p></Link>
        </div>
    </section>
  )
}

export default Confirmation