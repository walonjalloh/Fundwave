import { Link } from 'react-router-dom'
import { Shield } from 'lucide-react'
import {Menu} from 'lucide-react'
import { useState } from 'react'
import Modal from './Modal'
import SignIn from './SignIn'
import logo from '../assets/logo.png'


function Navbar2(){

    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [modalContent, setModalContent] = useState(null); // To toggle between SignIn and Form



    function hanldeOpen(){
        setIsOpen(!isOpen)
    }

    function handleModalClose() {
      setIsModalOpen(false); 
  }

  function handleLoginModalOpen() {
    setModalContent(<SignIn />); // Show SignIn component
    setIsModalOpen(true); 
}

    return(
        <header className='sticky top-0 z-50'>
        <div className="px-4 lg:px-6 h-14 flex items-center  justify-between bg-white shadow">
        <Link to='/' className="flex items-center justify-center" href="#">
          <img src={logo} alt="logo" />
        </Link>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          <Link to='/campaigncreate' className="text-sm font-medium hover:underline" href="#">
            Start a Campaign
          </Link>
          <button onClick={handleLoginModalOpen} className="text-sm font-medium hover:underline" href="#">
            Login
          </button>
          <Link to='/signup' className="text-sm font-medium hover:underline" href="#">
            Sign Up
          </Link>
          </nav>
          <div className='flex md:hidden'>
          <Menu onClick={()=> hanldeOpen()}/>
          </div>
        </div>    
        <div>
        {isOpen && (
                        <nav className="ml-auto flex flex-col md:hidden bg-white text-black text-lg items-center gap-4 sm:gap-6 mt-1">
                        <Link  to='/campaigncreate' className="text-sm font-medium hover:underline" href="#">
                          Start a Campaign
                        </Link>
                        <button onClick={handleLoginModalOpen} className="text-sm font-medium hover:underline" href="#">
                          Login
                        </button>
                        <Link to='/signup' className="text-sm font-medium hover:underline" href="#">
                          Sign Up
                        </Link>
                        </nav>
        )}    

        </div>
        {isModalOpen && (
                <Modal onClose={handleModalClose}>
                    {modalContent}
                </Modal>
            )}
      </header>
    )
}
export default Navbar2