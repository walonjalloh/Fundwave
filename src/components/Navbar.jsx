import { Menu } from "lucide-react";
import { logo } from "../assets/assets";
import { useState } from "react";
import SignIn from './SignIn'; 
import Modal from './Modal'; 
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [modalContent, setModalContent] = useState(null); // To toggle between SignIn and Form

    function hanldeopen() {
        setIsOpen(!isOpen);
    }

    function handleLoginModalOpen() {
        setModalContent(<SignIn />); // Show SignIn component
        setIsModalOpen(true); 
    }


    function handleModalClose() {
        setIsModalOpen(false); 
    }

    return (
        <header className="sticky top-0 bg-white shadow-md z-50">
            <nav>
                <div className="flex justify-between items-center px-4 py-3 lg:px-6">
                    <div className="flex items-center gap-5">
                        <Link to='/'>
                        <img src={logo} alt="logo" className=" w-[100px]" />
                        </Link>
                        <Link to='/how_it_works'><p className="font-thin hidden md:flex ">How it works</p>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center gap-3 lg:gap-5">
                        <input 
                            type="text" 
                            placeholder="Search" 
                            className="border-2 border-gray-300 w-[200px] lg:w-[300px] px-2 py-1 rounded-md focus:outline-none" 
                        />
                        <button 
                            className="border-2 border-gray-800 px-2 py-1 rounded-md text-sm lg:text-lg lg:py-1"
                            onClick={handleLoginModalOpen}
                        >
                            Log In
                        </button>
                        <Link to='/signup'>
                        <button
                            className="border-2 border-blue-700 bg-blue-700 text-white px-2 py-1 rounded-md text-sm lg:text-lg lg:py-1"
                        > 
                            Sign Up
                        </button>
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <Menu onClick={hanldeopen} className="cursor-pointer" />
                    </div>
                </div>
            </nav>
            {isOpen && (
                <div className="flex flex-col md:hidden mx-4 gap-4 pb-4">
                    <input 
                        type="text" 
                        placeholder="Search" 
                        className="border-2 border-gray-300 w-full px-2 py-1 rounded-md focus:outline-none" 
                    />
                    <p className="font-thin text-center text-blue-500">How it work</p>
                    <button 
                        className="border-2 border-gray-800 px-4 py-2 text-sm rounded-md"
                        onClick={handleLoginModalOpen}
                    >
                        Login
                    </button>
                    <Link to='/signup'>
                    <button 
                        className="border-2 border-blue-700 bg-blue-700 w-full text-white px-4 py-2 text-sm rounded-md"
                    >
                        Sign up
                    </button>
                    </Link>
                </div>
            )}
            {isModalOpen && (
                <Modal onClose={handleModalClose}>
                    {modalContent}
                </Modal>
            )}
        </header>
    );
}

export default Navbar;
