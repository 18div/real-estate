import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaMapMarker, FaLinkedin, FaGithub } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 20px 0;
  text-align: center;
`;

const FooterIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const FooterIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  margin: 0 10px;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`;

const FooterAddress = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterIconWrapper>
        <FooterIconLink href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </FooterIconLink>
        <FooterIconLink href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </FooterIconLink>
      </FooterIconWrapper>
      <FooterAddress>
        <FaMapMarker /> 123 Real Estate Street, Cityville, Country
      </FooterAddress>
      <FooterAddress>
        <FaPhone /> (+123) 456-7890
      </FooterAddress>
      <FooterAddress>
        <FaEnvelope /> info@example.com
      </FooterAddress>
    </FooterContainer>
  );
};

export default Footer;