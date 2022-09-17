import { Box } from "./CalendarUnitStyle";
import './CalendarUnit.css'
import { getDateOfISOWeek, getWeekNum } from "../../../Utils";


const birthday = new Date('1999-11-11')

export default function CalendarUnit(props) {
    const { color, id, age, week_num } = props
    let current_week_num = 0
    let year = 0
    let start_end_date = {
        start_date: '',
        end_date: ''
    }
    if (color === 'used') {
        current_week_num = week_num - (52 - getWeekNum(birthday))
        console.log(`++++++++++++++ ${week_num}: ${current_week_num}`)
        year = birthday.getFullYear() + age + 1
        start_end_date = getDateOfISOWeek(current_week_num, year)
    } else {
        console.log('========================= Else condition')
    }
    return (
        <div className="tooltip" onClick={() => color === 'used' ? alert(`ID: ${id}`) : null} >
            {
                color === 'used' ? (
                    <div className="tooltipText" >
                        <h3 style={{ marginBottom: '10px' }}>Age {age} Week {week_num}</h3>
                        <p>{start_end_date.start_date.toDateString()} - {start_end_date.end_date.toDateString()}</p>
                    </div>
                ) : null
            }
            <Box color={color}></Box>
        </div>
    )
}