import UserContext from "../Context/Context";
import { useContext, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useState } from "react";
import dayjs from 'dayjs/locale/pt-br' 
import TodayHabit from "../Components/Today/TodayHabit";
import PercentageContext from "../Context/PercentageContext";


function Today() {
    const {login} = useContext(UserContext);
    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today'
    const dayjs = require('dayjs') 
    const [habits, setHabits] = useState([]);
    const [doneList, setDoneList] = useState([]);
    const [updateHabits, setUpdateHabits] = useState(false);
    const {percentage,setPercentage} = useContext(PercentageContext);
    
    function saveDoneList() {
        let doneArray = [];
        habits.map((habit) => {
            if (habit.done) {
                doneList.push(habit.id);
            }
        })
        setDoneList(doneArray);
        
        setPercentage(doneList.length / habits.length * 100);
        
    }
    
    useEffect(() => {
        console.log('passou aq')
        const promisse = axios.get(URL, {headers: {'Authorization' : `Bearer ${login.token}`}} )
        promisse.then(response => {
            setHabits(response.data)
            saveDoneList()
        })
        promisse.catch(error => {
            alert(error.response.data.message)
        })
    }, [updateHabits])
    

    return (
        <Main>
            <H1>{dayjs().locale('pt-br').format('dddd, DD/MM')}</H1>
            <HabitsContainer>
                {habits.map(habit => {
                    return <TodayHabit callback={() => setUpdateHabits(!updateHabits)} key={habit.id} habit={habit} />
                })}
            </HabitsContainer>
        </Main>
    );
}

export default Today;

const Main = styled.main`
   min-height: 100vh;
   padding-bottom: 110px;
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