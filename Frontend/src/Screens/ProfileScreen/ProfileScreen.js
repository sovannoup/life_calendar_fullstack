import "./ProfileScreen.css";
import note_icon from "../../Assets/note_icon.png";
import ProfileComp from "../../Components/ProfileCompCon/ProfileComp/ProfileComp";
import TotalNoteComp from "../../Components/ProfileCompCon/TotalNoteComp/TotalNoteComp";
import ProfileNoteComp from "../../Components/ProfileCompCon/ProfileNoteComp/ProfileNoteComp";
import { note_data } from "../../Utils/Constants/NoteMockData";

function ProfileScreen() {
  return (
    // <div
    //   style={{
    //     width: "100vw",
    //     height: "100vh",
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     backgroundColor: "aqua",
    //   }}
    // >
    <div className="profilesc-comp">
      <div className="profilesc-leftside-con">
        <div className="profilesc-title-con">
          <div className="profilesc-title-img-con">
            <img
              className="profilesc-title-img"
              src={note_icon}
              alt="Note Icon"
            />
          </div>

          <div className="profilesc-title-h1-con">
            <h1 className="profilesc-title-h1">Profile</h1>
          </div>
        </div>

        <div className="profilesc-profilecomp">
          <ProfileComp />
        </div>

        <div className="profilesc-totalnotecomp-con">
          <div className="profilesc-totalnotecomp">
            <TotalNoteComp total_notes={"5 Notes"} title={"This Week"} />
          </div>

          <div className="profilesc-totalnotecomp">
            <TotalNoteComp total_notes={"40 Notes"} title={"Total Notes"} />
          </div>
        </div>
      </div>

      <div className="profilesc-rightside-con">
        <div className="profilesc-title-con">
          <div className="profilesc-title-img-con">
            <img
              className="profilesc-title-img"
              src={note_icon}
              alt="Note Icon"
            />
          </div>

          <div className="profilesc-title-h1-con">
            <h1 className="profilesc-title-h1">Notes</h1>
          </div>
        </div>

        <div className="profilesc-note-con">
          {note_data.length ? (
            note_data.map((item, id) => (
              <ProfileNoteComp
                key={id}
                note_date={item.date}
                note_text={item.text}
                note_img={item.img}
              />
            ))
          ) : (
            <h1>Empty</h1>
          )}
        </div>
      </div>
    </div>
    // </div>
  );
}

export default ProfileScreen;
