import { Container, LeftContent, RightContent } from "./HomeScreenStyle";
import Calendar from "../../Components/CalendarCompCon";
// import NoteBox from '../../Components/NoteCompCon';
import WeeklyNote from "../../Components/NoteCompCon";


function HomeScreen() {
  return (
    <Container>
      <LeftContent>
        <Calendar />
      </LeftContent>
      <RightContent>
        <WeeklyNote />
      </RightContent>
    </Container>
  );
}

export default HomeScreen;
