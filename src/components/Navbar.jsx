import React from 'react'
import Button from './Button'
import '/dist/style.css'

function Navbar({ buttonTexts }) {
  return (
    <nav className="h-30 justify-center bg-transparent">
      <div className="flex justify-between items-center text-white">
        <div className="text-2xl font-bold ml-4 mt-4">
            <img src="4i Logo.png" alt="4i Logo" className="h-12 md:h-16 w-auto ml-2 md:ml-[100%]" />
        </div>
        <ul className="flex space-x-9  md:space-x-16 mr-4 md:mr-[3%] mt-5">
          {buttonTexts.map((text, index) => (
            <li key={index}><Button text={text} /></li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;