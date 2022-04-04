import styled from "styled-components";
import UserContext  from "../../Context/Context";
import axios from "axios";
import {useContext, useState, useEffect} from "react";
import {BsFillCheckSquareFill} from 'react-icons/bs'


function TodayHabit({habit}) {
    const {name, done, highestSequence, currentSequence, id} = habit;
    const [URL, setURL] = useState('');
    const [update, setUpdate] = useState(false);
    const {login} = useContext(UserContext);

    useEffect(() => {
        done 
        ? setURL(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`)
        : setURL(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`)
    } , [update])       
    
    function handleClick() {
        console.log(login.token)
        console.log(URL);
        const promisse = axios.post(URL, {headers : {'Authorization' : `Bearer ${login.token}`}})

        setUpdate(!update)
        promisse.then(response => {
            console.log(response.data)
        })
        promisse.catch(error => {
            alert(error.response.data.message)
        })
    }

    return(
        <Today
            background={done ? 'green' : '#FFFFFF'}
            onClick={() => {handleClick()}}
        >
            <P className="name">{name}</P>
            <P className="current">Sequência atual: {currentSequence} dias</P>
            <P className="highest">Seu recorde: {highestSequence} dias</P>
            <BsFillCheckSquareFill className="icon" />
        </Today>);
}

export default TodayHabit;


const Today = styled.div`
    padding-top: 13px;
    width: 340px;
    height: 94px;
    background: ${props => props.background};
    border-radius: 5px;
    
`
const P = styled.p`
    margin-left: 15px;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;

    &.name {
        font-family: 'Lexend Deca';
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        margin-bottom: 7px;
    }
`





