import { holder } from "../assets/assets";
import { CiCalendar } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { FaRegComment } from "react-icons/fa";

function CampaignDetail() {
  return (
    <section className="my-10 px-4 lg:px-16">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 lg:p-8">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">
          Clean Water for Rural Schools
        </h1>
        <p className="text-lg font-light text-gray-700 mb-4">
          Help us bring clean water to 10 rural schools in Sierra Leone
        </p>
        <img src={holder} alt="Campaign Image" className="w-full h-[300px] object-cover rounded-lg mb-4" />
        
        <div className="flex justify-start gap-2 mb-6">
          <button className="border-2 border-gray-300 bg-gray-50 text-gray-800 font-semibold py-2 px-4 rounded-md shadow-md hover:bg-gray-100 transition duration-200">
            About
          </button>
          <button className="border-2 border-gray-300 bg-gray-50 text-gray-800 font-semibold py-2 px-4 rounded-md shadow-md hover:bg-gray-100 transition duration-200">
            Updates
          </button>
          <button className="border-2 border-gray-300 bg-gray-50 text-gray-800 font-semibold py-2 px-4 rounded-md shadow-md hover:bg-gray-100 transition duration-200">
            Comments
          </button>
        </div>
        
        <p className="text-lg text-gray-800 mb-6">
          Our project aims to provide clean and safe drinking water to 10 rural schools in Sierra Leone, impacting over 5,000 students. With your support, we can install water purification systems and educate communities on proper water management.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-2">The Problem</h2>
        <p className="text-lg text-gray-700 mb-6">
          Many rural schools in Sierra Leone lack access to clean water, leading to waterborne diseases and decreased school attendance.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Impact</h2>
        <p className="text-lg text-gray-700 mb-6">
          This project will directly benefit over 5,000 students, improving their health, increasing school attendance, and empowering communities with knowledge about water management.
        </p>

        <div className="flex flex-wrap gap-6 text-gray-600">
          <div className="flex items-center gap-2">
            <CiCalendar className="text-gray-700" />
            <p className="text-lg">30 days left</p>
          </div>
          <div className="flex items-center gap-2">
            <GoPeople className="text-gray-700" />
            <p className="text-lg">250 backers</p>
          </div>
          <div className="flex items-center gap-2">
            <FaRegComment className="text-gray-700" />
            <p className="text-lg">40 comments</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CampaignDetail;
