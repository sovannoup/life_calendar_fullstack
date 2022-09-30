import "./TopNavComp.css";
import profile_picture from "../../../Assets/profile_picture.jpeg";

import SearchComp from "../SearchComp/SearchComp";
import default_profile_img from "../../../Assets/default_profile_img.png";
// import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import { SideNavItems } from "../../../Utils/Constants/SideNavItems";
import { userContext } from "../../../Utils/userContext";

export default function TopNavComp() {
  const location = useLocation();
  const title = location.pathname.match(/^\/[a-z]*/)[0].slice(1);

  return (
    <userContext.Consumer>
      {({ userInfo }) => (
        <div
          className="TopNav-con"
          // style={{zIndex: 2}}
        >
          <div className="TopNav-left-padding" />

          <div className="TopNav-inner-con">
            <div className="TopNav-h1-con">
              <h1 className="TopNav-h1">
                {title === ""
                  ? "Home"
                  : title.charAt(0).toUpperCase() + title.slice(1)}
              </h1>
            </div>

            <div className="TopNav-serach">
              <SearchComp />
            </div>

            <div className="TopNav-profile-con">
              {/* <div className="TopNav-profile-notibell-con">
                <NotificationBellComp />
              </div> */}

              <div className="TopNav-profile-img-p-con">
                <div className="TopNav-profile-img-con">
                  <img
                    className="TopNav-profile-img"
                    src={default_profile_img}
                    alt="Office View"
                  />
                </div>

                <div className="TopNav-profile-p-con">
                  {userInfo.username !== "" ? (
                    <p className="TopNav-profile-p">{userInfo.username}</p>
                  ) : (
                    <a
                      href="/signup"
                      className="TopNav-profile-p TopNav-profile-p-cover"
                    >
                      <b>Sign up</b>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </userContext.Consumer>
  );
}
