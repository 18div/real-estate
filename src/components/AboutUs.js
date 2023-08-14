import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub } from 'react-icons/fa';


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 70px);
  background-color: #f5f5f5;
  padding:35px;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 5px;
  width: 900px;
  text-align: center;
  marginTop:20%;
  color: #333;
`;

const AboutTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const AboutText = styled.p`
  font-size: 16px;
  line-height: 1.6;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const IconLink = styled.a`
  color: #333;
  font-size: 24px;
  margin: 0 10px;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`;

const AboutUs = () => {
  return (
    <Container>
   
      <Card>
        <AboutTitle>About Us</AboutTitle>
        <AboutText>
          Welcome to <strong>ELIXR Real Estate</strong>, your trusted partner in the world of real estate. With years of experience serving our clients, we have established ourselves as a leader in the industry.
        </AboutText>
        <br/>
        <AboutText>
          Our Journey: Since our inception, we have been dedicated to providing top-notch real estate solutions to our clients. With a passion for excellence, we have successfully helped numerous customers achieve their dreams of finding the perfect property.
        </AboutText>
        <br/>
        <AboutText>
          Services: At ELIXR Real Estate, we offer a wide range of services including property buying, selling, and rental management. Our team of experts is committed to ensuring a seamless and satisfying experience for all our clients.
        </AboutText>
        <br/>
        <AboutText>
          Customer Satisfaction: Customer satisfaction is at the heart of everything we do. Over the years, we have proudly served thousands of clients, helping them find their ideal homes and investment opportunities.
        </AboutText>
        <br/>
        <AboutText>
          Contact Us: For any inquiries, questions, or collaboration opportunities, feel free to reach out to us. You can contact our dedicated team at <a href="mailto:divyamishra63618@gmail.com">divyamishra63618@gmail.com</a> or call us at (+91) 9303614146.
        </AboutText>
        <br/>
        <IconWrapper>
          <IconLink href="https://www.linkedin.com/in/divya-mishra-5bb60b237/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </IconLink>
          <IconLink href="https://github.com/18div" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </IconLink>
        </IconWrapper>
      </Card>
    </Container>
    
  );
};

export default AboutUs;
