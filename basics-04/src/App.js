import React from 'react';
import './App.css';
import Cards from './components/Cards';

{/* PROPS => Makes components reuseable  => cards make a singl components */ }
//  
const User = () => {
  return (
    <>

      <p className='bg-green-500 text-pink-700 font-medium p-6 w-52 m-9 rounded-xl mb-9'>
        This is paragraph :)
      </p>


      {/*  SomeHow you want to change the data of Cards , like as : you want to show at each card each diff name !=> 
               1=> Here Props came whihc makes our components reuseable ! instead to code for 100 cards , change each useable directory according
               to need  
               2=> All components have access to have there props */}
      <Cards />
      <Cards />

    </>



  )
}

export default User;
