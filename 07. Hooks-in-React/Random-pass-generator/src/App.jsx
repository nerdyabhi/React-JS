import { useState, useCallback } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isChar, setIsChar] = useState(false);
  const [password, setPassword] = useState('GeneratePass');

  const GeneratePass = useCallback(() => {
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (isNumber) str += '1234567890';
    if (isChar) str += '!@#$%^&*(){}:><?';

    let pass = '';

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random * length + 1);
      pass += str[index];
    }
    setPassword(pass);
  }, [length, isNumber, isChar, setPassword]);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-800 p-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Random Password Generator
        </h1>

        <input
          type="text"
          className="border border-gray-300 dark:border-gray-600 rounded-md p-2 w-64 mb-4 text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700"
          value={password}
          readOnly
        />

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
            onChange={(prev) => setIsNumber(!prev)}
          />
          <label htmlFor="useNumbers" className="text-white">
            Use Numbers{' '}
          </label>

          <input type="checkbox" id="useChar" />
          <label
            htmlFor="useChar"
            className="text-white"
            onChange={(prev) => setIsChar(!prev)}
          >
            Use Special Characters
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
