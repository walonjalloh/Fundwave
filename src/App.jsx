import HomePage from "./pages/HomePage"
import { BrowserRouter as Router, Routes,Route} from "react-router-dom"
import SignUp from "./pages/SignUp"
import CampaignCreation from "./pages/CampaignCreation"
import CampaignDetailsPage from "./pages/CampaignDetailsPage"
import About from "./pages/About"
import PolicyPage from "./pages/PolicyPage"


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
      </Routes>
    </Router>
  )
}

export default App