import styled from "styled-components";
function Historic() {
    return (
        <Main>
            <P>Em breve você poderá ver o histórico <br></br> dos seus hábitos aqui!</P>
        </Main>
    );
}

export default Historic;


const Main = styled.main`
    display: flex;
    justify-content: center;
    background: #F5F5F5;
`
const P = styled.p`
    margin-top: 100px;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;

`;