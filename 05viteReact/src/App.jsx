import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [length, setlength] = useState(8)
  const [numAllwod, setnumAllwod] = useState(false)
  const [charAllwod, setcharAllwod] = useState(false)
  const [password, setpassword] = useState("")


  // useRef hook
  const passwordRef = useRef(null);


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQURSTVWXYZabcdefghijklmnopqurstuvwxyz"

    if (numAllwod) str += "1234567890"
    if (charAllwod) str += "!@#%^&*()~"


    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }

    setpassword(pass)

  }, [length, numAllwod, charAllwod, setpassword])




  useEffect(() => {

    passwordGenerator()

  }, [length, numAllwod, charAllwod, passwordGenerator])


  const copypassword = useCallback(() => {
    passwordRef.current ?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className='w-full h-screen flex items-center justify-center overflow-hidden bg-gray-900'>
        <div className='w-full bg-gray-500 flex flex-wrap items-center justify-center max-w-md shadow-lg rounded-xl p-3'>
          <h1 className='mb-4 text-3xl italic font-thin'>Password Generator</h1>
          <div className='w-full flex shadow-lg rounded-lg overflow-hidden mb-4 gap-2'>
            <input type="text"
              value={password}
              className='outline-none w-full py-1 px-3  rounded-md'
              placeholder='Password'
              readOnly
              ref={passwordRef}
            />
            <button
              className='outline-none w-20 py-1 px-3 bg-blue-500 rounded-md'
              onClick={copypassword}
            >
              Copy
            </button>
          </div>
          <div className='w-full flex shadow-sm rounded-lg overflow-hidden my-4  gap-2'>
            <div className='flex items-center gap-x-2'>
              <input type="range"
                min={6}
                max={20}
                value={length}
                className='cursor-pointer'
                onChange={(e) => { setlength(e.target.value) }}
              />
              <label>Lenght : {length}</label>

              <input
                type="checkbox"
                defaultChecked={numAllwod}
                id="numberInput"
                onChange={
                  () => {
                    setnumAllwod((pre) => !(pre))
                  }
                }
                className='cursor-pointer'
              />
              <label>Numbers</label>

              <input
                type="checkbox"
                defaultChecked={charAllwod}
                id="charInput"
                onChange={() => {
                  setcharAllwod((pre) => !(pre))
                }}

                className='cursor-pointer'
              />
              <label>Charcters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
