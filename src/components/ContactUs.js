import React from 'react';
import styled, { keyframes } from 'styled-components';
import estatereal from '../images/estatereal.jpg';
import Footer from './Footer';
// import emailjs from '@emailjs/browser';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ContactContainer = styled.div`
   display: flex;
  align-items: center;
  justify-content: center; 
  height: 100vh;
  background: linear-gradient(135deg, #fff, #fff),url(${estatereal}); 
  background-size: cover;
  background-repeat: no-repeat; 

  background-size: 200% 200%;
  marginLeft:'10%';
  marginRight:'10%';
  animation: shine 4s linear infinite, ${fadeIn} 1s ease;

  @keyframes shine {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 200% 0;
    }
  }
`;

const ContactTitle = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  background: linear-gradient(45deg, #aee3f7, #76c6f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputField = styled.input`
  width: 300px;
  height: 40px;
  margin-bottom: 10px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: linear-gradient(90deg, #e0e0e0, #f9f9f9);
`;

const TextAreaField = styled.textarea`
  width: 300px;
  height: 120px;
  margin-bottom: 10px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: linear-gradient(45deg, #e0e0e0, #f9f9f9);
`;

const SubmitButton = styled.button`
  width: 150px;
  height: 40px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: linear-gradient(45deg, #00a8e8, #0087d1);
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
`;

// const AnimatedHomeImage = styled.img`
//   width: 200px;
//   height: 200px;
//   animation: bounce 2s infinite;
  
//   @keyframes bounce {
//     0%, 100% {
//       transform: translateY(0);
//     }
//     50% {
//       transform: translateY(-20px);
//     }
//   }
// `;
const ContactUs = () => {
  
  return (
    <form>
      <ContactContainer>
        <ContactForm>
        <ContactTitle>Contact Us</ContactTitle>
          <InputField type="text" placeholder="Your Name" />
         <InputField type="email" placeholder="Your Email" />
         <TextAreaField placeholder="Your Message" />
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
      </ContactContainer>
      <Footer />
    </form>
  );
  }

export default ContactUs;