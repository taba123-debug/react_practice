// src/App.js

import React from 'react';
import SignUp from './SignUp';
//   WEEK #7 (LECTURE CONTENT) 
// manual to automates && optimzes our site ranking with SPA :)
// CONTENT based repeating of same components but In react SPA applicable here , where Reuseability occurs in React :)
// React works on SPA for Reuseability components change 
//npm => npx command use  => command line sue to install packages
//virtual DOM and RealDOM
//Lazy Loadings:)
//components based => React accepts Jsx => while js changed to jsx :)
function App() {
    return (
        <div className="App">
            <SignUp />
        </div>
    );
}

export default App;
