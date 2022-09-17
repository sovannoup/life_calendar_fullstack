import styled from "styled-components";
import { Size } from "../../../Utils/Constants/Size";


const MeasurementUnit = styled.span`
    margin-bottom: ${props =>
        props.direction === 'horizontal' ? `0px` // If horizontal margin-bottom: 0px;
            : props.index === 0 ? `${Size.Box.width * 5.5 + Size.Box.margin * 5}px` // If index position 0 
                : props.index === 19 ? `0px` // If index in last position
                    : `${Size.Box.width * 5 + Size.Box.margin * 6.8}px`}; //Index position middle

    margin-right: ${props =>
        props.direction === 'vertical' ? `0px`
            : props.index === 0 ? `${Size.Box.width * 4 + Size.Box.margin * 6.5}px`
                : props.index === 10 ? `0px`
                    : `${Size.Box.width * 5 + Size.Box.margin * 6.7}px`};
    /* margin-bottom: 100px; */
    /* padding-bottom: ${props => props.direction === 'horizontal' ? `0px` : `30px`}; */
    /* background: yellow; */
    font-size: 12px;
`

const CalendarWithMeasurementContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const UpperContainer = styled.div`
    flex: 0.5;
    padding-left: 10px;
`
const LowerContainer = styled.div`
    display: flex;
    /* flex: 9.5, */
    /* background: gray; */
    
`

const UpperLabelContainer = styled.div`
    
`

const LowerLabelContainer = styled.div`
    /* flex-basis: 30px;
    flex-grow: 0;
    flex-shrink: 0; */
    margin-right: 10px;
    width: 30px;
    /* background: gray; */
`

const CalendarWithMeasurementUnitContainer = styled.div`
    display: flex;
    flex: 9.5;
`

const VerticalMeasurement = styled.div`
    display: flex;
    flex: 0.1;
    flex-direction: column;
    margin-top: ${Size.Box.height * 1.1}px;
    /* padding-top: 19px; */
    /* background: yellow; */
`
const HorizontalMeasurementAndCalendar = styled.div`
    flex: 9.9;
    flex-direction: column;
    /* background: gray; */
`
const HorizontalMeasurement = styled.div`
    display: flex;
    flex: 0.5;
    flex-direction: row;
    margin-left: 7px;
    /* background: red; */
`

const CalendarUnderMeasurement = styled.div`
    flex: 9.5

`

const HorizontalLabel = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
`
const VerticalLabel = styled.div`
    /* position: relative; */
    /* display: flex; */
    /* -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg); */
    transform: rotate(-90deg) translateX(-325px);
    z-index: -5;

    display: flex;
    flex-direction: row;
    /* width: 30px; */
    /* flex-wrap: wrap; */
    /* margin-top: 20px;
    margin-right: 10px; */
    /* background: yellow; */
`

const MeasurementLabelText = styled.span`
    font-size: 20px;
    margin-right: 20px;
    
`

const FlipText = styled.div`
    font-size: 20px;
    /* transform: rotate(-90deg); */
    /* background: yellow; */
    margin-left: 20px;
`


export {
    MeasurementUnit,
    CalendarWithMeasurementContainer,
    UpperContainer,
    UpperLabelContainer,
    LowerContainer,
    LowerLabelContainer,
    CalendarWithMeasurementUnitContainer,
    VerticalMeasurement,
    HorizontalMeasurementAndCalendar,
    HorizontalMeasurement,
    CalendarUnderMeasurement,
    HorizontalLabel,
    VerticalLabel,
    MeasurementLabelText,
    FlipText,
}