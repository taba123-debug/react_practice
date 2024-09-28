import React from 'react'

const App = () => {
  return(
    <>
    <div><h1>tabban!</h1></div>
    </>
  )
}
  // const [length, setlength] = useState(8);
  // const [number, setnumAllowd] = useState(false);
  // const [char, setcharAllowed] = useState(false);
  // // new password generate  as page load :)
  // const [Password, setPassword] = useState()
  // const passwordGenerator = useCallback(() => {
  //   let password = "";
  //   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  //   if (number) str += "0123456789"
  //   if (char) str += "*&%$#@!^"
  //   for (let i = 1; i <= length; i++) {
  //     let value = Math.floor(Math.random() * str.length );
  //     password += str.charAt(value)

  //   }
    // call random password generated from  loop str
  //   setPassword(password)
  // }, [length, number, char, setPassword])
  // passwordGenerator()

/*    

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-center text-orange-500 pb-4  bg-gray-600'>password Generator
        <div className='  flex shadow rounded-lg overflow-hidden  px-4 pb-3 mt-3 bg-orange-500'>
          <input
            type='text'
            value={Password}
            className='outline-none rounded-lg w-full py-2 px-3 mt-4'
            placeholder='password'
            readOnly
          />
          <button
            className='outline-none rounded bg-blue-700 text-white px-3 py-1 mt-4 shrink-0'
          >Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-l'>
            <input
              type='range'
              min={6}
              max={100}
              value={length}
              className='cursor-pointer bg-black text-orange-500'
              onChange={(e) => { setlength(e.target.value) }}
            />
            <label className='text-orange-500'>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-l  text-orange-600'>
            <input
              type='checkbox'
              // defaultChecked={setnumAllowd}
              id='numberinput'
              onChange={() => {
                setnumAllowd((prev) => !prev)//false=>true vice versa
              }}
            />
            <label className='px-1' htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-l  text-orange-600'>
            <input
              type='checkbox'
              // defaultChecked={setnumAllowd}
              id='charcterinput'
              onChange={() => {
                setcharAllowed((prev) => !prev)//false=>true vice versa
              }}
            />
            <label className='px-1' htmlFor='numberInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
} */

export default App;
