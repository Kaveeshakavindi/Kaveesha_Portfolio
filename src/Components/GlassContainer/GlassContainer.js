import React, { Children } from "react";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { TbBrandPython } from "react-icons/tb";
import { RiFlutterFill } from "react-icons/ri";
import { SiKotlin } from "react-icons/si";
import { SiAdobecreativecloud } from "react-icons/si";
import "./GlassContainer.css";

const GlassContainer = () => {
  return (
    <div className="glass-container">
      <div className="glass-container-icons">
        
        <FaReact color="white" className="glass-lang-icon"/>
        <TbBrandJavascript color="white" className="glass-lang-icon"/>
        <FaJava color="white" className="glass-lang-icon"/>
        <TbBrandPython color="white" className="glass-lang-icon"/>
        <RiFlutterFill color="white" className="glass-lang-icon"/>
        <SiKotlin color="white" className="glass-lang-icon"/>
        <SiAdobecreativecloud color="white" className="glass-lang-icon"/>
        <FaFigma color="white" className="glass-lang-icon"/>
      </div>
    </div>
  );
};

export default GlassContainer;
