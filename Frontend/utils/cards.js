 import { clean,cancer,knee,mobilmed,solar,stadium,water,bootcamp } from "../src/assets/assets"

 
const cards = [{
    key: 1,
    img:water,
    money_raised : 25000,
    goal: 50000,
    day_left: 10,
    details: 'This is a project in which the money raised will be going toward a project that can safely and cleanly deliver water to people in sierra leone',
},{
    key:2,
    img: cancer,
    money_raised: 30000,
    goal: 80000,
    day_left: 12,
    details: 'A fundwave project to help ladies who are suffering from breast cancer',
},{
    key:3,
    img:clean,
    money_raised: 45000,
    goal: 90000,
    day_left: 4,
    details: 'A fundraiser that helps to clean and beautify the street of freetown'
}]

const campaigns = [
  {
    id: 1,
    title: "Knee Transplant",
    description: "Ibrahim Jalloh, a defender for FC FundWave, urgently needs knee surgery to continue his football career. Your donation will help cover his medical expenses and get him back on the field where he belongs..",
    raised: 4500,
    goal: 12000,
    daysLeft: 60,
    backers: 120,
    category: "Healthcare",
    image: knee,
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
      image: solar,
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
      image: mobilmed,
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
      image: bootcamp,
    },
    {
      id: 5,
      title: "Rebuilding a community staduim",
      description: "Building a stadium that allows youths to play sport and allow them to have fun.",
      raised: 4500,
      goal: 12000,
      daysLeft: 60,
      backers: 120,
      category: "Community",
      image: stadium,
    },
    {
      id: 6,
      title: "Clean Water for Rural Schools",
      description: "Help us bring clean water to 10 rural schools in Tanzania, impacting over 5,000 students.",
      raised: 6500,
      goal: 10000,
      daysLeft: 30,
      backers: 250,
      category: "Education",
      image: water,
    }
  ];

export {
    cards,
    campaigns
}
