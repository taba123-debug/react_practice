import React, { useState } from "react";
import Usercontext from "./Usercontext";

// props => children all parameters returns exactly same manner !
// access provider in  APP.js , directly also can access and with .provider also
const UsercontextProvider=({children})=>{
    const [user, setUser]=useState('null');
    return(
    <Usercontext.Provider value={{user,setUser }}>
    {children}
    </Usercontext.Provider>

  )
}
export default UsercontextProvider;
