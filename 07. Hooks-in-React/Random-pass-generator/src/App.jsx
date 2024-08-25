import { useState, useCallback, useEffect , useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isChar, setIsChar] = useState(false);
  const [password, setPassword] = useState("");


  const passwordRef = useRef(null)

  const GeneratePass = useCallback(() => {
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (isNumber) str += '1234567890';
    if (isChar) str += "!@#$%^&*(){}";

    let pass = '';

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }
    setPassword(pass);
  }, [length, isNumber, isChar, setPassword]);



    // GeneratePass(); // can't run directly have to use UseEffect hook
    useEffect(()=>{ 
      GeneratePass()
    }, [length , isChar , isNumber , GeneratePass])


    // Logic for copy


    const copyToClipboard = useCallback(()=>{
      passwordRef.current?.select();
      window.navigator.clipboard.writeText(password);
    } , [password]);
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-800 p-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Random Password Generator
        </h1>

        <span className="flex">
        <input
          type="text"
          className="border w-[300px] border-gray-300 dark:border-gray-600 rounded-md p-2  mb-4 text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700"
          value={password}
          readOnly
        />
        <button onClick={copyToClipboard} className='bg-blue-600 h-8 py-1 px-4 rounded-lg   text-white'>Copy</button>

        </span>


        <div className="range-box flex items-center gap-3">
          <label className="text-white" htmlFor="range">
            Password Length:
          </label>
          <input
            className="cursor-pointer"
            type="range"
            min={6}
            max={100}
            value={length}
            id="range"
            onChange={(e) => setLength(e.target.value)}
          />
          <p className="text-white ">{length}</p>
        </div>

        <div className="flex gap-3">
          <input
            type="checkbox"
            id="useNumbers"
            onChange={() => setIsNumber((prev)=> !prev)} 
          />
          <label htmlFor="useNumbers" className="text-white">
            Use Numbers{' '}
          </label>

          <input type="checkbox" id="useChar"
           onChange={() => setIsChar((prev)=> !prev)}
            />
          <label
            htmlFor="useChar"
            className="text-white"
          >
            Use Special Characters
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
