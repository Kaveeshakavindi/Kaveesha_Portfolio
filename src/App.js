import React , { useState, useEffect } from 'react';
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Sections/Home/Home";
import { Blog } from "./Sections/Blog/Blog";
import { Work } from "./Sections/Work/Work";
import { Service } from "./Sections/Service/Service";
import CustomCursor from "./Components/CustomCursor/CustomCursor";
import Footer from "./Components/Footer/Footer";
import LandingPage from "./Components/LandingPage/LandingPage";
import {Socials} from "./Components/Socials/Socials";


function App() {

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 6000);
  }, []);

  
  return (
    <div className="App">
      {isLoading ? (
        <LandingPage />
      ) : (
        <div>
        <CustomCursor />
        <div className="custom-cursor"></div>
        <Navbar className="navbar" />  
        <Socials className="app-socials"/>
        <Home />
        <Service />
        <Work />
        <Blog />
        <Footer/>
        </div>
      )}
    </div>
  );
}


export default App;
