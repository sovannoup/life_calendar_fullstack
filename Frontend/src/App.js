import React, { Fragment, useState } from "react";
import { useMemo } from "react";
import Routing from "./Utils/Routing";
import { userContext } from "./Utils/userContext";

export default function App() {
  const [userInfo, setUserInfo] = useState({
    birthday: "",
    email: "",
    id: 0,
    imageUrl: null,
    username: ""
  })

  const value = useMemo( () => ({userInfo, setUserInfo}), [userInfo])

  return (

    <Fragment>
      <userContext.Provider value={value}>
        <Routing />
      </userContext.Provider>
    </Fragment>
  );
}
