import styled from "styled-components";
import {CircularProgressbar} from "react-circular-progressbar";
import {useNavigate, useLocation} from "react-router-dom";
import {useState} from "react";
import React from 'react';
import {useContext} from "react";
import PercentageContext from "../Context/PercentageContext";

function Footer() {
    const {percentage} = useContext(PercentageContext);
    const navigate = useNavigate();
    const location = useLocation();

    const [display, setDisplay] = useState('flex');

    React.useEffect(() => {
        (location.pathname === '/' || location.pathname === '/cadastro')
          ? setDisplay('none')
          : setDisplay('flex');
    } , [location]);

    
    return(
        <FooterContainer display={display}>
             <Button className="habits" onClick={() => {navigate('/habitos')}}>Hábitos</Button>
             <div onClick={() => {navigate('/hoje')}}>
             <StyledProgressbar
                value={percentage}
                text={`Hoje`}
                background
                backgroundPadding={6}
            />
             </div>
             
             <Button className="historic" onClick={() => {navigate('/historico')}}>Histórico</Button>
        </FooterContainer>
    );
}

export default Footer;

const FooterContainer = styled.footer`
    font-family: 'Lexend Deca'; 
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 70px;
    background: #FFFFFF;
    display: ${props => props.display};
    justify-content: center;
    z-index: 10;
    
`
const StyledProgressbar = styled(CircularProgressbar)`
    width: 91px;
    height: 91px;
    position: relative;
    top: -31px;
    
    .CircularProgressbar-path {
        stroke: #FFFFFF;
        stroke-linecap: round;
        transition: stroke-dashoffset 0.5s ease 0s;
    }
    .CircularProgressbar-trail {
        stroke: #52B6FF;
      }
      .CircularProgressbar-text {
        stroke: "#fff";
        fill: #fff;
        font-size: 20px;
        dominant-baseline: middle;
        text-anchor: middle;
      }
      .CircularProgressbar-background {
        fill: #52B6FF;
      }
`;
const Button = styled.button`
    top: 22px;
    font-family: 'Lexend Deca';
    width: 68px;
    height: 22px;
    font-size: 17.976px;
    line-height: 22px;
    color: #52B6FF;
    border : none;
    background: none;

    &.habits {
        position: relative;
        left: -40px;
    }
    &.historic {
        position: relative;
        left: 28px;
`;