import DailyMiniNoteDisplay from "../DailyMiniNoteDisplay/DailyMiniNoteDisplay"
import DailyMiniNoteInput from "../DailyMiniNoteInput/DailyMiniNoteInput"

import { useState } from "react"
import pic1 from './image.jpg'
import pic2 from './pic_trulli.jpg'
import ModalTextNote from "../ModalTextNote/ModalTextNote"


export default function WeeklyNote() {
    const [message, setMessage] = useState('')
    const [isNoted, setIsNoted] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(true)


    const weeklyNote = [
        {
            message: "The <img> tag is used to embed an image in an HTML page. Images are not technically inserted into a web page; images are linked to web pages. The <img> tag.",
            date: 'Monday 25 July, 2022',
            image: pic1
        },
        {
            message: "The <img> tag is used to embed an image in an HTML page. The <img> tag is used to embed an image in an HTML page. Images are not technically inserted into a web page; images are linked to web pages. The <img> tag.",
            date: 'Monday 25 July, 2022',
            image: pic2
        },
        {
            message: "The <img> tag is used to embed an image in an HTML page. The <img> tag is used to embed an image in an HTML page. Images are not technically inserted into a web page; images are linked to web pages. The <img> tag. The <img> tag is used to embed an image in an HTML page. The <img> tag is used to embed an image in an HTML page. Images are not technically inserted into a web page; images are linked to web pages. The <img> tag.",
            date: 'Monday 25 July, 2022',
            image: null
        },
        {
            message: "The <img> tag is used to embed an image in an HTML page. The <img> tag is used to embed an image in an HTML page. Images are not technically inserted into a web page; images are linked to web pages. The <img> tag. The <img> tag is used to embed an image in an HTML page. The <img> tag is used to embed an image in an HTML page. Images are not technically inserted into a web page; images are linked to web pages. The <img> tag. The <img> tag is used to embed an image in an HTML page. The <img> tag is used to embed an image in an HTML page. Images are not technically inserted into a web page; images are linked to web pages. The <img> tag. The <img> tag is used to embed an image in an HTML page. The <img> tag is used to embed an image in an HTML page. Images are not technically inserted into a web page; images are linked to web pages. The <img> tag. The <img> tag is used to embed an image in an HTML page. The <img> tag is used to embed an image in an HTML page. Images are not technically inserted into a web page; images are linked to web pages. The <img> tag. The <img> tag is used to embed an image in an HTML page. The <img> tag is used to embed an image in an HTML page. Images are not technically inserted into a web page; images are linked to web pages. The <img> tag.",
            date: 'Monday 25 July, 2022',
            image: null
        },
    ]
    return (
        <div>
            <ModalTextNote open={isModalOpen} changeOpen={()=>{ setIsModalOpen(isModalOpen => !isModalOpen)}} />
            {!isNoted ?
                (<DailyMiniNoteInput setMessage={setMessage} setIsNoted={setIsNoted}></DailyMiniNoteInput>)
                :
                (<DailyMiniNoteDisplay message={message} date="Today" />)
            }
            {
                weeklyNote.map((item) => (
                    <DailyMiniNoteDisplay
                        message={item.message}
                        date={item.date}
                        image={item.image}
                    />
                ))
            }
        </div>
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
