import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className='min-h-[90vh]' style={{backgroundColor:color}}>
       <div className='rounded-3xl bg-white outline-double outline-black'>
        <button onClick={()=> setColor("red")} className='text-white rounded-3xl outline-none p-3 m-2' style={{backgroundColor:"red"}}>Red</button>
        <button onClick={()=> setColor("green")} className='text-white rounded-3xl outline-none p-3 m-2' style={{backgroundColor:"green"}}>Green</button>
        <button onClick={()=> setColor("blue")} className='text-white rounded-3xl outline-none p-3 m-2' style={{backgroundColor:"blue"}}>Blue</button>
        <button onClick={()=> setColor("black")} className='text-white rounded-3xl outline-none p-3 m-2' style={{backgroundColor:"black"}}>Black</button>
        <button onClick={()=> setColor("teal")} className='text-white rounded-3xl outline-none p-3 m-2' style={{backgroundColor:"teal"}}>teal</button>
        <button onClick={()=> setColor("yellow")} className='text-black rounded-3xl outline-none p-3 m-2' style={{backgroundColor:"yellow"}}>Yellow</button>
        <button onClick={()=> setColor("hotpink")} className='text-white rounded-3xl outline-none p-3 m-2' style={{backgroundColor:"hotpink"}}>Hotpink</button>
        <button onClick={()=> setColor("white")} className='text-black rounded-3xl outline-black outline-double p-3 m-2' style={{backgroundColor:"white"}}>White</button>
       </div>
      </div>
    </>
  )
}

export default App
