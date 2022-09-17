function getWeekNum(date) {
    if (date instanceof Date) {
        // console.log(date)
        const startDate = new Date(date.getFullYear(), 0, 1)
        // console.log(startDate)
        const days = Math.floor((date - startDate) / (24 * 60 * 60 * 1000))
        const weekNumber = Math.ceil(days / 7)
        return weekNumber === 0 ? 52 : weekNumber;
    }
    return null
}

function UsedBox(birthday){
    const current_date = new Date()
    const birthday_weeknum = getWeekNum(new Date(birthday))
    return (52 - birthday_weeknum) + (((current_date.getFullYear() - birthday.getFullYear() - 2) * 52) + getWeekNum(current_date))
}


function getTotal_Blank_Used_Remain_Box(birthday){
    const current_date = new Date()
    let total_blank = 0
    let total_used = 0
    let total_remain = 0

    const birthday_weeknum = getWeekNum(new Date(birthday))

    total_blank = birthday_weeknum - 1
    total_used = (52 - birthday_weeknum) + (((current_date.getFullYear() - birthday.getFullYear() - 1) * 52) + getWeekNum(current_date))
    total_remain = (91 * 52) - (total_blank + total_used)

    return [total_blank, total_used, total_remain]
}


function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}



function getDateOfISOWeek(w, y) {
    var simple = new Date(y, 0, 1 + (w - 1) * 7);
    var dow = simple.getDay();
    var ISOweekStart = simple;
    if (dow <= 4)
        ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
    else
        ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());

    const start_date = ISOweekStart
    const end_date = addDays(start_date, 6)
    return {start_date, end_date};
}


export {
    UsedBox,
    getWeekNum,
    getTotal_Blank_Used_Remain_Box,
    getDateOfISOWeek
}