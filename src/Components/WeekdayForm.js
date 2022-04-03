import styled from "styled-components";
import { useState } from "react";
function WeekdayForm({day, callback}) {
    const [selected, setSelected] = useState(false);

    return(
            <Weekday 
                key={day}
                className={selected ? 'selected' : 'not-selected'}
                onClick={() => {setSelected(!selected); callback()}}
            >{day}</Weekday>
    );
}
export default WeekdayForm;

const Weekday = styled.div`
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;

    &.not-selected {
        color: #DBDBDB;
   }
   &.selected {
        background: #CFCFCF;
        color: #FFFFFF;
   }
`
