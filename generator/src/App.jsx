import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [addNumber, setAddNumber] = useState(false);
  const [addChar, setAddChar] = useState(false);
  const [password, setPassword] = useState("");
  const [buttonText, setButtonText] = useState("Copy");

  const generatePassword = () => {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (addNumber) characters += "0123456789";
    if (addChar) characters += "~!@#$%^&*_-=(){}";

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }

    setPassword(generatedPassword);
  };

  useEffect(() => {
    generatePassword();
  }, [length, addNumber, addChar]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
      .then(() => {
        setButtonText("Copied!");
        setTimeout(() => {
          setButtonText("Copy");
        }, 1000); // Change back to "Copy" after 1 second
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className='w-full h-full p-[20px] bg-gray-500 columns-lg rounded-md'>
      <h1 className='text-2xl text-center text-white'>Password Generator</h1>
      <div className='flex mt-3'>
        <input
          className='w-full py-2 px-4 rounded-s'
          placeholder='Password'
          value={password}
          readOnly
        />
        <button 
          className='bg-orange-400 font-semibold text-white rounded-s-none rounded-e'
          onClick={copyToClipboard}
        >
          {buttonText}
        </button>
      </div>
      <div className='flex mt-3 mb-3'>
        <input
          type="range"
          min={6}
          max={50}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
        <label className='text-white text-xl ps-4 ' >{length}</label>
      </div>
      <div className='flex'>
        <div className='flex me-4'>
          <input
            type="checkbox"
            checked={addNumber}
            onChange={(e) => setAddNumber(e.target.checked)}
            className='me-2'
          />
          <label className='text-white' >Number</label>
        </div>
        <div className='flex'>
          <input
            type="checkbox"
            checked={addChar}
            onChange={(e) => setAddChar(e.target.checked)}
            className='me-2'
          />
          <label className='text-white' >Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
