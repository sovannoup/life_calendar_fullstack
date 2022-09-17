import styled from "styled-components"

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

const ZoomIconContainer = styled.button`
    border: none;
    background: none;
`

const Content = styled.p`
    /* width: 100%;
    word-wrap: break-word;
    display: inline-block; */
`

const Image = styled.div`
    margin-top: 10px;
`

const SeeMore = styled.span`
    color: #0799A6;
    cursor: pointer;
    :hover {
        
    }
`

export {
    Container,
    Header,
    HeaderText,
    Body,
    ZoomIconContainer,
    Content,
    Image,
    SeeMore
}