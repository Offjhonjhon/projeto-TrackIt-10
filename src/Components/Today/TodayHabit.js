import styled from "styled-components";
import UserContext  from "../../Context/Context";
import axios from "axios";
import {useContext, useState, useEffect} from "react";
import {BsFillCheckSquareFill} from 'react-icons/bs';


function TodayHabit({habit, callback}) {
    const {name, done, highestSequence, currentSequence, id} = habit;
    const [URL, setURL] = useState('');
    const {login} = useContext(UserContext);

    useEffect(() => {
        done 
        ? setURL(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`)
        : setURL(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`)
    } , [handleClick])       
    
    function handleClick() {
       
        const promisse = axios.post(URL, {}, {headers: {'Authorization': `Bearer ${login.token}`}});
        promisse.then(response => {
            callback();
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
            <P className="current">Sequência atual: <Span color={done ? '#8FC549' : '#666666'}>{currentSequence} dias</Span> </P>
            <P className="highest">Seu recorde: {highestSequence} dias</P>
           <Div>
                <BsFillCheckSquareFill className="icon" fontSize={69} color={done ? '#8FC549' : '#EBEBEB'} />
           </Div>
            
        </Today>);
}

export default TodayHabit;


const Today = styled.div`
    position: relative;
    padding-top: 13px;
    width: 340px;
    height: 94px;
    background: #FFFFFF;
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

const Div = styled.div`
    position: absolute;
    top: 13px;
    right: 13px;  
    
`
const Span = styled.span`
    color: ${props => props.color};
`





