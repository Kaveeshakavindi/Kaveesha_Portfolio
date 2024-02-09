import React, { useState } from 'react';
import './ToggleButton.css';

const ThemeToggle = ({ toggleTheme }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked); // Toggle the checkbox state
    toggleTheme(); // Trigger the theme toggle
  };

  return (
    <div className="switch">
      <input
        type="checkbox"
        name="toggle"
        id="toggle"
        checked={isChecked}
        onChange={handleToggle}
      />
      <label htmlFor="toggle"><i></i></label>
      <span></span>
    </div>
    
  );
};

export default ThemeToggle;
