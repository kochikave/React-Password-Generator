import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [char, setChar] = useState(false)
  const [num,setNum] = useState(false)
  const [password,setPassword] = useState("")

  let genratedPasword = ""

  useEffect(() => {
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  for (let i = 0; i <= length; i++) {
    if (char) str += "!@#$%^&*()_+"
    if (num) str += "1234567890"
    genratedPasword += str[Math.floor(Math.random() * str.length + 1)]
  }
  setPassword(genratedPasword)
  },[length,char,num])

  return (
    <>
    <div className='border-gray-600 border-2 p-7 rounded-2xl bg-gray-400' >
      <h2 className='text-3xl text-center text-white' >Password Generator</h2>
      <input 
      type="text"
      placeholder='Password'
      className='p-2 mt-2 w-full mb-4 rounded-lg' 
      value={password}
      readOnly
      />
      <div className='flex'>
      <div className='flex' >
        <input
         type="range"
         className='max-w-40'
         min={8}
         max={50}
         onChange={(e) => {setLength(e.target.value)}}
         /><label className='ps-1 text-white text-lg font-bold' >{length}</label>
      </div>
      <div className='ms-5' >
        <input
         type='checkbox'
         className='me-1'
         onChange={(e)=> {
          setNum(e.target.checked)
         }}
          />
          <label>Numbers</label>
      </div>
      <div className='ms-5' >
        <input
         type='checkbox'
         className='me-1'
         onChange={(e)=> {
          setChar(e.target.checked)
         }}
          />
          <label>Character</label>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
