import React from 'react'
import { useState } from 'react'

const App = () => {
  
const [time, settime] = useState(new Date().toLocaleTimeString())

setInterval(() =>{
  settime(new Date().toLocaleTimeString());
}, 1000)


  return (
    <div className='flex h-screen items-center justify-center bg-gray-600'>
      <h1 className='text-9xl text-white'>{time}</h1>
    </div>
  )
}

export default App
