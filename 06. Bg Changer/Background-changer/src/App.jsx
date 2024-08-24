import { useState } from 'react'

function App() {

  const [color , setColor] = useState('#000')
  return (
    <div className='w-full h-screen ' style={{backgroundColor:color}}>

        <div className=" bg-white opacity-70  navbar flex justify-center items-center w-full px-5 fixed bottom-12 py-3 rounded-xl gap-8  ">
          <button onClick= {()=> setColor('red')} className='outline-none bg-red-500  py-2 px-3 rounded-xl shadow-md shadow-black'>Red</button>
          <button onClick= {()=> setColor('green')} className='outline-none bg-green-500  py-2 px-3 rounded-xl shadow-md shadow-black'>Green</button>
          <button onClick= {()=> setColor('purple')} className='outline-none bg-purple-500  py-2 px-3 rounded-xl shadow-md shadow-black'>Purple</button>
          <button onClick= {()=> setColor('white')} className='outline-none  py-2 px-3 rounded-xl shadow-md bg-white shadow-black text-black'>White</button>
          <button onClick= {()=> setColor('rgb(56 , 189 , 248')} className='outline-none bg-sky-400  py-2 px-3 rounded-xl shadow-md shadow-black'>Sky Blue</button>
  
        </div>
    </div>


  )
}

export default App
