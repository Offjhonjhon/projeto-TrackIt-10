import styled from "styled-components";
import WeekDay from "./WeekDay";
import { useContext, useState, useEffect } from "react";
import UserContext from "../../Context/Context";
import axios from "axios";
import trash from "./../../assets/trash.svg";


function Habit({habit, callback}) {
    const {login} = useContext(UserContext);
    const {token} = login;
    const weekdays = {0 : 'D',1 : 'S',2 : 'T',3 : 'Q',4 : 'Q',5 : 'S',6 : 'S'};
    const [habitState, setHabitState] = useState(true);
    const {days} = habit;
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}`;

    function HandleDelete() {
        const confirm = window.confirm('Deseja realmente excluir este hábito?');
        if(confirm) {
            const promisse = axios.delete(URL, 
                {headers: {'Authorization' : `Bearer ${token}`}})
            promisse.then(response => {
                callback();
            })
            promisse.catch(error => {
                console.log(error);
            })
        }
    }

    return (
       <HabitContainer>
           <P>{habit.name}</P>
            <WeekdaysContainer>
                {Object.keys(weekdays).map(day => {
                  return (
                      days.includes(day * 1)  
                      ? <WeekDay key={day} day={weekdays[day]} selected={true} /> 
                      : <WeekDay key={day} day={weekdays[day]} selected={false} />
                  )
                })}
            </WeekdaysContainer>
            <Image src={trash} onClick={() => {HandleDelete(); setHabitState(!habitState)}}></Image>
       </HabitContainer>
    );
}

export default Habit;

const HabitContainer = styled.div`
    position: relative;
    width: 340px;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    padding-left: 15px;
    padding-top: 13px;
`
const P = styled.p`
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
`

const WeekdaysContainer = styled.div`
    display: flex;
    gap: 4px;
    margin-top: 10px;
`
const Image = styled.img`
    position: absolute;
    right: 13.5px;
    top: 16.5px;
    width: 13px;
    height: 15px;
`;