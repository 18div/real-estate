import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 10px;
  max-width: 300px;
  cursor: pointer;

  ${({ isSelected }) =>
    isSelected
      ? `
        opacity: 1;
        border: 2px solid blue;
      `
      : `
        opacity: 0.9;
      `}

  &:hover {
    opacity: 1;
  }
`;

const HomeImage = styled.img`
  width: 100%;
  border-radius: 4px;
`;

const HomeTitle = styled.h2`
  font-size: 18px;
  margin-top: 12px;
`;
const HomePrice = styled.h3`
  font-size: 16px;
  margin-top: 12px;
  marginLeft:20%;
`;
const Homecity = styled.h3`
  font-size: 13px;
`;
const Homecountry = styled.h3`
  font-size: 13px;
`;

const HomeDescription = styled.p`
  margin-top: 12px;
  font-size: 14px;
  color: #777;
`;

const HomeCard = ({ imageSrc, title, description,city,country,price,isSelected,onClick }) => {
    
    
  return (
    <CardContainer isSelected={isSelected} onClick={onClick}>
      <HomeImage src={imageSrc} alt={title} />
      <div style={{display:'flex', justifyContent:"space-between"}}> 
      <HomeTitle>{title}</HomeTitle>
      <HomePrice>${price}</HomePrice>
      </div>
     
      <Homecity>{city}</Homecity>
      <Homecountry>{country}</Homecountry>
      <HomeDescription>{description}</HomeDescription>
    </CardContainer>
  );
};

export default HomeCard;
