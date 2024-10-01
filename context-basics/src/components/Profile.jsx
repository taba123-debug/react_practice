import React from 'react';
import { useContext } from 'react';
import Usercontext from '../context/Usercontext'
// import UsercontextProvider from '../context/UsercontextProvider'
function Profile() {
    const {user}=useContext(Usercontext)
    // Make sure initial value is null

if (!user) {
    return (
       <div>Login please!</div>
    ); 
} else {
    return (
        <h1>Welcome {user.username}</h1>
    );
}

    
}

export default Profile


