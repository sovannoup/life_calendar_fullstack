import {
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
    MeasurementLabelText,
    HorizontalLabel,
    VerticalLabel,
    FlipText,
} from "./CalendarMeasurementStyle"


function WeeklyMeasurement({ direction }) {
    let measurement = [1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
    if (direction === 'vertical') {
        measurement = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90]
    }
    return (
        measurement.map((num, index) => (
            <MeasurementUnit key={num} index={index} direction={direction}>{num}</MeasurementUnit>
        ))
    )
}

export default function CalendarMeasurement({ children }) {
    return (
        <CalendarWithMeasurementContainer>
            <UpperContainer>
                <UpperLabelContainer>
                    <HorizontalLabel>
                        <MeasurementLabelText>Week of Year</MeasurementLabelText>
                        {/* <FlipText>Week of Year</FlipText> */}
                        <div>
                            <svg width="300" height="25" viewBox="0 0 200 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M115.119 7.61852C115.46 7.27681 115.46 6.72279 115.119 6.38108L109.55 0.812636C109.209 0.470929 108.655 0.470931 108.313 0.812641C107.971 1.15435 107.971 1.70837 108.313 2.05008L113.263 6.99981L108.313 11.9496C107.971 12.2913 107.971 12.8453 108.313 13.187C108.655 13.5287 109.209 13.5287 109.55 13.187L115.119 7.61852ZM3.38159e-06 7.87524L114.5 7.8748V6.1248L-3.38159e-06 6.12524L3.38159e-06 7.87524Z" fill="#002834" />
                            </svg>
                        </div>
                    </HorizontalLabel>
                </UpperLabelContainer>
            </UpperContainer>
            <LowerContainer>
                <LowerLabelContainer>
                    <VerticalLabel>
                        <div>
                            <svg 
                                width="300" 
                                height="20" 
                                viewBox="0 0 200 14" 
                                transform='rotate(-180)' 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M115.119 7.61852C115.46 7.27681 115.46 6.72279 115.119 6.38108L109.55 0.812636C109.209 0.470929 108.655 0.470931 108.313 0.812641C107.971 1.15435 107.971 1.70837 108.313 2.05008L113.263 6.99981L108.313 11.9496C107.971 12.2913 107.971 12.8453 108.313 13.187C108.655 13.5287 109.209 13.5287 109.55 13.187L115.119 7.61852ZM3.38159e-06 7.87524L114.5 7.8748V6.1248L-3.38159e-06 6.12524L3.38159e-06 7.87524Z" fill="#002834" />
                            </svg>
                        </div>
                        <FlipText>Age</FlipText>
                    </VerticalLabel>
                </LowerLabelContainer>

                <CalendarWithMeasurementUnitContainer>
                    <VerticalMeasurement>
                        <WeeklyMeasurement direction='vertical' />
                    </VerticalMeasurement>
                    <HorizontalMeasurementAndCalendar>
                        <HorizontalMeasurement>
                            <WeeklyMeasurement direction='horizontal' />
                        </HorizontalMeasurement>
                        <CalendarUnderMeasurement>
                            {children}
                        </CalendarUnderMeasurement>
                    </HorizontalMeasurementAndCalendar>
                </CalendarWithMeasurementUnitContainer>
            </LowerContainer>
        </CalendarWithMeasurementContainer>
    )
}

// export default function CalendarMeasurement({ children }) {
//     return (
//         <div>
//         <VerticalLabel>
//             <div>
//                 <svg width="300" height="20" viewBox="0 0 200 14" transform='rotate(-180)' fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M115.119 7.61852C115.46 7.27681 115.46 6.72279 115.119 6.38108L109.55 0.812636C109.209 0.470929 108.655 0.470931 108.313 0.812641C107.971 1.15435 107.971 1.70837 108.313 2.05008L113.263 6.99981L108.313 11.9496C107.971 12.2913 107.971 12.8453 108.313 13.187C108.655 13.5287 109.209 13.5287 109.55 13.187L115.119 7.61852ZM3.38159e-06 7.87524L114.5 7.8748V6.1248L-3.38159e-06 6.12524L3.38159e-06 7.87524Z" fill="#002834" />
//                 </svg>
//             </div>
//             <MeasurementLabelText>Age</MeasurementLabelText>
//         </VerticalLabel>
//         <Test></Test>
//         </div>
//     )
// }