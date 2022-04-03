import UserContext from "../Context/Context";
import { useContext, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import dayjs from 'dayjs/locale/pt-br' 


function Today() {
    const {login} = useContext(UserContext);
    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today'
    const dayjs = require('dayjs') 
    
    useEffect(() => {
        const promisse = axios.get(URL, 
            {headers: {'Authorization' : `Bearer ${login.token}`}} )
        promisse.then(response => {
            console.log(response.data);
        }
        )
        promisse.catch(error => {
            alert(error.response.data.message)
        }
        )
    })
    

    return (
        <main>
            
            <H1>{dayjs().locale('pt-br').format('dddd, DD/MM')}</H1>
        </main>
    );
}

export default Today;

const H1 = styled.h1`
    margin-top: 100px;
`;