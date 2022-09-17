import "./LayoutComp.css";

import { Outlet } from "react-router-dom";
import TopNavComp from "../TopNavComp/TopNavComp";
import SideNavComp from "../SideNavComp/SideNavComp";

export default function LayoutScreen() {
  return (
    <div className="container">
      <div className="side-nav">
        <SideNavComp />
      </div>
      <div className="right-side" >
        <div className="top-nav">
          <TopNavComp />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
