import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import LoginScreen from "../Screens/LoginScreen/LoginScreen";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";
import SettingScreen from "../Screens/SettingScreen/SettingScreen";
// import LayoutScreen from "../Components/LayoutCompCon/LayoutComp/LayoutComp";
import LayoutScreen from "../Components/LayoutCompCon";
import NoMatch from "../Components/NoMatchComp/NoMatch";
import SettingAccount from "../Components/SettingCompCon/SettingAccount/SettingAccount";
import SettingUnderMaintainance from "../Components/SettingCompCon/SettingUnderMaintainance/SettingUnderMaintainance";
import SignUpScreen from "../Screens/SignUpScreen/SignUpScreen";

// Setting Screen

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutScreen />}>
          {/* <Redirect to='/home' /> */}

          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="home" element={<HomeScreen />} />
          <Route path="profile" element={<ProfileScreen />} />
          <Route path="setting" element={<SettingScreen />}>
            <Route
              path="/setting"
              element={<Navigate replace to="account" />}
            />
            <Route path="account" element={<SettingAccount />} />
            <Route path="appearance" element={<SettingUnderMaintainance />} />
            <Route path="export" element={<SettingUnderMaintainance />} />
            <Route path="support" element={<SettingUnderMaintainance />} />
            <Route path="invite" element={<SettingUnderMaintainance />} />
          </Route>
        </Route>
        <Route path="login" element={<LoginScreen />} />
        <Route path="signup" element={<SignUpScreen />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default Routing;
