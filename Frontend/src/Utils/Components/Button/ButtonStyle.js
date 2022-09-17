import styled from "styled-components";

const ButtonComp = styled.button`
    display: flex;
    cursor: pointer;
    padding: 12px 16px 12px 16px;
    /* margin-right: 16px; */
    font-size: ${props => props.size === 'sm' ? '13px' : props.size === 'md' ? '13px' : props.size === 'lg' ? '14px' : null};;
    height: ${props => props.size === 'sm' ? '20px' : props.size === 'md' ? '30px' : props.size === 'lg' ? '44px' : null};
    /* color: #0799A6; */
    color: ${props => props.textColor ? props.textColor : props.noBorder ? '#999999' : '#0799A6'};
    border-radius: 8px;
    border-width: ${props => props.noBorder ? '0px' : '1px'};
    border-color: #0799A6;
    border-style: solid;
    /* background: '#fffff'; */
    background-color: #ffff;
    :disabled {
        color: #999999;
        background: #ffff;
        border-color: #D9D9D9
    };
    :hover:enabled {
        color: ${props => props.noBorder ? '#0799A6' : '#ffff'};
        background: ${props => props.noBorder ? null : '#0799A6'};
        border-color: #0799A6 ;
    }
    justify-content: center;
    align-items: center;

`

export {ButtonComp}