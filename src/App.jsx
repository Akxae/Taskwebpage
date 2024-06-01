import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Features from "./components/Features/Features"
import Transactions from "./components/Transactions/Transactions"
import Savings from "./components/Savings/Savings"
import Notifications from './components/Notifications/Notifications'
import Tools from "./components/Tools/Tools"
import Cards from "./components/Cards/Cards"
import Testimonials from "./components/Testimonials/Testimonials"
import AdSection from "./components/AdSection/AdSection"
import HelpSection from "./components/HelpSection/HelpSection"
import Blog from "./components/Blog/Blog"
import Footer from "./components/Footer/Footer"


export default function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Features/>
    <Transactions/>
    <Savings/>
    <Notifications/>
    <Tools/>
    <Cards/>
    <Testimonials/>
    <AdSection/>
    <HelpSection/>
    <Blog/>
    <Footer/>
    </>
    
  )
}