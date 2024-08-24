// import { useState } from 'react'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css';

function App() {
  let [count, setCount] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add More {count}
      </button>
      <br />
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Remove More {count}
      </button>

      <p>Total count is {count}</p>
    </>
  );
}

export default App;
