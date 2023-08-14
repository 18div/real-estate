import styled from 'styled-components';

import {Link} from 'react-router-dom';

export const Button = styled(Link)`
background:${({primary})=>(primary ? `#000d1a` : `CD853F`)};
white-space:nowrap;
outline:none;
border:none;
min-width:100px;
padding-right:20%;
align-item:center;
max-width:20px;
cursor:pointer;
align-item:center;
margin-left:60px;
padding : ${({big}) => (big? '16px 40px':'14px')};
color: ${({primary})=>(primary?'#fff':'#00d1a')};
font-size:${({big})=>(big? '20px':'14px')};
text-decoration:none;

&:hover{
    transform:translateY(-2px);
}
`;