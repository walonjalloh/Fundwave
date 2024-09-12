import { Link } from 'react-router-dom'
import { Calendar, Search, Shield, Users } from "lucide-react";
import { campaigns } from '../../utils/cards';

export default function ExploreCampaigns() {
  

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 py-12 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
            <p className='text-center text-2xl font-bold mb-10'>My Campaigns</p>
          <div className="space-y-6">
            {campaigns.map((campaign) => (
              <div key={campaign.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={campaign.image}
                      alt={campaign.title}
                      className="h-48 w-full object-cover md:h-full"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h2 className="text-xl font-bold mb-1">{campaign.title}</h2>
                        <p className="text-gray-600">{campaign.description}</p>
                      </div>
                      <span className="px-2 py-1 text-xs font-medium text-gray-800 bg-gray-200 rounded">
                        {campaign.category}
                      </span>
                    </div>
                    <div className="mb-4">
                      <div className="relative w-full h-2 bg-gray-200 rounded-full">
                        <div
                          className="absolute h-full bg-blue-600 rounded-full"
                          style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm mt-2">
                        <span className="font-medium">
                          ${campaign.raised.toLocaleString()} raised
                        </span>
                        <span className="text-gray-500">${campaign.goal.toLocaleString()} goal</span>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{campaign.daysLeft} days left</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{campaign.backers} backers</span>
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
