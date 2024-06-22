import Categories from './Categories/Categories'
import Hero from './Hero/Hero'
import Arrivals from "./Arrivals/Arrivals"
import BestSeller from './BestSeller/BestSeller'
import Services from './Services/Services'
import Contact from "../../component/Contact/Contact"
import './Home.css'

function Home() {
  return <>
    <Hero />
    <Categories />
    <Arrivals />
    <BestSeller />
    <Services />
  </>
}export default Home
