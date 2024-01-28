// MeshGradientBackground.js
import React from 'react';

const MeshGradientBackground = () => {
  const gradientStyle = {
    background: `
      repeating-linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.5) 0px,
        rgba(255, 255, 255, 0.5) 10px,
        rgba(255, 255, 255, 0.7) 10px,
        rgba(255, 255, 255, 0.7) 20px
      ),
      repeating-linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.5) 0px,
        rgba(255, 255, 255, 0.5) 10px,
        rgba(255, 255, 255, 0.7) 10px,
        rgba(255, 255, 255, 0.7) 20px
      )
    `,
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff', // Set text color to white or a contrasting color
  };

  return (
    <div style={gradientStyle}>
      <h1>Your Content Goes Here</h1>
    </div>
  );
};

export default MeshGradientBackground;
