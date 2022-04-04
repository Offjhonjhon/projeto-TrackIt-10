import styled from "styled-components";
function WeekDay({day, selected}) {
    return(
       selected 
       ? <Day className="selected">{day}</Day>
       : <Day className="not-selected">{day}</Day>
    );
}

export default WeekDay;

const Day = styled.div`
    display: grid;
    place-items: center;
    width: 30px;
    height: 30px;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;

    &.selected {
        background: #CFCFCF;
        color: #FFFFFF;
    }
    &.not-selected {
        background: #FFFFFF;
        color: #DBDBDB;
    }

`;