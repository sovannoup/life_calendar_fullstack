import styled from "styled-components";

const Container = styled.div`
    display: flex;
    height: 100%;
    margin-right: 90px;
`

const Separator = styled.div`
    width: 1px;
    height: calc(100vh - 150px);
    background: #F0F0F0;
    /* margin-right: 70px; */
    /* left: 10px */
    position: fixed;
`

const SettingContainer = styled.div`
    width: 100%;
    margin-left: 70px;
    overflow-y: auto;
`

const Title = styled.h3`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 47px;
`

const Description = styled.h4`
    font-size: 18px;
    font-weight: bold;
`

const AvatarContainer = styled.div`
    margin-top: 10px;
    /* margin-bottom: 10px; */

`

const AvatarText = styled.p`
margin-bottom: 10px;
    font-size: 12px;
    color: rgba(0, 16, 20, 6.5)
`

const AvatarAndButton = styled.div`
    display: flex;
    align-items: center;
`


const Avatar = styled.div`
    width: 88px;
    height: 88px;
    border-radius: 16px;
    background: #F5F6FA;
    margin-right: 16px;
`



const Footer = styled.div`
    display: flex;
    justify-content: end;
    margin-bottom: 60px;
    margin-top: 20px;
`

export {
    Container,
    Separator,
    SettingContainer,
    Title,
    Description,
    AvatarContainer,
    AvatarText,
    AvatarAndButton,
    Avatar,
    Footer
}