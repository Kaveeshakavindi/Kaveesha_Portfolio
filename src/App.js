import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Sections/Home/Home";
import { Blog } from "./Sections/Blog/Blog";
import { Contact } from "./Sections/Contact/Contact";
import { Work } from "./Sections/Work/Work";
import { Socials } from "./Components/Socials/Socials";
import { Service } from "./Sections/Service/Service";
import CustomCursor from "./Components/CustomCursor/CustomCursor";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <CustomCursor />
      <div className="custom-cursor"></div>
      <Navbar className="navbar" />
    
        {/* <div className="social-section-left">
        <Socials/>
        </div> */}
      
      <Home />
      <Service />
      <Work />
      <Blog />
      <Footer/>
    </div>
  );
}

export default App;
