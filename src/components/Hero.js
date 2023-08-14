import React from 'react'
import styled,{css}  from 'styled-components';
import { Button } from './Button';
import {IoMdArrowRoundForward} from 'react-icons/io'
import {IoArrowBack} from 'react-icons/io5'
import {IoArrowForward} from 'react-icons/io5'
import {useEffect,useState,useRef} from 'react';

const HeroSection = styled.section`
height:100vh;
max-height:100vh;
position:relative;
overflow:hidden;
z-index:0;
`;

const HeroWrapper = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
overflow:hidden;
position:relative;
`;


const SliderButtons=styled.div`
position:absolute;
bottom:75px;
right:50px;
display:flex;
z-index:10;
`;

const arrowButtons = css`
width:35px;
height:35px;
color:#fff;
cursor:pointer;
background:#000d1a;
border-radius:50px;
padding:10px;
margin-right:1rem;
user-select:none;
transition:0.9s;

&:hover{
    background:#cd853f;
    transform:scale(1.05);
    }
`;

const PrevArrow = styled(IoArrowBack)`
${arrowButtons}
`;

const NextArrow = styled(IoArrowForward)`
${arrowButtons}
`;


const HeroSlide=styled.div`
z-index:0;
width:100%;
height:100%;
position:absolute;
`;
const HeroSlider=styled.div`
position:absolute;
top:0;
left:0;
width:100vw;
height:100vh;
display:flex;
align-item:center;
justify-content:center;

&::before{
    content:'';
    position:absolute;
    z-index:2;
    width:100%;
    height:100vh;
    bottom:0vh;
    left:0;
    overflow:hidden;
    opacity:0.4;
    background: linear-gradient(
        0deg,
        rgba(0,0,0,0.2) 0%,
        rgba(0,0,0,0.2) 50%,
        rgba(0,0,0,0.6) 100%,
    )
        }
`;
const HeroImage=styled.img`
position:absolute;
top:0;
left:0;
width:100vw;
height:100vh;
z-index:-1;
object-fit:cover;
`;
const HeroContent=styled.div`
position:relative;
z-index:10;
display:flex;
margin-right:60%;
top:35%;
flex-direction:column;
max-width:1600px;
width:calc(100%-100px);
color:#fff;
align-item:flex-start;
h1{
    font-size:clamp(1rem,8vw,2rem);
    font-weight:400;
    text-transform:uppercase;
    text-shadow:0px 0px 20px rgba(0,0,0,0.4);
    text-align:left;
    margin-bottom:0.8rem;
}
p {
    margin-bottom: 1.2rem;
  }

`;

const Arrow=styled(IoMdArrowRoundForward)`
margin-left:0.5rem;
margin-top:0.5rem;

`;


const Hero = ({slides}) => {

    const [current,setCurrent]=useState(0);
    const length=slides.length;
     const timeout=useRef(null);


     const nextSlide=()=>{
        setCurrent(current===length-1 ? 0 :current+1);
       
    }
    const prevSlide=()=>{
        setCurrent(current===0 ? length-1 :current-1);
        
    }

    useEffect(
        ()=>{
            const nextSlide=()=>{
                 setCurrent(current=>(current===length-1 ? 0 :current+1));
            };
    
            timeout.current = setTimeout(nextSlide,3000);
    
            return function(){
                if(timeout.current)
                {
                    clearTimeout(timeout.current);
                }
            };
        },
        [current,length]
    );
    
    // useEffect(() => {
    //   
    //     const nextSlideAfter3Seconds = () => {
    //       nextSlide();
    //     };
    
    //     // Start the timer
    //     timeout.current = setInterval(nextSlideAfter3Seconds, 3000);
    
    //     // Clear the timer when the component is unmounted
    //     return () => {
    //       if (timeout.current) {
    //         clearInterval(timeout.current);
    //       }
    //     };
    //   }, [nextSlide]);

   

    // if(!Array.isArray(slides)||slides.length<=0){
    //     return null;
    // }

  return (
    <HeroSection>
        <HeroWrapper>
            {slides.map((slide,index)=>{
return(
<HeroSlide key={index}>
{index===current && (
    <HeroSlider>
        <HeroImage src={slide.image} alt={slide.alt}/>
            <HeroContent css={`padding:20px;`}>
                <h1>{slide.title}</h1>
                <p>{slide.price}</p>
                <Button to="/home"  primary="true" css={`max-width:160px;`}>
                    {slide.label}
                    <Arrow css={`margin-left:8px;`}/>
                </Button>
               
            </HeroContent>
    </HeroSlider>
)}
    
</HeroSlide>
);
            })}
            <SliderButtons>
                <PrevArrow onClick={prevSlide}/>
                <NextArrow onClick={nextSlide}/>
            </SliderButtons>
        </HeroWrapper>
    </HeroSection>

   
  )
}

export default Hero
