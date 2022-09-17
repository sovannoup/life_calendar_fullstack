import styled from "styled-components";
import { CalendarUnitColor } from "../../../Utils/Constants/CalendarUnitColor";
import { Size } from "../../../Utils/Constants/Size";


const Box = styled.div`
    width: ${Size.Box.width}px;
    height: ${Size.Box.height}px;
    margin: ${Size.Box.margin}px;
    background: ${props => props.color === 'blank' ? CalendarUnitColor.Blank : props.color === 'used' ? CalendarUnitColor.Used : CalendarUnitColor.Remain};
    /* cursor: pointer; */
`


export { 
    Box,
}