import React from "react";
import "./SolidButton.css";
import { FiDownload } from "react-icons/fi";
import { SiWheniwork } from "react-icons/si";
import { FaAngleRight } from "react-icons/fa6";

export const SolidButton = ({onClick}) => {
  return (
    <div className="buttons">

      
      <div className="solid-button-container" onClick={onClick}>
        <div className="download-icon-container">
          <FiDownload className="download-icon" />
        </div>
        <div className="solid-button-title">Download Resume</div>
        
      </div>
      
    </div>
  );
};
