import { cards } from "../../utils/cards";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { Link } from "react-router-dom";

function FeaturedCampaign() {
  return (
    <section name="project" className="my-24">
      <p className="text-center my-12 text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent py-2">
        Featured Campaigns
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center px-4 lg:px-12">
        {cards.map((card) => (
          <div key={card.key} className="bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 border border-gray-200 p-6 flex flex-col justify-between">
            <div className="flex justify-center mb-6">
              <img
                src={card.img}
                alt="holder"
                className="h-[200px] w-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col items-center gap-4">
              <p className="font-bold text-xl">Raised: NLe{card.money_raised}</p>
              <p className="font-bold text-xl">Goal: NLe{card.goal}</p>
            </div>
            <div className="text-center font-bold mt-4 text-lg">
              Days Left: {card.day_left}
            </div>
            <p className="text-center mx-2 font-semibold mt-4 text-lg">
              {card.details}
            </p>
            <Link to='/campaigndetails'><p className="text-center text-blue-700">learn more...</p></Link>
            <div className="flex justify-between items-center mt-6 px-4">
              <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition-colors">
                Support
              </button>
              <div className="flex gap-4 text-xl text-gray-600">
                <FaXTwitter className="hover:text-blue-500 transition-colors" />
                <FaFacebookF className="hover:text-blue-500 transition-colors" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-10">
        <button className="bg-gray-200 text-gray-700 py-3 px-8 rounded-full shadow-md hover:bg-gray-300 transition-colors font-medium">
          See more
        </button>
      </div>
    </section>
  );
}

export default FeaturedCampaign;
