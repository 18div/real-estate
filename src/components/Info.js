import React from 'react'
import styled from 'styled-components';
import { Button } from './Button';

const Section=styled.section`
width:100%;
height100%;
padding:4rem 0.5rem
`;
const Container= styled.div`
${'' /* padding: 3rem calc((100vw-1300px)/2); */}
display:grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 800px;

@media screen and (max-width:768px){
    grid-template-columns:1fr;
    grid-template-rows: 400px;
}

`;
const ColumnLeft= styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-item:flex-start;
line-height:1.4;
padding:1rem 2rem;
${'' /* order:{({reverse})=>(reverse :'2':'1')}; */}

h1{
    margin-bottom:1rem;
}
p{
    margin-bottom:2rem;
}
`;
const ColumnRight= styled.div`
padding:1rem 2rem;
display:flex;
${'' /* order:{({reverse})=>(reverse :'1':'2')}; */}
justify-content:center;
align-item:center;

${'' /* @media screen and (max-width:768px){
    order:{({reverse})=>(reverse :'2':'1')};
} */}
img{
    width:100%;
    height:100%;
    object-fit:cover;

    @media screen and (max-width:768px){
    width:90%;
    height:90%;
}
}
`;



const Info = ({heading,paragraphOne,paragraphTwo,buttonLabel,reverse,image}) => {
  return (
   <Section>
    <Container>
        <ColumnLeft>
        <h1>{heading}</h1>
        <p>{paragraphOne}</p>
        <p>{paragraphTwo}</p>
        <div>
        <Button to="/home" primary='true'>{buttonLabel}</Button>
        </div>
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
        <img src={image} alt='home'/>
        </ColumnRight>
    </Container>
   </Section>
  )
}

export default Info
