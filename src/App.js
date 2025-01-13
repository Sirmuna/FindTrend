import { Contact, Footprints } from "lucide-react";
import "./App.css";
import HeroSection from "./common/HeroSection";
import Navbar from "./common/Navbar";
import NewTab from "./common/NewTab";
import StartupGrow from "./common/StartupGrow";
import Connect from "./common/Connect";

import PricingCards from "./common/PricingCards";
import PreFooter from "./common/PreFooter";
import Footer from "./common/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <NewTab />
      <StartupGrow />
      <Connect />
      <PricingCards />
      <PreFooter />
      <Footer/>
    </div>
  );
}

export default App;
