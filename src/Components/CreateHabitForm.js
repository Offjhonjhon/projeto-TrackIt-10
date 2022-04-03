import styled from "styled-components";
import WeekdayForm from "./WeekdayForm";
import { useState } from "react";
import axios from "axios";

function CreateHabitForm({display, token}) {
    const weekdays = ['D','S', 'T', 'Q', 'Q', 'S', 'S'];
    const [days, setDays] = useState([]);
    const [habitName, setHabitName] = useState('');
    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
    const habit = {
        name: habitName,
        days: days
    }

    function HandleWeekday(day) {
        const newDays = days;
        if(newDays.includes(day)) {
            const index = newDays.indexOf(day);
            newDays.splice(index, 1);
        } else {
            newDays.push(day);
        }
        setDays(newDays);
    }

    function HandleSubmit(e) {
        e.preventDefault();
        const promisse = axios.post(URL, habit, {headers: {'Authorization' : `Bearer ${token}`}});
        promisse.then(response => {
            console.log(response);
        })
        promisse.catch(error => {
            console.log(error);
        })
    }
    
    
    return (
        <Form className="habit-form" display={display} onSubmit={() => HandleSubmit()}>
            <Input 
                value={habitName} 
                className="habit-name" 
                type="text" 
                placeholder="Nome do Hábito" 
                onChange={(e) => {setHabitName(e.target.value)}}
            />
               <WeekdaysContainer>
                {weekdays.map((day, index) => {
                    return <WeekdayForm     
                                key={index} 
                                day={day}
                                callback={() => HandleWeekday(index + 1)}
                            ></WeekdayForm>
                    })}
               </WeekdaysContainer>
            <ButtonsContainer>
                <Button type="submit" className="save">Cancelar</Button>
                <Button className="cancel">Salvar</Button>
            </ButtonsContainer>
        </Form>
    );
}

export default CreateHabitForm;

const Form = styled.form`
    margin-top: 50px;
    
    &.habit-form {
        display: ${props => props.display};
        flex-direction: column;
        width: 340px;
        height: 180px;
        background: #FFFFFF;
        border-radius: 5px;
    }
`
const Button = styled.button`
    width: 84px;
    height: 35px;
    border: none;
    border-radius: 4.63636px;
    font-family: 'Lexend Deca';
    font-size: 15.976px;
    line-height: 20px;
    
    &.save {
        background: #FFFFFF;
        color: #52B6FF;
    }
    &.cancel {
        background: #52B6FF;
        color: #FFFFFF;
    }
`
const WeekdaysContainer = styled.div`
   display: flex;
   margin-top: 8px;
   margin-left: 19px;
   gap: 4px;
   font-size: 19.976px;

   

`

const Input = styled.input`
    width: 303px;
    height: 45px;
    padding-left: 15px;
    margin-top: 18px;
    margin-left : 19px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;

    &.habit-name::placeholder {
        font-family: 'Lexend Deca';
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
    }
`

const ButtonsContainer = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 30px;
    margin-left: 133px;
`



