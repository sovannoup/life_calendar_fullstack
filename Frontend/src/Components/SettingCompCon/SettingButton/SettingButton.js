import './SettingButton.css'
import {
    Container,
    IconContainer,
    TextContainer,
    Display,
    Description
} from "./SettingButtonStyle"
import 'boxicons'
import { Link, useLocation } from "react-router-dom"


function Icon({ icon, selected }) {
    return (
        <IconContainer selected={selected}>
            {icon}
        </IconContainer>
    )
}

function Text({ display, description, selected }) {
    return (
        <TextContainer selected={selected}>
            <Display>{display}</Display>
            <Description>{description}</Description>
        </TextContainer>
    )
}

export default function SettingButton(props) {
    // const location = useLocation()
    const { onClick, icon, display, description, to, selected } = props
    return (
        <Link to={to} className='setting-link'>
            <Container selected={selected}>
                <Icon 
                    icon={icon} 
                    selected={selected}
                     ></Icon>
                <Text display={display} description={description} selected={selected}></Text>
            </Container>
        </Link>
    )
}