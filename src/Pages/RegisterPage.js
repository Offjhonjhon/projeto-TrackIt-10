import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

import styled from 'styled-components';
import logo from './../assets/Group 8.svg';

function Register() {
    const [emailRegister, setEmailRegister] = useState('');
    const [passwordRegister, setPasswordResgiter] = useState('');
    const [nameRegister, setNameRegister] = useState('');
    const [photoRegister, setPhotoRegister] = useState('');
    const requestInfo = {
        email: emailRegister,
        name: nameRegister,
        image: photoRegister,
        password: passwordRegister
    }
    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up'
    const navigate = useNavigate();

    function sendRequest(event) {
        event.preventDefault();
        const promisse = axios.post(URL, requestInfo);
        promisse.then(response => {
            console.log(response.data);
            navigate('/');
        })
        promisse.catch(error => {
            alert(error.response.data.message)
        })
    }
    return (
        <Main>
            <Image src={logo} />
            <Form onSubmit={sendRequest}>
                <Input 
                    type="email" 
                    placeholder="email" 
                    onChange={e => setEmailRegister(e.target.value)} 
                    value={emailRegister}
                    required
                />
                <Input 
                    type="password" 
                    placeholder="senha" 
                    onChange={e => setPasswordResgiter(e.target.value)} 
                    value={passwordRegister}
                    required
                />
                <Input 
                    type="text" 
                    placeholder="nome" 
                    onChange={e => setNameRegister(e.target.value)} 
                    value={nameRegister}
                    required
                />
                <Input 
                    type="url" 
                    placeholder="foto" 
                    onChange={e => setPhotoRegister(e.target.value)} 
                    value={photoRegister}
                    required
                />
                <Button type='submit'>Entrar</Button>
                <Link to="/">Já tem uma conta? Faça login!</Link>
            </Form>
        </Main>
    );
}

export default Register;

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
`



