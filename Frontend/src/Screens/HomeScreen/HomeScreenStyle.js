import styled from "styled-components";

const Container = styled.div`
    display: flex;
    /* margin-top: 30px; */
    padding-top: 30px;
    margin-left: 40px;
`

const LeftContent = styled.div`
    flex: 7.5;
    background: white;
    /* height: 90vh; */
    height: calc(100vh - 110px);
    overflow-y: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
        width: 11px;
    }
    ::-webkit-scrollbar-track {
        background: #AAB2C8;
        /* border-right: 1px solid black; */
        border-radius: 10px;
    }
        ::-webkit-scrollbar-thumb {
        background: #F5F6FA; 
        /* margin-top: 3px; */
        border-radius: 10px;
    }
`

const RightContent = styled.div`
    flex: 2.5;
    /* position: fixed; */
    /* display: flex; */
    top: 0;
    left: 0;
    right: 0;
    /* border-left: 1px solid rgba(0,0,0,0.2); */
    padding-left: 40px;
    padding-right: 40px;
    justify-content: center;
    overflow-y: scroll;
    /* height: 80vh; */
    height: calc(100vh - 110px);
    ::-webkit-scrollbar {
        width: 11px;
    }
    ::-webkit-scrollbar-track {
        /* box-shadow: inset 0 0 5px grey;  */
        background: #AAB2C8;
        border-radius: 10px;
        /* width: 30px; */
    }
        ::-webkit-scrollbar-thumb {
        background: #F5F6FA; 
        /* margin-top: 10px; */
        border-radius: 10px;
        /* width: 5px; */
    }
    /* ::-webkit-scrollbar {
        display: none;
    } */
`

export { Container, LeftContent, RightContent }