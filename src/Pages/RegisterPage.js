import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {ThreeDots} from 'react-loader-spinner';
import styled from 'styled-components';
import logo from './../assets/Group 8.svg';

function Register() {
    const [emailRegister, setEmailRegister] = useState('');
    const [passwordRegister, setPasswordResgiter] = useState('');
    const [nameRegister, setNameRegister] = useState('');
    const [photoRegister, setPhotoRegister] = useState('');
    const [loading, setLoading] = useState(false);
    const requestInfo = {
        email: emailRegister,
        name: nameRegister,
        image: photoRegister,
        password: passwordRegister
    }
    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up'
    const navigate = useNavigate();

    function sendRequest(event) {
        setLoading(true);
        event.preventDefault();
        const promisse = axios.post(URL, requestInfo);
        promisse.then(response => {
            console.log(response.data);
            navigate('/');
        })
        promisse.catch(error => {
            alert(error.response.data.message)
            setLoading(false);
        })
    }
    return (
        <Main>
            <Image src={logo} />
            <Form onSubmit={sendRequest}>
                <Input 
                    className='input'
                    type="email" 
                    placeholder="email" 
                    onChange={e => setEmailRegister(e.target.value)} 
                    value={emailRegister}
                    required
                    disabled={loading}
                />
                <Input 
                    className='input'
                    type="password" 
                    placeholder="senha" 
                    onChange={e => setPasswordResgiter(e.target.value)} 
                    value={passwordRegister}
                    required
                    disabled={loading}
                />
                <Input 
                    className='input'
                    type="text" 
                    placeholder="nome" 
                    onChange={e => setNameRegister(e.target.value)} 
                    value={nameRegister}
                    required
                    disabled={loading}
                />
                <Input 
                    className='input'
                    type="url" 
                    placeholder="foto" 
                    onChange={e => setPhotoRegister(e.target.value)} 
                    value={photoRegister}
                    required
                    disabled={loading}
                />
                <Button type='submit'> 
                    {loading ?<ThreeDots
                         className='loader'
                         height="45"
                         width="100"
                         color='white'
                         ariaLabel='loading'
                       /> : 'Entrar'}</Button>
            </Form>
            <Link className='link' to="/">Já tem uma conta? Faça login!</Link>
        </Main>
    );
}

export default Register;

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
    margin-top: 33px;
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    gap: 6px;
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
    border-radius: 4.63636px;
    border: none;
    color: #FFFFFF;
    hover: pointer;
`



