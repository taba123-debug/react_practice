var initialState=0;
const Changed_Number=(state=initialState, action)=>{
    switch(action.type)
    {
        case "INCREMENT" : return state +1;
        case "DECREMENT" : return state-1;
        default: return state;
    }
    }
  export default Changed_Number;
//   Store gives data to  React application 