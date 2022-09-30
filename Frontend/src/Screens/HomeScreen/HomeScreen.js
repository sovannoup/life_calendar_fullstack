import { Container, LeftContent, RightContent } from "./HomeScreenStyle";
import Calendar from "../../Components/CalendarCompCon";
// import NoteBox from '../../Components/NoteCompCon';
import WeeklyNote from "../../Components/NoteCompCon";
import { useState, useEffect, useContext } from "react";
import UserAPI from "../../api/user";
import { userContext } from "../../Utils/userContext";
import { dateStringReverse } from "../../Utils";
import DateModelComp from "../../Components/DateModelComp/DateModelComp";




function HomeScreen() {
  const [weeklyNote, setWeeklyNote] = useState()
  const [isTodayNote, setIsTodayNote] = useState(false)
  const [isPopup, setIsPopup] = useState(false)

  const { setUserInfo } = useContext(userContext)

  const isToken =
    sessionStorage.birthday === undefined && localStorage.token === undefined && sessionStorage.token === undefined;

  const today = new Date();
  const firstDay = new Date(today.setDate(today.getDate() - today.getDay() + 1));
  const lastDay = new Date(today.setDate(today.getDate() - today.getDay() + 7));


  const body = {
    startDate: dateStringReverse(firstDay),
    endDate: dateStringReverse(lastDay)
  }

  // console.log("Body: ", body)

  useEffect(() => {
    const data = UserAPI.getHomePage(body)
    data
      .then(result => {
        let userData = result.data.result
        setUserInfo(userData.userInfo)
        console.log(result)
        setWeeklyNote(result.data.result.notes)
        setIsTodayNote(userData.isTodayNote)
      })
      .catch(error => console.log("Error Home Page: ", error))

  }, [])

  return (
    <Container>

      

      <LeftContent>
        <Calendar />
      </LeftContent>
      <RightContent>
        <WeeklyNote
          weeklyNote={weeklyNote || []}
          isTodayNote={isTodayNote}
          setIsTodayNote={setIsTodayNote} />
      </RightContent>

      <DateModelComp isToken={isToken} setIsPopup={setIsPopup} />
    </Container>
  );
}

export default HomeScreen;