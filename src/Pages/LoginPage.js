import {Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import logo from './../assets/Group 8.svg';
import UserContext from "../Context/Context";
import {ThreeDots} from 'react-loader-spinner';


function Login() {
    const navigate = useNavigate();
    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    const {setLogin} = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const requestInfo = {
        email: emailLogin,
        password: passwordLogin
    }
    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login'

    function sendRequest(event) {
        setLoading(true);
        event.preventDefault();
        const promisse = axios.post(URL, requestInfo);
        promisse.then(response => {
            setLogin(response.data);
            navigate('/hoje');
        })
        promisse.catch(error => {
            alert(error.response.data.message)
        })
    }

    return(
            <Main>
                <Image src={logo} />
                <Form onSubmit={sendRequest}>
                    <Input 
                        className='input'
                        type="email" 
                        placeholder="email" 
                        onChange={e => setEmailLogin(e.target.value)}
                        value={emailLogin}
                        required
                        disabled={loading}
                    />
                    <Input 
                        className='input'
                        type="password" 
                        placeholder="senha" 
                        onChange={e => setPasswordLogin(e.target.value)}
                        value={passwordLogin}
                        required
                        disabled={loading}
                    />
                    <Button type='submit' disabled={loading}>
                         {loading ?<ThreeDots
                         className='loader'
                         height="45"
                         width="100"
                         color='white'
                         ariaLabel='loading'
                       /> : 'Entrar'}
                      
                     </Button>
                  
                </Form>
                <Link to="cadastro">Não tem uma conta? Cadastre-se!</Link>
            </Main>
    );
}

export default Login;

const Image = styled.img`
    width: 180px;
    height: 178.38px;
    margin-top: 68px;
`
const Main = styled.main`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    place-items: center;
    background: #FFFFFF;
    
    `
const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    gap: 6px;
    margin-top: 33px;
    margin-bottom: 25px;
`
const Input = styled.input`
    width: 303px;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    padding-left: 15px;
    font-family: 'Lexend Deca';
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;

    &.input::placeholder {
        font-family: 'Lexend Deca';
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
    }
`
const Button = styled.button`
    display: grid;
    place-items: center;
    font-family: 'Lexend Deca';
    font-size: 20.976px;
    width: 303px;
    height: 45px;
    background: #52B6FF;
    opacity: ${props => props.disabled ? '0.7' : '1'};
    border-radius: 4.63636px;
    border: none;
    color: #FFFFFF;
    hover: pointer;
    
`

