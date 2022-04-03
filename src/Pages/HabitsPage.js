import styled from "styled-components";
import {useState, useEffect} from "react";
import axios from "axios";
import {useContext} from "react";
import UserContext from "../Context/Context";
import Habit from "../Components/Habit";
import CreateHabitForm from "../Components/CreateHabitForm";

function Habits() {
    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
    const {login} = useContext(UserContext);
    const [pageState, setPageState] = useState('');
    const [update, setUpdate] = useState(false);
    const [habits, setHabits] = useState([]);
    const [display, setDisplay] = useState('none');

    useEffect(() => {
        const promisse = axios.get(URL, 
            {headers: {'Authorization' : `Bearer ${login.token}`}})

        promisse.then(response => {
            setHabits(response.data)
            response.data.length === 0 ? setPageState('empty') : setPageState('full');
        })
        promisse.catch(error => {
            console.log(error);
        })
        
    } , [update]);

    return (
        pageState === 'empty' 
            ?   
                    <Main>
                        <Div className="add-habit">
                            <P className="habits">Meus Hábitos</P>
                            <Button onClick={() => setDisplay('flex')}>+</Button>
                            <P className="empty-habits">Você não tem nenhum hábito cadastrado ainda.
                                Adicione um hábito para começar a trackear!</P>
                        </Div>
                        <CreateHabitForm token={login.token} display={display}/>
                    </Main>
                
            :   
                <Main>
                    <Div className="add-habit">
                        <P className="habits">Meus Hábitos</P>
                        <Button onClick={() => setDisplay('flex')}>+</Button>
                    </Div>
                    <CreateHabitForm token={login.token} display={display}/>
                    <HabitsContainer>
                            {habits.map(habit => {
                                return <Habit key={habit.id} habit={habit} callback={() => setUpdate(!update)}/>
                            })}
                    </HabitsContainer>

                </Main>
    );
}

export default Habits;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Div = styled.div`
    &.add-habit {
        postion: relative;
        margin-top: 98px;
    }
`
const P = styled.p`
    &.habits {
        position: absolute;
        left: 17px;
        width: 170px;
        height: 29px;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    &.empty-habits {
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
        margin-left : 17px;
        margin-right: 20px;
        padding-top: 60px;
        
    }
`

const Button = styled.button`
    position: absolute;
    right: 30px;
    width: 40px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    border: none;
    color: #FFFFFF;
    font-size: 20px;
    font-width: bold;
    display: grid;
    place-items: center;
`;
const HabitsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    place-items: center;
    grid-gap: 20px;
    margin-top: 50px;
    width: 100vw;

`