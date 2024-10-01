import React from "react";
// createContext predefined method as Hooks!
// each context is a provider , each provides a varaible!
// -----------------------
/*
 <userContext> =>acts as a wrapper  such as div , fragment
  <all req components>=> these components can access now this global variable provider(UserContext)
  <Login/>
  <Home/>
  <UserCard/>
  <userContext/>
// -------------------------------
*/ 
/* Steps to follow :
i) hold userContext  in variable .
ii)provider is jsx ,  
iii) wrap in provider(userContext) so all req components can access global data
 at last=>hold all req components in a wrapper user context*/
const Usercontext=React.createContext();
export default Usercontext;