import { HeartIcon, UsersIcon, TrendingUpIcon, ShieldCheckIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  const impactStats = [
    { icon: HeartIcon, value: "10M+", label: "Campaigns Funded" },
    { icon: UsersIcon, value: "50M+", label: "Donors" },
    { icon: TrendingUpIcon, value: "$5B+", label: "Raised" },
    { icon: ShieldCheckIcon, value: "190+", label: "Countries & Regions" },
  ];

  const teamMembers = [
    { name: "Emma Thompson", role: "CEO & Co-founder", image: "/placeholder.svg" },
    { name: "Michael Chen", role: "CTO & Co-founder", image: "/placeholder.svg" },
    { name: "Sarah Patel", role: "Head of Community", image: "/placeholder.svg" },
    { name: "David Kim", role: "Lead Developer", image: "/placeholder.svg" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4">About FundHope</h1>
        <p className="text-xl text-gray-600">Empowering dreams, one donation at a time</p>
      </header>

      {/* Mission Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-4">
              At FundHope, we believe in the power of community to change lives. Our mission is to create a platform where compassion meets action, enabling individuals and organizations to raise funds for causes that matter most to them.
            </p>
            <p className="text-lg mb-4">
              Whether it is helping a family in need, supporting a local charity, or funding a groundbreaking project, we are here to make fundraising accessible, transparent, and impactful.
            </p>
            <Link to='/campaigncreate'><button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">Start a Campaign</button></Link>
          </div>
          <div className="relative h-64 md:h-full">
            <img
              src="/placeholder.svg"
              alt="People collaborating on a fundraising campaign"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {impactStats.map((stat, index) => (
            <div key={index} className="bg-white shadow-lg p-6 rounded-lg text-center">
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["Start Your Campaign", "Share with Friends", "Manage Donations"].map((title, index) => (
            <div key={index} className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{index + 1}. {title}</h3>
              <p>
                {index === 0 && "Create your fundraiser in minutes. Set your goal, tell your story, and add photos and videos."}
                {index === 1 && "Spread the word on social media and email. We will provide you with tools to maximize your reach."}
                {index === 2 && "Receive donations quickly and easily. Keep supporters engaged with updates and thank-you notes."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white shadow-lg p-6 rounded-lg text-center">
              <div className="w-24 h-24 mx-auto mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <span className="text-gray-500 bg-gray-200 px-3 py-1 rounded-full">{member.role}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Commitment Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Our Commitment</h2>
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <p className="text-lg">
            At FundHope, we are committed to providing a secure, transparent, and user-friendly platform for all your fundraising needs. We believe in the power of community and the impact of collective giving. Our dedicated team works tirelessly to ensure that every campaign gets the support it deserves, and every donor feels confident in their contribution.
          </p>
          <div className="mt-4">
            <Link to='/policy'>            <button className="border border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50">Learn About Our Policies</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
