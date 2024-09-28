// returns as js extension should be js
//  json data bydefault in string , chnaged to json  
//dp array=>currency ,through which component is changing
import { useEffect, useState } from "react";

function usecurrencyinfo(currency)

{
    const [data , setdata]=useState({})
  useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}/v1/currencies/${currency}.
`).then((res)=>res.json())
  .then((res)=>setdata(res[currency]))
  console.log(data);
  
  },[currency])
  console.log(data);
  return data;
  
}
export default usecurrencyinfo;
//<<<<<Customer Hooks >>>>>>>>>>
