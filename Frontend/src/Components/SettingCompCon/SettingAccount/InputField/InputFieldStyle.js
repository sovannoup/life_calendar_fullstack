import styled from "styled-components";

const Container = styled.div`
    /* margin-top: 24px; */
`

const Input = styled.input`
    height: 40px;
    width: calc(100% - 36px);
    border: none;
    /* border-color: ${props => props.borderColor}; */
    border-radius: 5px;
    padding: 0px 18px;
    margin-top: 10px;
    background: rgba(242, 242, 242, 0.5);
    /* background: #F0F0F0; */
    ::placeholder {
       color: #AAB2C8;
   }
   :focus {
        outline: none;
    }
    :disabled {
        background: rgba(242, 242, 242, 0.5);
        color: #AAB2C8
    }
`

const ErrorText = styled.p`
    font-size: 12px;
    color: red;
    padding: 5px 18px;
`

const Label = styled.p`
    font-size: 14px;
    color: #AAB2C8;
`

export {
    Container,
    Input,
    ErrorText,
    Label
}