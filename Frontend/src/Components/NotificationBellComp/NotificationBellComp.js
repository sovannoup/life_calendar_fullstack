import "./NotificationBellComp.css";
import notifi_bell_icon from "../../Assets/notifi_bell.svg";
import { useState } from "react";

function NotificationBellComp() {
  const [numNotif, setNumNotif] = useState(1);

  const handleOnClick = () => {
    setNumNotif(0);
  };

  return (
    <div className="Notifi-comp" onClick={() => handleOnClick()}>
      <div className="Notifi-img-con">
        <img className="Notifi-img" src={notifi_bell_icon} alt="Office View" />
      </div>
      {numNotif !== 0 && (
        <div className="Notifi-red-border-con">
          <div className="Notifi-red-border">
            <div className="Notifi-red" />
          </div>
        </div>
      )}
    </div>
  );
}

export default NotificationBellComp;
