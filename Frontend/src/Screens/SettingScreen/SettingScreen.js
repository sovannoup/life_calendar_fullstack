import { Container, LeftSide, RightSide } from "./SettingScreenStyle";
import SettingMenu from "../../Components/SettingCompCon";
import { Outlet } from "react-router-dom";
// import { Outlet } from "react-router-dom";



function SettingScreen() {
  return (
    <Container>
      <LeftSide>
        <SettingMenu />
      </LeftSide>
      <RightSide>
        <Outlet />
      </RightSide>
    </Container>
  );
}





export default SettingScreen;
