import { Contact } from "lucide-react";
import "./App.css";
import HeroSection from "./common/HeroSection";
import Navbar from "./common/Navbar";
import NewTab from "./common/NewTab";
import StartupGrow from "./common/StartupGrow";
import Connect from "./common/Connect";

import PricingCards from "./common/PricingCards";
function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <NewTab />
      <StartupGrow />
      <Connect />
      <PricingCards />
    </div>
  );
}

export default App;
