import React, { useState, useEffect, useRef } from 'react';
import profileImage from '../assets/Gemini_Generated_Image_ckx95kckx95kckx9.png';

const AnimatedImage = ({ 
  src = profileImage,
  alt = "Profile Image",
  size = 200 
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const containerCenterX = containerRect.left + containerRect.width / 2;
      const containerCenterY = containerRect.top + containerRect.height / 2;

      // Calculate mouse position relative to container center
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      
      // Calculate distance from container center
      const deltaX = mouseX - containerCenterX;
      const deltaY = mouseY - containerCenterY;

      // Movement factor (how much the image should move)
      const movementFactor = 0.05; // Adjust this value to control movement intensity
      const maxMovement = 30; // Maximum pixels the image can move

      // Calculate new position with boundaries
      const newX = Math.max(-maxMovement, Math.min(maxMovement, deltaX * movementFactor));
      const newY = Math.max(-maxMovement, Math.min(maxMovement, deltaY * movementFactor));

      setPosition({ x: newX, y: newY });

      // Calculate rotation for 3D effect
      const rotationFactor = 0.02;
      const maxRotation = 8; // Maximum degrees of rotation

      const rotateY = Math.max(-maxRotation, Math.min(maxRotation, deltaX * rotationFactor));
      const rotateX = Math.max(-maxRotation, Math.min(maxRotation, -deltaY * rotationFactor));

      setRotation({ x: rotateX, y: rotateY });
    };

    // Add event listener to the entire document for global mouse tracking
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const containerStyle = {
    width: size,
    height: size,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '20px',
    transform: `
      translate(${position.x}px, ${position.y}px) 
      perspective(1000px) 
      rotateX(${rotation.x}deg) 
      rotateY(${rotation.y}deg)
    `,
    transition: 'transform 0.1s ease-out',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    filter: 'brightness(1.05) contrast(1.1)',
  };

  return (
    <div ref={containerRef} style={containerStyle}>
      <img 
        ref={imageRef}
        src={src} 
        alt={alt} 
        style={imageStyle}
        onError={(e) => {
          // Fallback to a placeholder if image fails to load
          e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMWExYTFhIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iI2ZmZmZmZiIvPgo8cGF0aCBkPSJNNTAgMTYwIFE1MCA1MCAxMDAgNTAgUTE1MCA1MCAxNTAgMTYwIiBmaWxsPSIjZmZmZmZmIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZmZmZmZmIiBmb250LXNpemU9IjEyIj5JbWFnZTwvdGV4dD4KPC9zdmc+";
        }}
      />
    </div>
  );
};

export default AnimatedImage;
