import React from 'react'
import styled from 'styled-components';

import { menuData } from '../data/MenuData';
import { Button } from './Button';
import {FaBars} from 'react-icons/fa';
//import {useState} from "react-router-dom";
import { Link } from 'react-router-dom';

const Nav=styled.nav`
height:30px;
display:flex;
justify-content:space-between;
z-index:1;
${'' /* background:red; */}
position:absolute;
background:transparent;
padding:1rem 2rem;
margin: 0px;
width:94%;
margin-left:50px;
top:0;
`;


const Logo=styled(Link)`
color:black;
display:flex;
align-items:center;
padding: 0 1rem;
cursor:pointer;
height:100%;
font-style:italic;
text-decoration:none;
`;


const MenuBars=styled(FaBars)`


@media screen and (max-width:768px){
   
    display:block;

   
    height:40px;
    z-index:20;
    width:40px;
    cusor:pointer;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-50%,25%);

}
@media screen and (min-width:768px)
{
    display:none;
}
`;
const NavMenu=styled.div`
display:flex;
align-items:center;
@media screen and (max-width:768px){
    display:none;
}
`;

const NavBtn=styled.div`
display:flex;
align-items:center;
margin-right:24px;

@media screen and (max-width:768px){
    display:none;
}
`;

const NavMenuLinks=styled(Link)`
color:black;
display:flex;
align-items:center;
padding: 0 1rem;
cursor:pointer;
height:100%;
font-style:italic;
text-decoration:none;
`;

const Navbar = () => {
  // const navigate = useNavigate();

  // const navigateToAbout = () => {
  //   navigate('/about');
  // };
  // const [showContact, setShowContact] = useState(false);

  // const handleContactClick = () => {
  //   setShowContact(true);
  // };

  const navigateToAbout = () => {
    window.location.href = '/contact'; // Navigates to the /about path
  };

    
  return (
      
    <Nav>
    <Logo to="/">ELIXIR</Logo>
    <MenuBars/>
    <NavMenu>
        {menuData.map((item,index)=>(
          <NavMenuLinks to={item.link} key={index} >
            {item.title}
          </NavMenuLinks>
        ))}
    </NavMenu>

    <NavBtn>
   
          {/* <Button primary="true" onClick={handleContactClick}>
            Contact Us
          </Button> */}
          <Button primary="true" onClick={navigateToAbout} >
            Contact Us
          </Button>
       
       
    </NavBtn>
    </Nav>


  )
};

export default Navbar;