import {BiHome, BiNotepad} from 'react-icons/bi'
import {TbSettings, TbLogout} from 'react-icons/tb'


const iconName ={
    home: BiHome,
    note: BiNotepad,
    setting: TbSettings,
    logout: TbLogout
}

export default function Icons({name}){
    const Icon = iconName[name]
    return(
        <Icon color="white" size={30} />
    )
}

