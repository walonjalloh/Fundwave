import { Link } from 'react-scroll'
import { Calendar, Edit, Mail, MapPin, Phone, Shield } from "lucide-react"

export default function UserProfile() {
  const user = {
    name: "Nematulia Barrie",
    username: "@nemabarrie",
    avatar: "/placeholder-avatar.jpg",
    bio: "Passionate about making a difference in education and healthcare across Africa.",
    location: "Freetown, Sierra Leone",
    email: "nema@example.com",
    phone: "+254 123 456 789",
    joinDate: "January 2022",
    totalDonated: 1500,
    campaignsSupported: 12,
    badges: [
      { name: "Early Supporter", icon: "🌟" },
      { name: "Education Champion", icon: "📚" },
      { name: "Healthcare Hero", icon: "🏥" },
    ],
    recentDonations: [
      { campaign: "Clean Water for Schools", amount: 50, date: "2023-06-15" },
      { campaign: "Solar Power for Villages", amount: 100, date: "2023-05-30" },
      { campaign: "Mobile Health Clinics", amount: 75, date: "2023-05-10" },
    ],
  }

  return (
    <div className="flex flex-col min-h-screen">

      {/* Main Content */}
      <main className="flex-1 py-12 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {/* User Profile Card */}
            <div className="bg-white p-6 rounded-lg shadow-md lg:col-span-2">
              <div className="flex items-center gap-4">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-xl font-semibold">{user.name}</h2>
                  <p className="text-gray-500">@{user.username}</p>
                </div>
                <button className="ml-auto p-2 border rounded-full hover:bg-gray-100">
                  <Edit className="h-5 w-5 text-gray-600" />
                </button>
              </div>

              <p className="mt-4 text-gray-700">{user.bio}</p>
              <div className="mt-4 text-sm text-gray-500 space-y-2">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  {user.location}
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  {user.email}
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  {user.phone}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Joined {user.joinDate}
                </div>
              </div>
            </div>

            {/* Side Panels */}
            <div className="space-y-6">
              {/* Donation Impact */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">Donation Impact</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">NLe{user.totalDonated}</div>
                <p className="text-sm text-gray-500 mb-4">Total amount donated</p>
                <div className="relative w-full h-2 bg-gray-300 rounded-full overflow-hidden">
                  <div
                    className="absolute h-full bg-blue-500"
                    style={{ width: `${(user.campaignsSupported / 20) * 100}%` }}
                  ></div>
                </div>
                <p className="mt-2 text-sm text-gray-500">{user.campaignsSupported} campaigns supported</p>
              </div>

              {/* Badges */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">Badges</h3>
                <div className="flex flex-wrap gap-2">
                  {user.badges.map((badge, index) => (
                    <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-sm bg-gray-100 text-gray-800">
                      {badge.icon} {badge.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Recent Donations */}
          <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Recent Donations</h3>
            <div className="space-y-4">
              {user.recentDonations.map((donation, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{donation.campaign}</p>
                    <p className="text-sm text-gray-500">{donation.date}</p>
                  </div>
                  <p className="font-medium text-right">NLe{donation.amount}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}
