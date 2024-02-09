import React, { Children } from "react";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { TbBrandPython } from "react-icons/tb";
import { RiFlutterFill } from "react-icons/ri";
import { SiKotlin } from "react-icons/si";
import { SiAdobecreativecloud } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import "./GlassContainer.css";

const GlassContainer = () => {
  return (
    <div className="glass-container">
      <div className="glass-container-icons">
        
        <FaReact className="glass-lang-icon"/>
        <TbBrandJavascript className="glass-lang-icon"/>
        <FaJava className="glass-lang-icon"/>
        <TbBrandPython  className="glass-lang-icon"/>
        <RiFlutterFill  className="glass-lang-icon"/>
        <SiKotlin className="glass-lang-icon"/>
        <SiAdobecreativecloud className="glass-lang-icon"/>
        <FaFigma className="glass-lang-icon"/>
        <SiMongodb  className="glass-lang-icon"/>
      </div>
    </div>
  );
};

export default GlassContainer;
