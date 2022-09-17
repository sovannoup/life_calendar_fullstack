import "./TopNavComp.css";
import profile_picture from "../../../Assets/profile_picture.jpeg";

import SearchComp from "../SearchComp/SearchComp";
import NotificationBellComp from "../../NotificationBellComp/NotificationBellComp";
// import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import { SideNavItems } from "../../../Utils/Constants/SideNavItems";


export default function TopNavComp() {
  const location = useLocation()
  const title = location.pathname.match(/^\/[a-z]*/)[0].slice(1)

  return (
    <div className="TopNav-con" 
      // style={{zIndex: 2}}
    >
      <div className="TopNav-left-padding" />

      <div className="TopNav-inner-con">
        <div className="TopNav-h1-con">
          <h1 className="TopNav-h1">{title === "" ? "Home" : title.charAt(0).toUpperCase() + title.slice(1) }</h1>
        </div>

        <div className="TopNav-serach">
          <SearchComp />
        </div>

        <div className="TopNav-profile-con">
          <div className="TopNav-profile-notibell-con">
            <NotificationBellComp />
          </div>

          <div className="TopNav-profile-img-p-con">
            <div className="TopNav-profile-img-con">
              <img
                className="TopNav-profile-img"
                src={profile_picture}
                alt="Office View"
              />
            </div>

            <div className="TopNav-profile-p-con">
              <p className="TopNav-profile-p">Say Sovannvathanak</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
