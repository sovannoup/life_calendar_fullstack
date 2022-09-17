import styled from "styled-components";


const Container = styled.div`
    display: flex;
    margin-top: 70px;
`

const LeftSide = styled.div`
    /* display: flex; */
    flex: 3;
    justify-content: center;
    /* background: gray; */
`

const RightSide = styled.div`
    flex: 7;
    /* background: yellow; */
`


export {
    Container,
    LeftSide,
    RightSide,
}