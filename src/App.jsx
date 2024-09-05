import HomePage from "./pages/HomePage"
import { BrowserRouter as Router, Routes,Route} from "react-router-dom"
import SignUp from "./pages/SignUp"
import CampaignCreation from "./pages/CampaignCreation"
import CampaignDetailsPage from "./pages/CampaignDetailsPage"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/campaigncreate" element={<CampaignCreation/>}/>
        <Route path="/campaigndetails" element={<CampaignDetailsPage/>}/>
      </Routes>
    </Router>
  )
}

export default App