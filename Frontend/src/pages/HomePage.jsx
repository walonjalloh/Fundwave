import AboutUs from "../components/AboutUs"
import FeaturedCampaign from "../components/FeaturedCampaign"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Impact from "../components/Impact"
import Navbar from "../components/Navbar"


function HomePage() {
  return (
    <div>
         <Navbar/>
         <Hero/>
         <Impact/>
         <FeaturedCampaign/>
         <AboutUs/>
         <Footer/>
    </div>
   
  )
}

export default HomePage