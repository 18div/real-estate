import React, { useState,useEffect} from 'react';
import styled from 'styled-components';
import PropertyDetail from './PropertyDetail';
import HomeCard from './HomeCard'; 
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import homesData from './homeData';



const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 20px;
  width: 50%;
  margin: auto;
  color:'black';
  .rc-slider-track {
  background-color: black; 
  .rc-slider-handle {
  border-color: black; 
}
}
`;

const PriceRangeBox = styled.div`
  border: 1px solid #ccc;
  border-radius: 200px;
  padding: 14px;
  background-color: #fff;
  top:80px;
  width:  100%;
  color:'black';
`;
const HomePageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const SectionTitle = styled.h1`
  font-size: 28px;
  text-align: center;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  height: 40px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
  justify-content:'center';
  margin-left:36%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
`;

const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedProperty, setSelectedProperty] = useState(null); 
    const [priceRange, setPriceRange] = useState([0, 650000]);

    const filteredHomes = homesData.filter((home) =>
      home.country.toLowerCase().includes(searchTerm.toLowerCase()) &&
      home.price >= priceRange[0] && home.price <= priceRange[1]
    );

    useEffect(() => {
      setPriceRange([0, 65000000]);
    }, []);

    const handleCardClick = (property) => {
      setSelectedProperty(property);
    };

    const closeDetail = () => {
      setSelectedProperty(null);
    };
   
    return (
      <div style={{marginTop:'5%'}}>
        <SectionTitle>Welcome to Our Homes</SectionTitle>
        <SearchInput
          type="text"
          placeholder="Search by country..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
         <SliderContainer>
        <PriceRangeBox>
        <p style={{color:'black', paddingBottom: '10px'}}>Price Range</p>
        <Slider
            range
            defaultValue={[0 ,65000000]}
            min={0}
            max={65000000}
            step={10000000}
            value={priceRange}
            onChange={(value) => setPriceRange(value)}
        />
        <div style={{display:'flex', justifyContent:"space-between"}}>
        <p style={{fontSize: '12px'}}>Min Price: {priceRange[0]}</p>
        <p style={{fontSize: '12px'}}>Max Price: {priceRange[1]}</p>
        </div>
        </PriceRangeBox>
        </SliderContainer>
        <HomePageContainer>
          {filteredHomes.map((home) => (
            <HomeCard
              key={home.id}
              imageSrc={home.imageSrc}
              title={home.title}
              description={home.description}
              city={home.city}
              country={home.country}
              price={home.price}
              isSelected={selectedProperty && selectedProperty.id === home.id}
              onClick={() => handleCardClick(home)}
            />
          ))}
        </HomePageContainer>
        {selectedProperty && (
        <PropertyDetail property={selectedProperty}  onClose={closeDetail} />
      )}
      </div>
    );
  };
  
  export default HomePage;