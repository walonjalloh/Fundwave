import NavbarSignedIn from "../components/NavbarSignedIn"
import CampaignDetails from '../components/CampaignDetail'
import Footer from '../components/Footer'
import CampaignDetails2 from "../components/CampaignDetails2"


function CampaignDetailsPage() {
  return (
    <div>
        <NavbarSignedIn/>
        <CampaignDetails/>
        <CampaignDetails2/>
        <Footer/>
    </div>
  )
}

export default CampaignDetailsPage