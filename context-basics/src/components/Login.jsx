import React,{useState,useContext} from 'react'
import Usercontext from '../context/Usercontext'
//  ap kia krygy ? kia krygy kuch nhi krygy copy paste krygy :)
function Login() {
    const [username , setUsername]=useState('null');
    const [password , setPassword]=useState('null');
    const {setUser}=useContext(Usercontext)
    const handleSubmit=(e)=>{
    e.preventDefault()
    setUser({username,password })
    }
  return ( 
    <div class="main">
   
      <h2 class="context">Login</h2>
      <label id='name'>Name :   </label>
      <input type='text' 
    //   value={username}
      onChange={(e)=>{
        setUsername(e.target.value)
      }}
      placeholder='username' />
      <br/>
        <label id='password'>Password : </label>
      <input type='text' 
    //   value={password}
      onChange={(e)=>{
        setPassword(e.target.value)
      }}
      placeholder='password' />
            <br/>

      <button onClick={handleSubmit}>Submit</button>
    </div>
    
  )
}

export default Login
