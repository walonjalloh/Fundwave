import React, { useState } from 'react';
import { FaShieldAlt, FaChartBar, FaUsers, FaThumbsUp, FaEdit, FaTrash, FaPlus, FaCommentAlt, FaBars } from 'react-icons/fa';

const Link = ({ href, className, children }) => (
  <a href={href} className={className}>{children}</a>
);

export default function CampaignDashboard() {
  const [newUpdate, setNewUpdate] = useState('');
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const campaign = {
    title: "Clean Water for Rural Schools",
    description: "Bringing clean water to 10 rural schools in Tanzania",
    raised: 6500,
    goal: 10000,
    backers: 250,
    daysLeft: 30,
    updates: [
      { id: 1, date: "2023-06-15", content: "We've completed our first water system installation!" },
      { id: 2, date: "2023-06-01", content: "Thank you all for your support. We're halfway to our goal!" },
    ],
    comments: [
      { id: 1, user: "John Doe", date: "2023-06-16", content: "Great work! Keep it up!" },
      { id: 2, user: "Jane Smith", date: "2023-06-14", content: "This project is making a real difference." },
    ],
  };

  const handleDeleteCampaign = () => {
    console.log("Campaign deleted");
    setIsDeleteDialogOpen(false);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="bg-white rounded-lg shadow p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-2">Campaign Overview</h2>
            <p className="text-gray-600 mb-4">{campaign.description}</p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Recent Activity</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>New backer: Alice supported your campaign ($50)</li>
                  <li>Milestone reached: 50% of goal achieved</li>
                  <li>New comment from John Doe</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Next Steps</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Post an update on the latest water system installation</li>
                  <li>Reach out to potential partners for the next phase</li>
                  <li>Prepare content for social media promotion</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'updates':
        return (
          <div className="bg-white rounded-lg shadow p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-2">Campaign Updates</h2>
            <p className="text-gray-600 mb-4">Keep your backers informed about your progress</p>
            <div className="space-y-4">
              <div>
                <label htmlFor="newUpdate" className="block text-sm font-medium text-gray-700 mb-1">New Update</label>
                <textarea
                  id="newUpdate"
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                  rows="4"
                  placeholder="Share your latest progress..."
                  value={newUpdate}
                  onChange={(e) => setNewUpdate(e.target.value)}
                />
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center">
                <FaPlus className="mr-2" /> Post Update
              </button>
              <div className="space-y-4">
                {campaign.updates.map((update) => (
                  <div key={update.id} className="bg-gray-100 rounded-lg p-4">
                    <h3 className="text-sm font-medium mb-2">Update on {update.date}</h3>
                    <p>{update.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'comments':
        return (
          <div className="bg-white rounded-lg shadow p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-2">Backer Comments</h2>
            <p className="text-gray-600 mb-4">Engage with your supporters</p>
            <div className="space-y-4">
              {campaign.comments.map((comment) => (
                <div key={comment.id} className="bg-gray-100 rounded-lg p-4">
                  <h3 className="text-sm font-medium mb-2">{comment.user} on {comment.date}</h3>
                  <p className="mb-4">{comment.content}</p>
                  <button className="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-100 flex items-center text-sm">
                    <FaCommentAlt className="mr-2" /> Reply
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      case 'edit':
        return (
          <div className="bg-white rounded-lg shadow p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-2">Edit Campaign</h2>
            <p className="text-gray-600 mb-4">Make changes to your campaign details</p>
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Campaign Title</label>
                <input id="title" type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" defaultValue={campaign.title} />
              </div>
              <div className="space-y-2">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Campaign Description</label>
                <textarea id="description" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4" defaultValue={campaign.description} />
              </div>
              <div className="space-y-2">
                <label htmlFor="goal" className="block text-sm font-medium text-gray-700">Funding Goal</label>
                <input id="goal" type="number" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" defaultValue={campaign.goal} />
              </div>
              <div className="space-y-2">
                <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">End Date</label>
                <input id="endDate" type="date" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between space-y-2 sm:space-y-0 sm:space-x-2">
                <button type="submit" className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center">
                  <FaEdit className="mr-2" /> Save Changes
                </button>
                <button 
                  type="button" 
                  className="w-full sm:w-auto px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center justify-center"
                  onClick={() => setIsDeleteDialogOpen(true)}
                >
                  <FaTrash className="mr-2" /> Delete Campaign
                </button>
              </div>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 py-6 md:py-12 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold">{campaign.title}</h1>
            <button
              className="md:hidden p-2 rounded-md bg-gray-200 hover:bg-gray-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <FaBars />
            </button>
          </div>
          <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-sm font-medium text-gray-500">Total Raised</h2>
                <FaChartBar className="h-4 w-4 text-gray-400" />
              </div>
              <div className="text-xl md:text-2xl font-bold">${campaign.raised.toLocaleString()}</div>
              <div className="mt-2 h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-2 bg-blue-600 rounded-full" 
                  style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                ${campaign.goal.toLocaleString()} goal
              </p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-sm font-medium text-gray-500">Backers</h2>
                <FaUsers className="h-4 w-4 text-gray-400" />
              </div>
              <div className="text-xl md:text-2xl font-bold">{campaign.backers}</div>
              <p className="text-xs text-gray-500">supporters</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-sm font-medium text-gray-500">Days Left</h2>
                <FaThumbsUp className="h-4 w-4 text-gray-400" />
              </div>
              <div className="text-xl md:text-2xl font-bold">{campaign.daysLeft}</div>
              <p className="text-xs text-gray-500">days remaining</p>
            </div>
          </div>
          <div className="mb-6">
            <div className="border-b border-gray-200">
              <nav className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block -mb-px flex flex-col md:flex-row md:space-x-8`}>
                {['Overview', 'Updates', 'Comments', 'Edit'].map((tab) => (
                  <button
                    key={tab}
                    className={`${
                      activeTab === tab.toLowerCase()
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                    onClick={() => {
                      setActiveTab(tab.toLowerCase());
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>
          </div>
          {renderTabContent()}
        </div>
      </main>
    
      {isDeleteDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-4 md:p-6">
            <h2 className="text-lg font-bold mb-4">Are you absolutely sure?</h2>
            <p className="text-sm text-gray-500 mb-4">
              This action cannot be undone. This will permanently delete your campaign and remove all data from our servers.
            </p>
            <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4">
              <button 
                className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
                onClick={() => setIsDeleteDialogOpen(false)}
              >
                Cancel
              </button>
              <button 
                className="w-full sm:w-auto px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                onClick={handleDeleteCampaign}
              >
                Delete Campaign
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}