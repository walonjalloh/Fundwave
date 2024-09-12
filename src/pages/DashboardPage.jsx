import NavbarSignedIn from "../components/NavbarSignedIn"
import DashBoard from '../components/DashBoard'
import Footer from "../components/Footer"



function DashboardPage() {
  return (
    <div>
        <NavbarSignedIn/>
        <DashBoard/>
        <Footer/>
    </div>
  )
}

export default DashboardPage