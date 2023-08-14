import React from 'react';
import styled from 'styled-components';
import { FaTimes, FaEnvelope, FaPhone } from 'react-icons/fa';


const DetailContainer = styled.div`
  position:'fixed';
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  overflow-y: auto;
  background: linear-gradient(135deg, #F8F0E3, #F8F0E3);
`;


const DetailImage = styled.img`
  max-width: 100%;
  margin-top: 0;
  
`;
const ImageContainer = styled.div`
  position: relative;
`;

const Title= styled.h2`
margin:0;
`;

const Description = styled.p`
  margin: 0; /* Remove the default margin */
`;
const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
`;

const ContactIcon = styled.span`
  margin-right: 8px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px; 
  right: 5px; 
  background: black;
  border: none;
  font-size: 20px;
  color: white; 
  cursor: pointer;
  border-radius: 50%;
  padding: 5px;
`;

const Box = styled.div`
  
`;



const PropertyDetail = ({ property,onClose }) => {
  return (
    <Box>
    <DetailContainer  style={{ position: 'fixed', top:'10%', marginLeft: '30%', width: '40%', backgroundColor: '#fff', zIndex: 1,height:'80%',justifyContent:'center' }}>
        
         <ImageContainer>
        <CloseButton onClick={onClose}>
          <FaTimes />
        </CloseButton>
        <DetailImage src={property.imageSrc} alt={property.title} />
      </ImageContainer>
      <div style={{justifyContent:'center' ,paddingLeft:'3%'}}>
      <Title style={{alignItems:'center',justifyContent:'center'}}>{property.title}</Title>
     <Description>{property.longNote}</Description>
     <p style={{ fontWeight: 'bold' }}>Number of Rooms: {property.dimensions.rooms}</p>
          <p style={{ fontWeight: 'bold' }}>Balcony: {property.dimensions.balcony ? 'Yes' : 'No'}</p>
          <p style={{ fontWeight: 'bold' }}>Bathrooms: {property.dimensions.bathrooms}</p>
      <p style={{fontWeight:'bold'}}>City: {property.city}</p>
      <p style={{fontWeight:'bold'}}>Country: {property.country}</p>
      <h2 style={{fontWeight:'bold'}}>Contact Information</h2>
      <p>Name: {property.contactDetails.name}</p>
      <ContactInfo>
          <ContactIcon>
            <FaEnvelope />
          </ContactIcon>
          <p>Email: {property.contactDetails.email}</p>
        </ContactInfo>
        <ContactInfo>
          <ContactIcon>
            <FaPhone />
          </ContactIcon>
          <p>Phone: {property.contactDetails.phone}</p>
        </ContactInfo>
      </div>
    </DetailContainer>
    </Box>
  );
};

export default PropertyDetail;
