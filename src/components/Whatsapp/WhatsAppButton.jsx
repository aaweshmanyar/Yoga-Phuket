// WhatsAppButton.js
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const handleClick = () => {
    // Your WhatsApp API link here (replace with your actual WhatsApp number)
    window.open("https://wa.me/66802511273?text=Hi, I would like to know more about...", "_blank");
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        borderRadius: '50%',
        padding: '15px',
        cursor: 'pointer',
        boxShadow: '0px 0px 15px rgba(0,0,0,0.3)',
        zIndex: 1000,
      }}
      onClick={handleClick}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp color="white" size="30px" />
    </div>
  );
};

export default WhatsAppButton;
