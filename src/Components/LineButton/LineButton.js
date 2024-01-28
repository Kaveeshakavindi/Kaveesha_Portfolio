import React from "react";
import "./LineButton.css";

export const LineButton = ({ title, onPress }) => {
  return (
    <div className="line-button-container" onClick={onPress}>
      <div className="line-button-title">{title}</div>
    </div>
  );
};