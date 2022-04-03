import styled from "styled-components";
import { useContext, useState } from "react";
import UserContext from "../Context/Context";
import { useNavigate, useLocation } from "react-router-dom";
import logo from './../assets/TrackIt.svg';
import React from "react";


function Header() {
    const {login} = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [display, setDisplay] = useState('flex');

    React.useEffect(() => {
        (location.pathname === '/' || location.pathname === '/cadastro')
          ? setDisplay('none')
          : setDisplay('flex');
    } , [location]);

    return (
            <Head display={display}>
                <Image className="logo" src={logo}/>
                <Image className="user" src={login.image}/>
            </Head>
    );
}

export default Header;

const Head = styled.header`
    display: ${props => props.display};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    align-items: center;
    justify-content: space-between;
    z-index: 10;
`;
const Image = styled.img`
    &.logo {
        width: 97px;
        height: 49px;
        margin-left: 18px;
    }
    &.user {
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
        margin-right: 13px;
    }

`;