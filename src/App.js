import React from 'react'
import Home from './Pages/Home'
import Navbaar from './Pages/Navbaar'
import { image } from './Components/Images'

function App() {
  return (
    <div>
    <div className='navbaar1'>
    <Navbaar />
    </div>

      <Home images={image} />
    </div>
  )
}

export default App
