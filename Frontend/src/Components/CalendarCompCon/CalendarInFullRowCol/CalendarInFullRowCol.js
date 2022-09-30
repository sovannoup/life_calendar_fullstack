import CalendarUnit from "../CalendarUnit/CalendarUnit"
import { DisplayInRow, DisplayInCol } from "./CalendarInFullRowColStyle"



function CalendarInRowUnit(black_num, used_num, remain_num, row_num, birthday) {
    let result = []
    for (let i = 0; i < 52; i++) {
        if (black_num > 0) {
            black_num--
            result.push(<CalendarUnit color='blank'  />)
        }
        else if (used_num > 0) {
            used_num--
            result.push(<CalendarUnit key={(row_num + 1) * 52 - 52 + i + 1} color='used' id= {(row_num + 1) * 52 - 52 + i + 1} age= {row_num}  week_num= {i+1} birthday={birthday} />)
        }
        else if (remain_num > 0) {
            remain_num--
            result.push(<CalendarUnit key={(row_num + 1) * 52 - 52 + i + 1} color='remain' id= {(row_num + 1) * 52 - 52 + i + 1} age= {row_num}  week_num= {i+1} birthday={birthday} />)
        }
    }
    return <DisplayInRow key={row_num}>{result}</DisplayInRow>
}


export default function CalendarInFullRowCol({ total_blank, total_used, total_remain, birthday }) {

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
        const row = CalendarInRowUnit(blank_num, used_num, remain_num, i, birthday)
        result.push(row)
    }
    return (
        <DisplayInCol>
            {result}
        </DisplayInCol>
    )
}
