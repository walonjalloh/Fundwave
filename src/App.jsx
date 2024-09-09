import HomePage from "./pages/HomePage"
import { BrowserRouter as Router, Routes,Route} from "react-router-dom"
import SignUp from "./pages/SignUp"
import CampaignCreation from "./pages/CampaignCreation"
import CampaignDetailsPage from "./pages/CampaignDetailsPage"
import About from "./pages/About"
import PolicyPage from "./pages/PolicyPage"
import ExplorePage from "./pages/ExplorePage"
import ProfliePages from "./pages/ProfliePages"
import HowItWorksPage from "./pages/HowItWorksPage"
import PaymentPage from "./pages/PaymentPage"






function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/campaigncreate" element={<CampaignCreation/>}/>
        <Route path="/campaigndetails" element={<CampaignDetailsPage/>}/>
        <Route path="/about_us" element={<About/>}/>
        <Route path="/policy" element={<PolicyPage/>}/>
        <Route path="/explore" element={<ExplorePage/>}/>
        <Route path="/profile" element={<ProfliePages/>}/>
        <Route path="/how_it_works" element={<HowItWorksPage/>}/>
        <Route path="/payment" element={<PaymentPage/>}/>
      </Routes>
    </Router>
  )
}

export default App