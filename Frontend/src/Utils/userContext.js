import { createContext } from "react";

export const userContext = createContext({
    userInfo: {
        birthday: "",
        email: "",
        id: 0,
        imageUrl: null,
        username: "",
    },
    setUserInfo: () => {}
});
