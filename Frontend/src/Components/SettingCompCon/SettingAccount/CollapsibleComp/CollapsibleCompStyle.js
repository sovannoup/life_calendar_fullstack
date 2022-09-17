import styled from "styled-components";


const CloseTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`

const IconContainer = styled.div`
    display: flex;
    justify-content: end;
`

const OpenCloseIcon = styled.div`
    display: flex;
    width: 20px;
    height: 20px;
    background: ${props => props.background ? '#0799A6' : '#AAB2C8'} ;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    color: white;
`
const TitleContainer = styled.div`

`

const Title = styled.h2`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
`

const Description = styled.p`
    font-size: 12px;
    font-weight: regular;
`

export {
    CloseTitleContainer,
    IconContainer,
    OpenCloseIcon,
    TitleContainer,
    Title,
    Description,
}