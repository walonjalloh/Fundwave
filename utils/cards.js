 import { holder } from "../src/assets/assets"
 
const cards = [{
    key: 1,
    img:holder,
    money_raised : 25000,
    goal: 50000,
    day_left: 10,
    details: 'This is a project in which the money raised will be going toward a project that can safely and cleanly deliver water to people in sierra leone',
},{
    key:2,
    img: holder,
    money_raised: 30000,
    goal: 80000,
    day_left: 12,
    details: 'A fundwave project to help ladies who are suffering from breast cancer',
},{
    key:3,
    img:holder,
    money_raised: 45000,
    goal: 90000,
    day_left: 4,
    details: 'A fundraiser that helps to clean and beautify the street of freetown'
}]

const campaigns = [
    {
      id: 1,
      title: "Clean Water for Rural Schools",
      description: "Help us bring clean water to 10 rural schools in Tanzania, impacting over 5,000 students.",
      raised: 6500,
      goal: 10000,
      daysLeft: 30,
      backers: 250,
      category: "Education",
      image: "/placeholder-campaign-1.jpg",
    },
    {
      id: 2,
      title: "Solar Power for Remote Villages",
      description: "Bringing sustainable energy to off-grid communities in rural Kenya, powering homes and businesses.",
      raised: 12000,
      goal: 20000,
      daysLeft: 45,
      backers: 180,
      category: "Environment",
      image: "/placeholder-campaign-2.jpg",
    },
    {
      id: 3,
      title: "Mobile Health Clinics",
      description: "Providing healthcare access to underserved areas in Nigeria through mobile clinics and telemedicine.",
      raised: 8000,
      goal: 15000,
      daysLeft: 20,
      backers: 300,
      category: "Healthcare",
      image: "/placeholder-campaign-3.jpg",
    },
    {
      id: 4,
      title: "Coding Bootcamps for Youth",
      description: "Empowering young people in South Africa with digital skills through intensive coding bootcamps.",
      raised: 4500,
      goal: 12000,
      daysLeft: 60,
      backers: 120,
      category: "Technology",
      image: "/placeholder-campaign-4.jpg",
    },
  ];

export {
    cards,
    campaigns
}
