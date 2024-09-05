
import { useState } from 'react';
import './App.css';

function App() {
  //1=> at first state made to chnage UI (UPDATE); UI is not changed till now State not used at first
  //2=> onclick needs a fun , if directly fun pass as set colur(value) => returned value saved in onClick , while onClick returns its value
  const [color, setColor] = useState("red")

  return (

    <div className='w-full h-screen duration-100'
      style={{ backgroundColor: color }}>

      <div className='w-100 flex flex-wrap rounded-3xl justify-center fixed bottom-0 m-9 px-9'>

        <div className='bg-white  gap-4 flex flex-wrap  justify-center w-full ml-48 mt-5  px-5 py-5 	my-4 rounded-3xl'>
          <button onClick={() => setColor("red")} className='outline-none shadow-lg   text-white rounded-3xl px-4 py-1 mt-3 my-3' style={{ backgroundColor: "red" }} >Red
          </button>
          <button onClick={() => setColor("blue")} className='outline-none shadow-lg   text-white rounded-3xl px-4 py-1 mt-3 my-3' style={{ backgroundColor: "blue" }} >Blue
          </button>
          <button onClick={() => setColor("olive")} className='outline-none shadow-lg   text-white rounded-3xl px-4 py-1 mt-3 my-3' style={{ backgroundColor: "olive" }} >Olive
          </button>
          <button onClick={() => setColor("green")} className='outline-none shadow-lg   text-white rounded-3xl px-4 py-1 mt-3 my-3' style={{ backgroundColor: "green" }} >Green
          </button>
          <button onClick={() => setColor("black")} className='outline-none shadow-lg   text-white rounded-3xl px-4 py-1 mt-3 my-3' style={{ backgroundColor: "black" }} >Black
          </button>
          <button onClick={() => setColor("purple")} className='outline-none shadow-lg   text-white rounded-3xl px-4 py-1 mt-3 my-3' style={{ backgroundColor: "purple" }} >Purple
          </button>
        </div>
      </div>
    </div>


  );
}

export default App;
