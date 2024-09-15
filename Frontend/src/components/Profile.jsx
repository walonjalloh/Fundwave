import React, { useState, useEffect } from 'react';
import { Calendar, Edit, Mail, MapPin, Phone } from "lucide-react";
import { aprof } from '../assets/assets';

export default function UserProfile() {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('token'); // Ensure this matches how you store the token
        if (!token) {
          throw new Error('No authentication token found');
        }

        const response = await fetch('http://localhost:3800/users/aswaray650@gmail.com', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('User profile not found. Are you logged in?');
          } else {
            const errorData = await response.json();
            throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
          }
        }

        const data = await response.json();
        setProfileData(data);
      } catch (err) {
        console.error('Error fetching profile data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading profile data...</div>;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-500">
          <h2 className="text-xl font-bold mb-2">Error loading profile</h2>
          <p>{error}</p>
          <p className="mt-4">Please try logging in again or contact support if the problem persists.</p>
        </div>
      </div>
    );
  }

  if (!profileData) {
    return <div className="flex justify-center items-center h-screen">No profile data available</div>;
  }

  // Rest of the component remains the same...


  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 py-12 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {/* User Profile Card */}
            <div className="bg-white p-6 rounded-lg shadow-md lg:col-span-2">
              <div className="flex items-center gap-4">
                <img
                  src={aprof}
                  alt={`${profileData.firstName} ${profileData.lastName}`}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-xl font-semibold">{`${profileData.firstName} ${profileData.lastName}`}</h2>
                  <p className="text-gray-500">@{profileData.email.split('@')[0]}</p>
                </div>
                <button className="ml-auto p-2 border rounded-full hover:bg-gray-100">
                  <Edit className="h-5 w-5 text-gray-600" />
                </button>
              </div>

              <div className="mt-4 text-sm text-gray-500 space-y-2">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  {`${profileData.capitalCity}, ${profileData.country}`}
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  {profileData.email}
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  {profileData.phoneNumber}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Joined {new Date(profileData.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>

            {/* Side Panels */}
            <div className="space-y-6">
              {/* Donation Impact */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">Donation Impact</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">NLe{profileData.totalDonated || 0}</div>
                <p className="text-sm text-gray-500 mb-4">Total amount donated</p>
                <div className="relative w-full h-2 bg-gray-300 rounded-full overflow-hidden">
                  <div
                    className="absolute h-full bg-blue-500"
                    style={{ width: `${((profileData.campaigns?.length || 0) / 20) * 100}%` }}
                  ></div>
                </div>
                <p className="mt-2 text-sm text-gray-500">{profileData.campaigns?.length || 0} campaigns supported</p>
              </div>

              {/* Badges */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">Badges</h3>
                <div className="flex flex-wrap gap-2">
                  {profileData.badges && profileData.badges.length > 0 ? (
                    profileData.badges.map((badge, index) => (
                      <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-sm bg-gray-100 text-gray-800">
                        {badge.icon} {badge.name}
                      </span>
                    ))
                  ) : (
                    <p>No badges yet</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Recent Donations */}
          <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Recent Donations</h3>
            <div className="space-y-4">
              {profileData.recentDonations && profileData.recentDonations.length > 0 ? (
                profileData.recentDonations.map((donation, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{donation.campaign}</p>
                      <p className="text-sm text-gray-500">{donation.date}</p>
                    </div>
                    <p className="font-medium text-right">NLe{donation.amount}</p>
                  </div>
                ))
              ) : (
                <p>No recent donations</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}