import { 
    Container,
} from "./SettingMenuStyle"
import SettingButton from "../SettingButton/SettingButton"
import { SettingItemList } from "../../../Utils/Constants/SettingItemLish"
import { useLocation } from "react-router-dom"




export default function SettingMenu(){
    const location = useLocation()
    return (
        <Container>
            {
                SettingItemList.map( (item) => (
                    <SettingButton
                        icon={item.icon} 
                        display={item.display}
                        description={item.description}
                        to={item.to}
                        selected={location.pathname === `/setting/${item.to}`} />
                ))
            }
        </Container>
    )
}