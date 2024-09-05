//useState why it is used ? while DOM JS is present 
import React , {useState}from 'react'

const Home = () => {
    const [count , setCount]=useState(9);
    // const [data , setdata]=useEffect();
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json => console.log(json))
    });
  return (
    <div>
      <h1>Home Page</h1>
      <p>You clicked Counter {count}</p>
      <button onClick={()=>setCount(count++)}>changed Value :)</button>
     
    </div>
  )
}

export default Home
