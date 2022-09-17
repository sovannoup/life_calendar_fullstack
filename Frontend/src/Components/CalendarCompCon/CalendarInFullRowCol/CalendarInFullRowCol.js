import CalendarUnit from "../CalendarUnit/CalendarUnit"
import { DisplayInRow, DisplayInCol } from "./CalendarInFullRowColStyle"
// import { UsedBox } from "../../../Utils";

// function addDays(date, days) {
//     var result = new Date(date);
//     result.setDate(result.getDate() + days);
//     return result;
// }

// const start_of_week = 'Mon'
// const finish_of_week = 'Sun'

// function first_week_to_date(start_date) {
//     const remaining_day = 7 - start_date.getDay()
//     return addDays(start_date, remaining_day)
// }


// function calendarList(birthday) { 
//     let result = []
//     let id = 1
//     let week_num = 1
//     let start_date = new Date(birthday)
//     let used_box = UsedBox(birthday)
//     let marked = 'used'

//     for (let i = 0; i < 90; i++) {
//         for (let j = 1; j < 53; j++) {
//             week_num = j
//             if (used_box > 0) {
//                 marked = 'used'
//                 used_box -= 1
//             }else {
//                 marked = 'remaining'
//             }
//             if (i === 0 && j === 1) {
//                 result.push({
//                     id: id,
//                     week_num: week_num,
//                     from_date: start_date,
//                     to_date: first_week_to_date(start_date),
//                     marked: marked
//                 })
//                 start_date = first_week_to_date(start_date)
//             } else {
//                 result.push({
//                     id: id,
//                     week_num: week_num,
//                     from_date: addDays(start_date, 1),
//                     to_date: addDays(start_date, 7), 
//                     marked: marked
//                 })
//                 start_date = addDays(start_date, 7)   
//                 id += 1
//             }
//         }
//     }
//     return result
// }


// console.log(calendarList('1999-11-11'))



function CalendarInRowUnit(black_num, used_num, remain_num, row_num) {
    let result = []
    for (let i = 0; i < 52; i++) {
        if (black_num > 0) {
            black_num--
            result.push(<CalendarUnit color='blank'  />)
        }
        else if (used_num > 0) {
            used_num--
            result.push(<CalendarUnit color='used' id= {(row_num + 1) * 52 - 52 + i + 1} age= {row_num}  week_num= {i+1} />)
        }
        else if (remain_num > 0) {
            remain_num--
            result.push(<CalendarUnit color='remain' id= {(row_num + 1) * 52 - 52 + i + 1} age= {row_num}  week_num= {i+1} />)
        }
    }
    return <DisplayInRow>{result}</DisplayInRow>
}


export default function CalendarInFullRowCol({ total_blank, total_used, total_remain }) {
    let result = []
    let blank_num = 0
    let used_num = 0
    let remain_num = 0
    const total_block_in_row = 52
    let i = 0

    for (i; i < 91; i++) {
        // Total blank must be less then 52
        //Assign number to blank_num variable
        if (total_blank > 0) {
            blank_num = total_blank
            total_blank = 0
        }
        else if (total_blank === 0) {
            blank_num = total_blank
        }

        //Assign number to used_num variable
        if (total_used > 0) {
            if (blank_num > 0 && blank_num < 52) {
                let fillup_num = total_block_in_row - blank_num
                if (total_used > fillup_num) {
                    used_num = fillup_num
                    total_used = total_used - fillup_num
                } else {
                    used_num = total_used
                    total_used = 0
                }
            }
            else if (total_used > 52) {
                used_num = 52
                total_used = total_used - 52
            }
            else if (total_used < 52) {
                used_num = total_used
                total_used = 0
            }
        }
        else if (total_used === 0) {
            used_num = total_used
        }

        //Assign number to remain_num variable
        if (used_num + blank_num === 52) {
            remain_num = 0
        }
        else if (total_remain > 0) {
            if (used_num + blank_num > 0 && used_num + blank_num < 52) {
                let fillup_num = total_block_in_row - used_num + blank_num
                if (total_remain > fillup_num) {
                    remain_num = fillup_num
                    total_remain = total_remain - fillup_num
                } else {
                    remain_num = total_remain
                    total_remain = 0
                }
            }

            else if (total_remain > 52) {
                remain_num = 52
                total_remain = total_remain - 52
            }
            else if (total_remain < 52) {
                remain_num = total_remain
                total_remain = 0
            }
        }
        else if (total_remain === 0) {
            remain_num = total_remain
        }
        const row = CalendarInRowUnit(blank_num, used_num, remain_num, i)
        result.push(row)
    }
    return (
        <DisplayInCol>
            {result}
        </DisplayInCol>
    )
}
