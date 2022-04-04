import UserContext from "../Context/Context";
import { useContext, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useState } from "react";
import dayjs from 'dayjs/locale/pt-br' 
import TodayHabit from "../Components/Today/TodayHabit";


function Today() {
    const {login} = useContext(UserContext);
    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today'
    const dayjs = require('dayjs') 
    const [habits, setHabits] = useState([]);
    const [done, setDone] = useState([]);

    // function getDone() {
    //     habits.map(habit => {
    //         if(habit.done) {
    //             setDone(done => [...done, habit])
    //         }
    //     })
    //     console.log(done)
    // }
    

    useEffect(() => {
        const promisse = axios.get(URL, {headers: {'Authorization' : `Bearer ${login.token}`}} )
        promisse.then(response => {
            setHabits(response.data)
            // getDone()
        }
        )
        promisse.catch(error => {
            alert(error.response.data.message)
        }
        )
    }, [])
    

    return (
        <Main>
            <H1>{dayjs().locale('pt-br').format('dddd, DD/MM')}</H1>
            <HabitsContainer>
                {habits.map(habit => {
                    return <TodayHabit callback={setDone} key={habit.id} habit={habit} />
                })}
            </HabitsContainer>
        </Main>
    );
}

export default Today;

const Main = styled.main`
   
`

const H1 = styled.h1`
    margin-left: 20px;
    margin-top: 100px;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;

`;
const HabitsContainer = styled.div`
    margin-top: 28px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`;