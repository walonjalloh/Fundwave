import { Link } from 'react-router-dom'
import { Calendar, Search, Users } from "lucide-react";
import holder from '../assets/holder.png'
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

export default function ExploreCampaigns() {
  const {campaignList} = useContext(AuthContext)
  

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 py-12 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-6">Explore Campaigns</h1>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Search campaigns..."
              />
            </div>
            <select
              className="w-full md:w-[180px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Categories</option>
              <option value="education">Education</option>
              <option value="healthcare">Healthcare</option>
              <option value="environment">Environment</option>
              <option value="technology">Technology</option>
              <option value="community">Community</option>
            </select>
            <select
              className="w-full md:w-[180px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="most-funded">Most Funded</option>
              <option value="newest">Newest</option>
              <option value="end-date">End Date</option>
            </select>
          </div>

          <div className="space-y-6">
            {campaignList.map((campaign) => (
              <div key={campaign._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={holder}
                      alt={campaign.campaignName}
                      className="h-48 w-full object-cover md:h-full"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h2 className="text-xl font-bold mb-1">{campaign.campaignName}</h2>
                        <p className="text-gray-600">{campaign.campaignDescription}</p>
                      </div>
                      <span className="px-2 py-1 text-xs font-medium text-gray-800 bg-gray-200 rounded">
                        {campaign.category}
                      </span>
                    </div>
                    <div className="mb-4">
                      <div className="relative w-full h-2 bg-gray-200 rounded-full"></div>
                      <div className="flex justify-between text-sm mt-2">
                        <span className="text-gray-500">NLe{campaign.fundingGoal.toLocaleString()} goal</span>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Time Left: {campaign.completionDate}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{campaign.teamInformation} backers</span>
                      </div>
                    </div>
                    <Link to='/campaigndetails'>
                      <button className="w-full md:w-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                        View Campaign
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100">
              Load More
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
