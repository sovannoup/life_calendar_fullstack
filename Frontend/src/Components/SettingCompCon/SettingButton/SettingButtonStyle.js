import styled from "styled-components";

const Container = styled.button`
    display: flex;
    align-items: center;
    width: 350px;
    height: 72px;
    padding: 16px;
    margin-bottom: 12px;
    border: none;
    background: ${props => props.selected ? `#0799A6` : '#F0F0F0'};
    /* color: ${props => props.selected ? `white` : 'black'}; */
    border-radius: 10px;
    border-color: #F0F0F0;
    cursor: pointer;
    
`


const IconContainer = styled.div`
    display: flex;
    width: 40px;
    height: 40px;
    background: ${props => props.selected ? 'white' : '#CCCCCC'};
    color: ${props => props.selected ? '#0799A6' : 'black'};
    border-radius: 12px;
    margin-right: 18px;
    justify-content: center;
    align-items: center;
    /* align-items: center; */

`

const TextContainer = styled.div`
    width: 228px;
    text-align: left;
    color: ${props => props.selected ? `white` : 'black'};
`

const Display = styled.p`
    font-size: 14px;
    font-weight: bold;
    padding-bottom: 5px;
`

const Description = styled.p`
    font-size: 13px;
`


export {
    Container,
    IconContainer,
    TextContainer,
    Display,
    Description,
}