import {
  Container,
  Header,
  HeaderText,
  Body,
  TextArea,
  Footer,
  DisableDisplayContainer,
  DisableDescription,
  IconListContainer,
  ZoomIconContainer,
} from "./DailyMiniNoteInputStyle";
import Button from "../../../Utils/Components/Button/Button";
import { useState, useContext } from "react";
import "boxicons";
import "./DailyMiniNoteInputStyle.css";
import ModalTextNote from "../ModalTextNote/ModalTextNote";
import iconList from "../../../Utils/Constants/IconList";
import Note from "../../../api/note";
import { userContext } from "../../../Utils/userContext";
import { dateStringReverse} from "../../../Utils";

function DisableDisplay({ setIsDisable, handleSave }) {
  return (
    <DisableDisplayContainer>
      <DisableDescription>Write a note or choose your mood for today</DisableDescription>
      <IconListContainer>
        {iconList.map((item, index) => (
          <i key={item.name} class={`bx bx-${item.icon} bx-style`}
            onClick={() => handleSave(item.message)} />
        ))}
      </IconListContainer>
      <Button label='Take Note' size='lg' onClick={() => setIsDisable(false)} />
    </DisableDisplayContainer>
  )
}

export default function DailyMiniNoteInput({setTodayNote, setIsTodayNote }) {
  const { userInfo } = useContext(userContext)
  const [isDisable, setIsDisable] = useState(true);
  const [note, setNote] = useState("");
  const [open, setOpen] = useState(false);


  function handleSave(message) {
    const today = new Date()
    let thisDay = new Date()
    const firstDay = new Date(thisDay.setDate(thisDay.getDate() - thisDay.getDay() + 1));
    // setMessage(message);
    setIsTodayNote(true);
    console.log("Today: ", today)
    console.log("firstDay: ", firstDay)
    const body = {
      boxId: `${userInfo.id}/${dateStringReverse(firstDay)}`,
      noteDate: `${dateStringReverse(today)}`,
      content: message
    }
    console.log("==============", body)
    setTodayNote({
      boxId: `${userInfo.id}/${dateStringReverse(firstDay)}`,
      noteDate: `${dateStringReverse(today)}`,
      content: message,
    })
    const response = Note.updateNote(body)
    response
      .then(result => console.log(result))
      .catch(error => console.log(error))
  }

  return (
    <Container>
      <ModalTextNote
        open={open}
        changeOpen={() => {
          setOpen((open) => !open);
        }}
      />
      <Header>
        <HeaderText disabled={isDisable}>Today</HeaderText>
        <ZoomIconContainer disabled={isDisable} onClick={() => setOpen(true)}>
          <svg
            width="11"
            height="12"
            viewBox="0 0 11 12"
            fill={isDisable ? "#C0C0C0" : "black"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.27778 11.5V10.2778H2.08389L4.83389 7.52778L3.97222 6.66611L1.22222 9.41611V7.22222H0V11.5H4.27778ZM7.02778 5.33389L9.77778 2.58389V4.77778H11V0.5H6.72222V1.72222H8.91611L6.16611 4.47222L7.02778 5.33389Z" />
          </svg>
        </ZoomIconContainer>
      </Header>
      <Body>
        {isDisable ? (
          <DisableDisplay setIsDisable={setIsDisable} handleSave={handleSave} />
        ) : (
          <TextArea
            placeholder="Is your day good?"
            value={note}
            onChange={(event) => setNote(event.target.value)}
          />
        )}

        <Footer>
          <Button
            size="md"
            label="Save"
            disabled={isDisable}
            onClick={() => handleSave(note)}
          />
        </Footer>
      </Body>
    </Container>
  );
}