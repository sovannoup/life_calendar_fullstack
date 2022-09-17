import styled from "styled-components";

const Container = styled.div`
    /* width: 347px; */
    /* height: 250px; */
    border: 1px solid #F3F3F3;
    /* background: red; */
    box-shadow: 0px 0px 5px 0px #0000001A;
    margin-bottom: 15px;


`

const Header = styled.div`
    display: flex;
    height: 40px;
    /* background: blue; */
    padding-left: 15px;
    padding-right: 15px;
    align-items: center;
    justify-content: space-between;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom: 2px solid #F3F3F3;
`

const HeaderText = styled.span`
    font-size: 14px;
    color: ${props => props.disabled ? '#C0C0C0' : 'black'}
`

const Body = styled.div`
    /* height: 250px; */
    padding: 15px
`

const TextArea = styled.textarea`
    width: 100%;
    height: 18vh;
    box-shadow: none;
    padding-right: 10px;
    border: none;
    outline: none;
    resize: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;

    ::-webkit-scrollbar{
        width: 10px;
        background: #AAB2C8;
        border-radius: 10px;
        /* margin-left: 10px; */
    };

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #F5F6FA;
        border-radius: 10px;
    }
    ::placeholder {
        font-size: 13px;
    }
`

const Footer = styled.div`
    display: flex;
    justify-content: end;
    margin-top: 10px;
    
`


const DisableDisplayContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 18vh;
    justify-content: space-evenly;
    align-items: center;
`

const DisableDescription = styled.p`
    font-size: 16px;
`

const IconListContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0799A6;
    height: 50px;
`

const ZoomIconContainer = styled.button`
    border: none;
    background: none;
`



export {
    Container,
    Header,
    HeaderText,
    Body,
    TextArea,
    Footer,
    DisableDisplayContainer,
    DisableDescription,
    IconListContainer,
    ZoomIconContainer,
}