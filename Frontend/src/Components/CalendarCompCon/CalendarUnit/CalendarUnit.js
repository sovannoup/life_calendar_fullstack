import { Box } from "./CalendarUnitStyle";
import './CalendarUnit.css'
import { getDateOfISOWeek, getWeekNum } from "../../../Utils";


export default function CalendarUnit(props) {
    const { color, id, age, week_num, birthday } = props
    const birthday_obj = new Date(birthday)
    let current_week_num = 0
    let year = 0
    let start_end_date = {
        start_date: '',
        end_date: ''
    }
    if (color === 'used') {
        current_week_num = week_num - (52 - getWeekNum(birthday_obj))
        // console.log(`++++++++++++++ ${week_num}: ${current_week_num}`)
        year = birthday_obj.getFullYear() + age + 1
        start_end_date = getDateOfISOWeek(current_week_num, year)
    }

    const onClickHandler = () => {

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