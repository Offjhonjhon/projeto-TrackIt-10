import {Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import logo from './../assets/Group 8.svg';
import UserContext from "../Context/Context";

function Login() {
    const navigate = useNavigate();
    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    const {setLogin} = useContext(UserContext);
    const requestInfo = {
        email: emailLogin,
        password: passwordLogin
    }
    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login'

    function sendRequest(event) {
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
                        type="email" 
                        placeholder="email" 
                        onChange={e => setEmailLogin(e.target.value)}
                        value={emailLogin}
                        required
                    />
                    <Input 
                        type="password" 
                        placeholder="senha" 
                        onChange={e => setPasswordLogin(e.target.value)}
                        value={passwordLogin}
                        required
                    />
                    <Button type='submit'>Entrar</Button>
                    <Link to="cadastro">Não tem uma conta? Cadastre-se!</Link>
                </Form>
            </Main>
    );
}

export default Login;

const Image = styled.img`
    width: 180px;
    height: 78.38px;
`
const Main = styled.main`
    box-sizing: border-box;
    display: grid;
    place-items: center;
    background: #FFFFFF;
    `
const Form = styled.form`
   display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    gap: 6px;
`
const Input = styled.input`
    width: 303px;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
`
const Button = styled.button`
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border-radius: 4.63636px;
    border: none;
    color: #FFFFFF;
    hover: pointer;
`

