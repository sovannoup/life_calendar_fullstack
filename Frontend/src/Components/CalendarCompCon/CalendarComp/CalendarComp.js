import { Container } from "./CalendarCompStyle";
import { getTotal_Blank_Used_Remain_Box } from "../../../Utils";
import CalendarInFullRowCol from "../CalendarInFullRowCol/CalendarInFullRowCol";
import CalendarMeasurement from "../CalendarMeasurement/CalendarMeasurement";

const birthday = new Date('1999-11-11')


function CalendarMain() {
    const [total_blank, total_used, total_remain] = getTotal_Blank_Used_Remain_Box(new Date(birthday))
    return (
        <CalendarMeasurement>
            <CalendarInFullRowCol
                // total_blank={total_blank} 
                total_used={total_used}
                // total_used={1} 
                total_remain={total_remain + total_blank}  
                />
        </CalendarMeasurement>
    )
}


export default function Calendar() {
    return (
        <Container>
            <CalendarMain />
        </Container>
    )
}