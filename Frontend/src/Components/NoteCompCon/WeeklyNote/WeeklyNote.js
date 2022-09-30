import DailyMiniNoteDisplay from "../DailyMiniNoteDisplay/DailyMiniNoteDisplay"
import DailyMiniNoteInput from "../DailyMiniNoteInput/DailyMiniNoteInput"

import { Container } from "./WeeklyNoteStyle"

import { useState} from "react"
import ModalTextNote from "../ModalTextNote/ModalTextNote"


export default function WeeklyNote({ weeklyNote, isTodayNote, setIsTodayNote}) {
    const [todayNote, setTodayNote] = useState()
    const [isModalOpen, setIsModalOpen] = useState(false)
    
    console.log("Today Note: ", todayNote)

    return (
        <Container>
            <ModalTextNote 
                open={isModalOpen} 
                changeOpen={()=>{ setIsModalOpen(isModalOpen => !isModalOpen)}} />
            {/* {!isTodayNote ?
                (<DailyMiniNoteInput setMessage={setMessage} setIsTodayNote={setIsTodayNote}></DailyMiniNoteInput>)
                :
                (<DailyMiniNoteDisplay message={message} date={new Date()} />)
            } */}

            { 
                !isTodayNote && <DailyMiniNoteInput
                                    setTodayNote={setTodayNote}
                                    setIsTodayNote={setIsTodayNote} />
            }

            {
                todayNote === undefined ? null : <DailyMiniNoteDisplay 
                                                    message={todayNote.content}
                                                    date={todayNote.noteDate}  />
            }


            {
                weeklyNote.map((item, index) => (
                    <DailyMiniNoteDisplay
                        key={item.id}
                        message={item.content}
                        date={item.noteDate}
                        image={item.image}
                    />
                ))
            }
        </Container>
    )
}






// import React, { useState } from "react";
// import "./NoteBox.css";
// import ModalTextNote from "../ModalTextNote/ModalTextNote";

// export default function NoteBox() {
//     const [open, setOpen] = useState(true);
//   return (
//     <div className="mini-box">
//         <ModalTextNote open={open} changeOpen={()=>{ setOpen(open=> !open)}} />
//         <div className="mini-card" onClick={()=>{setOpen(open => !open)}}>
//             <div className="mini-header">
//                 <div className="mini-left">
//                     <div className="mini-circle"></div>
//                     <p className="mini-date">
//                         Wednesday 24 August, 2022
//                     </p>
//                 </div>
//                 <div className="mini-right">
//                     <div>
//                         <p>Icon</p>
//                     </div>
//                 </div>
//             </div>
//             <div className="mini-body">
//                 <p>sdfsdfsdfasdfasdfasdfasdfasd</p>
//             </div>
//         </div>
//     </div>
//   );
// }
