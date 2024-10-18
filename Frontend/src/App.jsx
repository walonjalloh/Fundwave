import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import HomePage from './pages/HomePage'
import HowItWorks from "./components/HowItWorks";
import LearnMore from "./components/LearnMore";
import Signup from "./components/SignUp";
import Policy from "./components/Policy";
import ContactUs from "./components/ContactUs";
import Explore from "./components/Explore";
import RequireAuth from "./components/RequireAuth";
import Profile from "./components/Profile";
import SignIn from "./components/SignIn";
import Campaign from "./components/Campaign";
import CampaignDetails from "./components/CampaignDetail";
import Support from './components/Support'
import Payment from './components/Payment'






function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* non protected routes */}
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/how_it_works' element={<HowItWorks/>}/>
          <Route path='/about_us' element={<LearnMore/>}/>
          <Route path='/register' element={<Signup/>}/>
          <Route path='/policy' element={<Policy/>}/>
          <Route path='/contact_us' element={<ContactUs/>}/>
          <Route path='/explore' element={<Explore/>}/>
          <Route path='/login' element={<SignIn/>}/>
          <Route path='/campaigndetails' element={<CampaignDetails/>}/>
        </Route>
 
        {/* protected routes */}
        <Route element={<RequireAuth/>}>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/createcampaign' element={<Campaign/>}/>
          <Route path='/support' element={<Support/>}/>
          <Route path='/payment' element={<Payment/>}/>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
