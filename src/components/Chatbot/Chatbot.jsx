// ChatBot.js
import React, { useState } from 'react';
import { FaComments } from 'react-icons/fa';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [userMessage, setUserMessage] = useState("");

  const qaPairs = [
    { question: "What services do you offer?", answer: "We offer a range of yoga classes and wellness programs, including Yoga Classes, Pilates, Kids Yoga, Yoga Therapy, Sound Healing, Training Courses, and Private Classes" },
    { question: "How can I contact support?", answer: "You can reach us at info@aadiyogacenterphuket.com or by phone at +66 80 251 1273" },
    { question: "What are your business hours?", answer: "We are open from 5:30 AM to 9:00 PM, Monday through Sunday." },
    { question: "Do you provide discounts?", answer: "Yes, we offer seasonal discounts. Contact us to learn more." },
    { 
      question: "For more information or specific questions?", 
      answer: "You can drop a question here, and our team will contact you within the hour." 
  }
  ];

  const toggleChatBot = () => {
    setIsOpen(!isOpen);
    setSelectedAnswer(null);
    setUserMessage("");
  };

  const handleQuestionClick = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userMessage.trim()) {
      alert("Your message has been sent. Our team will contact you within 24 hours.");
      setUserMessage("");
    }
  };

  return (
    <div>
      {/* Chat Icon with Online Status */}
      {!isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '20px',
            backgroundColor: '#16a48b',
            borderRadius: '50%',
            padding: '15px',
            cursor: 'pointer',
            boxShadow: '0px 0px 15px rgba(0,0,0,0.3)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={toggleChatBot}
          aria-label="Open ChatBot"
        >
          <FaComments color="white" size="30px" />
          <span
            style={{
              position: 'absolute',
              top: '5px',
              right: '5px',
              width: '8px',
              height: '8px',
              backgroundColor: '#1bc41b',
              borderRadius: '50%',
              border: '2px solid white'
            }}
          />
        </div>
      )}

      {/* Chatbot UI */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '80px',
            right: '20px',
            width: '90%',
            maxWidth: '300px',
            padding: '20px',
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0px 0px 15px rgba(0,0,0,0.3)',
            zIndex: 1001,
            fontFamily: 'Arial, sans-serif',
          }}
        >
          <h3 style={{ color: '#333', marginBottom: '10px', fontWeight:'bold'}}>ChatBot</h3>
          <p style={{ fontSize: '12px', color: 'gray', opacity: 0.7, marginBottom: '15px' }}>
            Welcome to Aadiyoga Center! Drop your question, and our team will contact you within 24 hours.
          </p>
          <div>
            {qaPairs.map((item, index) => (
              <button
                key={index}
                onClick={() => handleQuestionClick(item.answer)}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  margin: '5px 0',
                  backgroundColor: '#66d9c7',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontSize: '14px',
                  transition: 'background-color 0.3s',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#33cc99'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#66d9c7'}
              >
                {item.question}
              </button>
            ))}
          </div>
          {selectedAnswer && (
            <div style={{
              marginTop: '10px',
              padding: '10px',
              backgroundColor: '#ffffff',
              borderRadius: '5px',
              fontSize: '13px',
              color: '#333',
              boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
            }}>
              <strong>
                
                Response:</strong> {selectedAnswer}
            </div>
          )}
          <form onSubmit={handleSubmit} style={{ marginTop: '10px' }}>
            <input
              type="text"
              placeholder="Type your question..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ddd',
                marginBottom: '10px',
                fontSize: '14px',
              }}
            />
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '10px',
                backgroundColor: '#16a48b',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '14px',
                transition: 'background-color 0.3s',
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#2dd881'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#16a48b'}
            >
              Send
            </button>
          </form>
          <button
            onClick={toggleChatBot}
            style={{
              marginTop: '10px',
              padding: '5px',
              backgroundColor: '#333',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '12px',
              width: '100%',
            }}
          >
            Close Chat
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
