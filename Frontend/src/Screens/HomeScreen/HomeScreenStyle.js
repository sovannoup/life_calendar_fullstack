import styled from "styled-components";

const Container = styled.div`
    display: flex;
    margin-top: 30px;
    margin-left: 40px;
`

const LeftContent = styled.div`
    flex: 7.5;
    background: white;
`

const RightContent = styled.div`
    flex: 2.5;
    /* display: flex; */
    border-left: 1px solid rgba(0,0,0,0.2);
    padding-left: 40px;
    padding-right: 40px;
    justify-content: center;
`

export {Container, LeftContent, RightContent}