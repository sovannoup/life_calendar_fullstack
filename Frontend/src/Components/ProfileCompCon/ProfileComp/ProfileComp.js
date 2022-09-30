import "./ProfileComp.css";
import profile_picture from "../../../Assets/profile_picture.jpeg";
import edit_icon_blue from "../../../Assets/edit_icon_blue.png";
import edit_icon_white from "../../../Assets/edit_icon_white.png";
import { useState } from "react";

function ProfileComp() {
  const [editIconA, setEditIconA] = useState(edit_icon_blue);
  const [editIconB, setEditIconB] = useState(edit_icon_blue);
  const hover = (buttonType) => {
    buttonType === "a"
      ? setEditIconA(edit_icon_white)
      : setEditIconB(edit_icon_white);
  };

  const unhover = (buttonType) => {
    buttonType === "a"
      ? setEditIconA(edit_icon_blue)
      : setEditIconB(edit_icon_blue);
  };

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
    <div className="profile-comp">
      {/* Profile Info Con */}
      <div className="profile-info-con">
        <div className="profile-info-img-con">
          <img
            className="profile-info-img"
            src={profile_picture}
            alt="Profile"
          />
        </div>

        <div className="profile-info-details-con">
          <h1 className="profile-info-details-h1">Say Sovannvathanak</h1>
          <p className="profile-info-details-p">
            <b>Email:</b> username@gmail.com
          </p>
          <p className="profile-info-details-p">
            <b>Birth Date:</b> 05-JUNE-2000
          </p>
        </div>
      </div>

      {/* Profile Button Con */}
      <div className="profile-button-con">
        {/* Button Edit Profile */}
        <button
          type="button"
          className="profile-button-edit-con"
          style={{ padding: "0 30px" }}
          onMouseOver={() => hover("a")}
          onMouseOut={() => unhover("a")}
        >
          <div className="profile-button-edit-img-con">
            <img
              className="profile-button-edit-img"
              src={editIconA}
              alt="Edit Button"
            />
          </div>
          <div className="profile-button-edit-h1-con">
            <h1 className="profile-button-edit-h1">Edit Profile</h1>
          </div>
        </button>

        {/* Button Edit Password */}
        <button
          type="button"
          className="profile-button-edit-con"
          onMouseOver={() => hover("b")}
          onMouseOut={() => unhover("b")}
        >
          <div className="profile-button-edit-img-con">
            <img
              className="profile-button-edit-img"
              src={editIconB}
              alt="Edit Button"
            />
          </div>
          <div className="profile-button-edit-h1-con" style={{ width: 120 }}>
            <h1 className="profile-button-edit-h1">Change Password</h1>
          </div>
        </button>
      </div>
    </div>
    // </div>
  );
}

export default ProfileComp;
