import React from 'react';
import styled from 'styled-components';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import {FaTimes} from 'react-icons/fa';
const DropDownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #cd853f;
  display: grid;
  align-items: center;
  
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({isOpen})=>(isOpen?'1':'0')};
  top: ${({isOpen})=>(isOpen?'0':'-100%')};
`;

const Icon=styled.div`
position:'absolute';
top:1.2rem;
right:1.5rem;
background:transparent;
font-size:2rem;
cursor:pointer;
outline:none;
`;
const CloseIcon=styled(FaTimes)`
color:#000dla
`;
const DropdownWrapper =styled.div``;
const DropdownMenu=styled.div`
display:grid;
grid-template-columns:1fr;
grid-template-rows:repeat(4,60px);
text-align:center;
margin-bottom:4rem; 
`;
const DropDownLink=styled.div`
display:flex;
justify-content:center;
align-items:center;
color:#fff;
font-size:1.5rem;
text-decoration:none;
cursor:pointer;
transition:0.2 ease-in-out;

&:hover{
    color:black;
}
`;
const BtnWrap=styled.div`
display:flex;
justify-content:center;
`;


const Dropdown = ({isOpen,toggle}) => {
  return (
    <DropDownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
            {menuData.map((item,index)=>(
                <DropDownLink t0={item.link} key={index}>
                    {item.title}
                </DropDownLink>
            ))}
        </DropdownMenu>
        <BtnWrap>
            <Button primary="true" round="true" big="true" to="/contact">
            ContactUs
            </Button>
        </BtnWrap>
      </DropdownWrapper>
    </DropDownContainer>
  );
};

export default Dropdown;
