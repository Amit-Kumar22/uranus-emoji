import React from 'react'
import "../css/Navbaar.css"
import Navbaar2 from './Navbaar2'

function Navbaar() {
  return (
    <div>
      <div className='navbaar'>
        <div className='logo'>
        <img src='https://meme-token-gilt.vercel.app/assets/29231-B1Z16x30.png' />
        <p>$URANUS</p>
        </div>

        
    <div className='navbaar2'>
    <Navbaar2 />
    </div>

        <div className='button'>
            <button>Made by Amit</button>
        </div>
      </div>
    </div>
  )
}

export default Navbaar
